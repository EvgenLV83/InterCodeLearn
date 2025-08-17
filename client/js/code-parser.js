import { domElements } from './dom-elements.js';

// Получаем текущий путь
const path = window.location.pathname; 
// Извлекаем имя файла
const filename = path.substring(path.lastIndexOf('/') + 1); 
// Получаем язык без расширения
const language = filename.split('.')[0]; 

// Настройка объяснения ключевых слов
export function setupKeywordExplanation() {
  const { userInputEl, codeExplanationWord, explanationContentEl } = domElements;
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
          const response = await fetch(`/api/${language}/${language}_keywords/${currentWord}`);
          if (response.ok) {
            const data = await response.json();
            explanationContentEl.innerHTML = `
              <p><strong>${currentWord}:</strong> ${data.description}</p>
              ${data.example ? `<p><em>Пример:</em> <code>${data.example}</code></p>` : ''}
            `;
            codeExplanationWord.style.display = 'block';
          } else {
            codeExplanationWord.style.display = 'none';
          }
        } catch (error) {
          console.error('Error fetching keyword info:', error);
          codeExplanationWord.style.display = 'none';
        }
      }, 200);
    }
  });



  userInputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && userInputEl.value.trim() === '') {
      codeExplanationWord.style.display = 'none';
    }
  
  });
}

export function parseUserInput(inputText) {
  // Нормализуем входной текст
  inputText = inputText.replace(/([(){}])/g, ' $1 ');
  
  // Определяем ключевые слова для поиска
  const keywords = ['void', 'int', 'return', 'string', 'bool', 'int\\[\\]', '=', 'double', 'int\\[\\,\\]', 'int\\[\\,\\,\\]'];
  const regex = new RegExp('(?:' + keywords.join('|') + ')\\s+([^;.!\\s]+)', 'g');

  const matches = [];

  // 1. Обработка интерполированных строк ($"... {variable} ...")
  const interpolatedRegex = /\$\s*"([^{"{]*)/g;
  let match;
  while ((match = interpolatedRegex.exec(inputText)) !== null) {
    const content = match[1];
    // Извлекаем переменные из фигурных скобок
    const vars = content.match(/\{([^}]+)\}/g) || [];
    vars.forEach(v => matches.push(v.slice(1, -1)));
    // Добавляем текст без переменных
    const text = content.replace(/\{[^}]+\}/g, '').trim();
    if (text) matches.push(text);
  }

  // 2. Обработка конкатенации строк ("text" + variable + "text")
  const concatRegex = /"(.*?)"\s*\+\s*([^+\s)]+)\s*\+\s*"(.*?)"/g;
  while ((match = concatRegex.exec(inputText)) !== null) {
    matches.push(match[1], match[2], match[3]);
  }

// 3. Обработка простых строк в кавычках ("text")
  const quotedRegex = /"(.*?)"/g;
  while ((match = quotedRegex.exec(inputText)) !== null) {
    // Проверяем, не является ли частью интерполяции/конкатенации
    if (!inputText.includes(`$"${match[0]}`) && 
        !inputText.includes(`${match[0]} +`)) {
      matches.push(match[1]);
    }
  }

// Обработка дробных чисел (включая целые)
const decimalRegex = /(\d+\.?\d*|\.\d+)/g;
while ((match = decimalRegex.exec(inputText)) !== null) {
    matches.push(match[1]); // Используем match[0] вместо match[1]
}


  // Обработка ключевых слов (переменных, типов и т.д.)
  while ((match = regex.exec(inputText)) !== null) {
    const word = match[1].replace(/[^\wа-яА-ЯёЁ]/g, '').trim();
    if (word) matches.push(word);
  }

  // Удаляем дубликаты и возвращаем результат
  return [...new Set(matches.filter(item => item && item.trim()))];
}
