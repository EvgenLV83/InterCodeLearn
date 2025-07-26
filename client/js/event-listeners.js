import { domElements } from './dom-elements.js';
import { loadExample, checkCode, repeatExample, nextExample, toggleCodeVisibility } from './app-core.js';
import { setupKeywordExplanation } from './code-parser.js';

// Настройка обработчиков событий
export function setupEventListeners() {
  const { tryButton, checkButton, repeatButton, nextButton } = domElements;

  // Обработчик для объяснения ключевых слов
  setupKeywordExplanation();

  tryButton.addEventListener('click', toggleCodeVisibility);
  checkButton.addEventListener('click', checkCode);
  repeatButton.addEventListener('click', repeatExample);
  nextButton.addEventListener('click', nextExample);
}