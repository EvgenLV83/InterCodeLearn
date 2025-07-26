import { domElements } from './dom-elements.js';

// Настройка объяснения ключевых слов
export function setupKeywordExplanation() {
  const { userInputEl, codeExplanationEl, explanationContentEl } = domElements;
  let lastTypedWord = '';
  let explanationTimeout;

  userInputEl.addEventListener('input', async (e) => {
    clearTimeout(explanationTimeout);
    const text = userInputEl.value;
    const words = text.split(/\s+/);
    const currentWord = words[words.length - 1].trim();

    if (currentWord && currentWord !== lastTypedWord) {
      lastTypedWord = currentWord;

      explanationTimeout = setTimeout(async () => {
        try {
          const response = await fetch(`/api/keyword/${currentWord}`);
          if (response.ok) {
            const data = await response.json();
            explanationContentEl.innerHTML = `
              <p><strong>${currentWord}:</strong> ${data.description}</p>
              ${data.example ? `<p><em>Пример:</em> <code>${data.example}</code></p>` : ''}
            `;
            codeExplanationEl.style.display = 'block';
          } else {
            codeExplanationEl.style.display = 'none';
          }
        } catch (error) {
          console.error('Error fetching keyword info:', error);
          codeExplanationEl.style.display = 'none';
        }
      }, 800);
    }
  });

  userInputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && userInputEl.value.trim() === '') {
      codeExplanationEl.style.display = 'none';
    }
  });
}

// Парсинг пользовательского ввода
export function parseUserInput(inputText) {
  // Нормализуем входной текст
  inputText = inputText.replace(/([(){}])/g, ' $1 ');
  
  // Определяем ключевые слова для поиска
  const keywords = ['void', 'int', 'return', 'string', 'bool', 'int\\[\\]', '='];
  const regex = new RegExp('(?:' + keywords.join('|') + ')\\s+([^;.!\\s]+)', 'g');

  const braceValues = [];
  const braceRegex = /\{(\d+)\}/g;
  let match;
  
  while ((match = braceRegex.exec(inputText)) !== null) {
    braceValues.push(match[1]);
  }

  const quotedParts = [];
  const quotedRegex = /"(.*?)"/g;
  
  while ((match = quotedRegex.exec(inputText)) !== null) {
    const content = match[1];
    quotedParts.push(content);
  }

  const quotedParts1 = [];
  const quotedRegex1 = /\$\s*"([^{"{]*)/g;
  
  while ((match = quotedRegex1.exec(inputText)) !== null) {
    const content = match[1];
    quotedParts1.push(content);
  }

  const matches = [];
  
  if (quotedParts1.length > 0) {
    matches.push(...quotedParts1);
  }

  if (quotedParts.length > 0) {
    matches.push(quotedParts[0]);
  }
  
  for (let i = 1; i < braceValues.length; i++) {
    matches.push(braceValues[i]);
  }

  // Обрабатываем ключевые слова
  while ((match = regex.exec(inputText)) !== null) {
    const word = match[1].replace(/[^\wа-яА-ЯёЁ]/g, '').trim();
    if (word) matches.push(word);
  }

  

  return matches.map(word => word);
}