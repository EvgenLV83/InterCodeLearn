import { domElements } from './dom-elements.js';
import { parseUserInput } from './code-parser.js';

// Состояние приложения
let appState = {
  examples: [],
  templates: [],
  currentExampleIndex: 0,
  codeVisible: false
};

// Загрузка данных
export async function loadData() {
  const { loadingEl, tryButton, resultEl } = domElements;

  loadingEl.style.display = 'block';
  tryButton.disabled = true;

  try {
    const [examplesResponse, templatesResponse] = await Promise.all([
      fetch('/api/examples'),
      fetch('/api/templates')
    ]);

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
  const { userInputEl, resultEl, comparisonEl, userCodeDisplayEl, correctCodeDisplayEl, nextButton } = domElements;
  const userInput = userInputEl.value.trim().replace(/\s+/g, ' ');
  const N = parseUserInput(userInput);

  let correctTemplate = appState.templates[appState.currentExampleIndex].codeP;
  let correctCode = correctTemplate;

  // Заменяем заполнители только для вычисления правильности
  for (let i = 0; i < N.length; i++) {
    correctCode = correctCode.replace(new RegExp(`\\{${i}\\}`, 'g'), N[i]);
  }

  const normalizedUserInput = userInput.replace(/\s+/g, ' ').trim();
  const normalizedCorrectCode = correctCode.replace(/\s+/g, ' ').trim();

  console.log(normalizedUserInput);
  console.log(normalizedCorrectCode);

  if (normalizedUserInput === normalizedCorrectCode) {
    const result2 = calculateResult(N, appState.currentExampleIndex);
    resultEl.innerText = `✅ Правильно! Результат: ${result2}. Нажмите 'Следующий'.`;
    nextButton.disabled = false;
    comparisonEl.style.display = 'none';
  } else {
    resultEl.innerText = "❌ Неправильно! Смотрите сравнение ниже.";
    comparisonEl.style.display = 'block';
    userCodeDisplayEl.innerText = userInput;

    // Для отображения правильного кода показываем шаблон с заполнителями
    correctCodeDisplayEl.innerText = correctTemplate;
  }
}

// Вспомогательные функции
function calculateResult(N, currentIndex) {
  const example = appState.examples[currentIndex];
  console.log(N);
  console.log(currentIndex);
  console.log(example);

  if (example.next === 1) return N[0];
  if (example.next === 2) return Number(N[2]) + Number(N[4]);
  if (example.next === 3) {
    let n = parseInt(N[1]);
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
  return 0;
}

export function toggleCodeVisibility() {
  const { codeEl, tryButton, checkButton } = domElements;

  if (!appState.codeVisible) {
    codeEl.style.display = 'block';
    appState.codeVisible = true;
    tryButton.innerText = "Скрыть код";
    checkButton.disabled = true;
  } else {
    loadExample(appState.currentExampleIndex);
  }
}

export function repeatExample() {
  const { resultEl } = domElements;
  loadExample(appState.currentExampleIndex);
  resultEl.innerText = "🔄 Пример перезагружен. Попробуйте еще раз!";
}

export function nextExample() {
  const currentExample = appState.examples[appState.currentExampleIndex];
  if (currentExample.next !== null) {
    loadExample(currentExample.next);
  }
}

// Инициализация приложения
export async function createApp() {
  await loadData();
}