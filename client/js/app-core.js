
import { translations } from './translations.js';
import { domElements } from './dom-elements.js';
import { parseUserInput } from './code-parser.js';
// Получаем текущий путь
const path = window.location.pathname;
// Извлекаем имя файла
const filename = path.substring(path.lastIndexOf('/') + 1); 
// Получаем язык без расширения
const language = filename.split('.')[0]; 
// Инициализируем состояние приложения
let appState = {
  examples: [],
  templates: [],
  currentExampleIndex: 0,
  codeVisible: false,
  currentLanguage: language
};

// Загрузка данных
export async function loadData() {
  const { loadingEl, tryButton, resultEl } = domElements;

  loadingEl.style.display = 'block';
  tryButton.disabled = true;

  try {
    const [examplesResponse, templatesResponse] = await Promise.all([
      fetch(`/api/${language}/${language}_examples`),
     
      fetch(`/api/${language}/${language}_templates`)
    ]);
 console.log(language);
    if (!examplesResponse.ok) throw new Error('Ошибка загрузки примеров');
    if (!templatesResponse.ok) throw new Error('Ошибка загрузки шаблонов');

    appState.examples = await examplesResponse.json();
    appState.templates = await templatesResponse.json();

    tryButton.disabled = false;
    loadExample(0);
  } catch (error) {
    resultEl.innerText = `Ошибка: ${error.message}`;
    console.error(error);
  } finally {
    loadingEl.style.display = 'none';
  }
}

// Загрузка примера
export function loadExample(index) {
  const {
    codeEl, descriptionEl, userInputEl, resultEl,
    comparisonEl, codeExplanationEl, nextButton, tryButton, checkButton
  } = domElements;

  if (index !== null && index < appState.examples.length) {
    appState.currentExampleIndex = index;
    const example = appState.examples[index];

    codeEl.innerText = example.code;
    descriptionEl.innerText = example.description;
    userInputEl.value = '';
    resultEl.innerText = '';
    codeEl.style.display = 'none';
    comparisonEl.style.display = 'none';
    codeExplanationEl.style.display = 'none';
    appState.codeVisible = false;
    nextButton.disabled = true;
    tryButton.innerText = "Показать код";
    checkButton.disabled = false;
  } else {
    resultEl.innerText = "Поздравляем! Вы прошли все примеры!";
  }
}

// Проверка кода
export function checkCode() {
  const { userInputEl, resultEl, comparisonEl, userCodeDisplayEl, correctCodeDisplayEl, nextButton, codeExplanationEl} = domElements;
  const userInput = userInputEl.value.trim().replace(/\s+/g, ' ');
  const N = parseUserInput(userInput);


// Проверка на зарезервированные слова
  const reservedWords = LANGUAGE_KEYWORDS[appState.currentLanguage] || [];
  for (let i = 0; i < N.length; i++) {
    if (reservedWords.includes(N[i])) {
      resultEl.innerText = `❌ Ошибка: значение "${N[i]}" является зарезервированным словом в ${appState.currentLanguage}!`;
      comparisonEl.style.display = 'none';
      codeExplanationEl.style.display = 'none';
      return;
    }
  }


  let correctTemplate = appState.examples[appState.currentExampleIndex].code;
  let correctCode = appState.templates[appState.currentExampleIndex].codeP;

  // Заменяем заполнители только для вычисления правильности
  for (let i = 0; i < N.length; i++) {
    correctCode = correctCode.replace(new RegExp(`\\{${i}\\}`, 'g'), N[i]);
  }

  const normalizedUserInput = userInput.replace(/\s+/g, '').trim();
  const normalizedCorrectCode = correctCode.replace(/\s+/g, '').trim();

  console.log(normalizedUserInput);
  console.log(normalizedCorrectCode);

  if (normalizedUserInput === normalizedCorrectCode) {
    const resultUser = calculateResult(N, appState.currentExampleIndex);
    resultEl.innerText = `✅ Правильно! \n Результат вашего кода: \n ${resultUser} \n Нажмите 'Следующий'.`;
    nextButton.disabled = false;
    comparisonEl.style.display = 'none';
    displayCodeExplanation(appState.currentExampleIndex);
  } else {
    resultEl.innerText = "❌ Неправильно! Смотрите сравнение ниже.";
    comparisonEl.style.display = 'block';
    userCodeDisplayEl.innerText = userInput;

    // Для отображения правильного кода показываем шаблон с заполнителями
    correctCodeDisplayEl.innerText = correctTemplate;
    codeExplanationEl.style.display = 'none'; 
  }
}

function calculateResult(N, currentIndex) {
  const example = appState.examples[currentIndex];

  if (example.next === 1) return N[0];
  if (example.next === 2) return Number(N[0]) + Number(N[1]);
  if (example.next === 3) {
    let n = parseInt(N[0]);
    let result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
    return result.join(' ');
  }
  if (example.next === 4) {
    const original = N[2];
    const upper = original.toUpperCase();
    const lower = original.toLowerCase();
    return "\n" + upper + "\n" + lower;
  }
  if (example.next === 5) {
    return `${N[0]} ${N[4]}${N[3]} ${N[6]}\n${N[0]} ${N[4]}${N[3]} ${N[6]}`;
  }
  if (example.next === 6) {
    return Number(N[2]) * Number(N[3]);
  }
  if (example.next === 7) {
    const num = Number(N[4]);
    return num % 2 === 0 ? `${num} - четное число.` : `${num} - нечетное число.`;
  }
  if (example.next === 8) {
    let n = parseInt(N[0]);
    let result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0) result.push(i);
    }
    return result.join(' ');
  }
  if (example.next === 9) {
    return Math.max(Number(N[2]), Number(N[3]));
  }
  if (example.next === 10) {
    return Number(N[2]) + Number(N[3]) + Number(N[4]) + Number(N[5]) + Number(N[6]);
  }
  if (example.next === 11) {
    return `${N[0]} ${N[1]} ${N[2]}\n${N[3]} ${N[4]} ${N[5]}\n${N[6]} ${N[7]} ${N[8]}`;
  }
  if (example.next === 12) {
   return Math.max(Number(N[2]), Number(N[3]), Number(N[4]), Number(N[5]), Number(N[6]), Number(N[7]), Number(N[8]), Number(N[9]));
  }
  return 0;
}


// Словарь зарезервированных слов для разных языков
const LANGUAGE_KEYWORDS = {
  'CSharp': ['abstract', 'as', 'base', 'bool', 'break', 'byte', 'case', 'catch', 'char', 'checked', 'class', 'const', 'continue', 'decimal', 'default', 'delegate', 'do', 'double', 'else', 'enum', 'event', 'explicit', 'extern', 'false', 'finally', 'fixed', 'float', 'for', 'foreach', 'goto', 'if', 'implicit', 'in', 'int', 'interface', 'internal', 'is', 'lock', 'long', 'namespace', 'new', 'null', 'object', 'operator', 'out', 'override', 'params', 'private', 'protected', 'public', 'readonly', 'ref', 'return', 'sbyte', 'sealed', 'short', 'sizeof', 'stackalloc', 'static', 'string', 'struct', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'uint', 'ulong', 'unchecked', 'unsafe', 'ushort', 'using', 'virtual', 'void', 'volatile', 'while'],
  'CPP': ['alignas', 'alignof', 'and', 'and_eq', 'asm', 'auto', 'bitand', 'bitor', 'bool', 'break', 'case', 'catch', 'char', 'char8_t', 'char16_t', 'char32_t', 'class', 'compl', 'concept', 'const', 'consteval', 'constexpr', 'constinit', 'const_cast', 'continue', 'co_await', 'co_return', 'co_yield', 'decltype', 'default', 'delete', 'do', 'double', 'dynamic_cast', 'else', 'enum', 'explicit', 'export', 'extern', 'false', 'float', 'for', 'friend', 'goto', 'if', 'inline', 'int', 'long', 'mutable', 'namespace', 'new', 'noexcept', 'not', 'not_eq', 'nullptr', 'operator', 'or', 'or_eq', 'private', 'protected', 'public', 'register', 'reinterpret_cast', 'requires', 'return', 'short', 'signed', 'sizeof', 'static', 'static_assert', 'static_cast', 'struct', 'switch', 'template', 'this', 'thread_local', 'throw', 'true', 'try', 'typedef', 'typeid', 'typename', 'union', 'unsigned', 'using', 'virtual', 'void', 'volatile', 'wchar_t', 'while', 'xor', 'xor_eq']
};



        // Функция для поиска последнего введенного слова
       export function getLastWord(text, cursorPos) {
            if (cursorPos === 0) return '';
            
            let wordStart = cursorPos - 1;
            while (wordStart >= 0 && !isDelimiter(text[wordStart])) {
                wordStart--;
            }
            
            return text.substring(wordStart + 1, cursorPos).trim();
        }

        // Проверка на разделитель
        function isDelimiter(char) {
            const delimiters = [' ', '\n', '\t', '(', ')', '{', '}', '[', ']', ';', ',', '.', '=', '+', '-', '*', '/', '%', '<', '>', '!', '&', '|', '^', '~', '?', ':'];
            return delimiters.includes(char);
        }

        // функция перевода
      export  function translateInPlace(event) {
            const input = event.target;
            const cursorPos = input.selectionStart;
            const text = input.value;
            
            // Получаем последнее введенное слово
            const lastWord = getLastWord(text, cursorPos);
            
            if (lastWord && translations[lastWord.toLowerCase()]) {
                const translated = translations[lastWord.toLowerCase()];
                
                // Сохраняем позицию курсора
                const wordStart = cursorPos - lastWord.length;
                
                // Заменяем слово
                input.value = text.substring(0, wordStart) + translated + text.substring(cursorPos);
                
                // Восстанавливаем позицию курсора
                input.selectionStart = input.selectionEnd = wordStart + translated.length;
            }
        }
            
            // Функция подсветки кода
           export function highlightCode() {
  const { languageSelector, userInputEl, codeHighlight } = domElements;
  
// Настройка обработчика событий
  userInputEl.addEventListener('input', translateInPlace);
        userInputEl.addEventListener('keydown', function(e) {
            // Обрабатываем пробел и другие разделители
            if ([' ', ';', '(', '{', '\n'].includes(e.key)) {
                setTimeout(() => translateInPlace(e), 10);
            }
        });

  if (!languageSelector || !userInputEl || !codeHighlight) {
    console.error('Элементы для подсветки не найдены');
    return;
  }

  const language = languageSelector.value;
  const code = userInputEl.value;
  
  codeHighlight.className = 'language-' + language;
  codeHighlight.textContent = code;
  
  if (typeof Prism !== 'undefined') {
    Prism.highlightElement(codeHighlight);
  }
  
  // Синхронизируем размеры
  codeHighlight.style.height = userInputEl.scrollHeight + 'px';
}

export function toggleCodeVisibility() {
  const { codeEl, tryButton, checkButton, userInputEl } = domElements;
  const currentExample = appState.examples[appState.currentExampleIndex];

  if (!appState.codeVisible) {
    // Показываем код
    userInputEl.value = currentExample.code; // Копируем код в textarea
    highlightCode();
    appState.codeVisible = true;
    tryButton.innerText = "Скрыть код";
    checkButton.disabled = true;
  } else {
    // Скрываем код (полный сброс)
    userInputEl.value = ''; // Очищаем textarea
    highlightCode();
    appState.codeVisible = false;
    tryButton.innerText = "Показать код";
    checkButton.disabled = false;
  }
}


export function repeatExample() {
  
  const { resultEl } = domElements;
  loadExample(appState.currentExampleIndex);
  resultEl.innerText = "🔄 Пример перезагружен. Попробуйте еще раз!";
  highlightCode();
}

export function nextExample() {
  const currentExample = appState.examples[appState.currentExampleIndex];
  if (currentExample.next !== null) {
    loadExample(currentExample.next);
  }
  highlightCode();
}

// Обновленный createApp()
export async function createApp() {
  await loadData();
  
  // Инициализация обработчиков после загрузки данных
  const { userInputEl, languageSelector } = domElements;
  
  if (userInputEl && languageSelector) {
    userInputEl.addEventListener('input', highlightCode);
    languageSelector.addEventListener('change', highlightCode);
    
    userInputEl.addEventListener('scroll', function() {
      domElements.codeHighlight.scrollTop = userInputEl.scrollTop;
      domElements.codeHighlight.scrollLeft = userInputEl.scrollLeft;
    });
    
    userInputEl.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        
        this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 4;
        highlightCode();
      }
    });
    
    // Первоначальная подсветка
    highlightCode();
    
  }
}
            

async function displayCodeExplanation(exampleIndex) {
  const { codeExplanationEl } = domElements;
  
  try {
    const response = await fetch(`/api/${appState.currentLanguage}/${appState.currentLanguage}_code-explanations/${exampleIndex + 1}`); 
    if (!response.ok) throw new Error('Объяснение не найдено');
    
    const explanation = await response.json();
    
    // Проверяем, есть ли данные в объяснении
    if (!explanation) throw new Error('Объяснение пустое');
    
    codeExplanationEl.innerHTML = `
      <div class="explanation-section">
        <h3>Структура кода:</h3>
        <p>${explanation.structure || "Нет информации" }</p>
      </div>
      <div class="explanation-section">
        <h3>Алгоритм работы:</h3>
        <p>${explanation.algorithm || "Нет информации"}</p>
      </div>
      <div class="explanation-section">
        <h3>Примечания:</h3>
        <p>${explanation.notes || "Нет примечаний"}</p>
      </div>
    `;
    codeExplanationEl.style.display = 'block';
  } catch (error) {
    console.error('Ошибка загрузки объяснения:', error);
    codeExplanationEl.innerHTML = `
      <div class="explanation-error">
        <p>Объяснение к этому примеру недоступно</p>
        <p>${error.message}</p>
      </div>
    `;
    codeExplanationEl.style.display = 'block';
  }
}