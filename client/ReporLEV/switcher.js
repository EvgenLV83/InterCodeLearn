// Конфигурация переключения страниц и действий
const config = {
    pages: [
        { id: 'page1', duration: 3000,
             actions: [
                { type: 'click', selector: '#actionBtn', delay: 1000 }
            ]
         }, // Показывать 3 секунды
        { 
            id: 'page2', 
            duration: 15000, // Увеличено время для всех действий
            actions: [
                { 
                    type: 'input_animated', 
                    selector: '#userInput', 
                    value: 'Привет, мир!',
                    speed: 150
                },
                {
                    type: 'click', 
                    selector: '#repeatButton', 
                    delay: 3000 // Нажать через 8 секунд
                },
                {
                    type: 'input_animated',
                    selector: '#userInput',
                    value: 'Новый текст',
                    speed: 100,
                    delay: 4000 // Начать ввод через 4 секунды
                },
                { 
                    type: 'click', 
                    selector: '#repeatButton', 
                    delay: 8000 // Нажать через 8 секунд
                }
            ]
        },
        { 
            id: 'page3', 
            duration: 4000,
            actions: [
                { type: 'click', selector: '#actionBtn', delay: 1000 }
            ]
        },


    ],
    loop: true
};

let currentPageIndex = 0;
let pageTimeout;

function switchToPage(index) {
    // Очищаем предыдущий таймер
    clearTimeout(pageTimeout);
    
    // Проверяем валидность индекса
    if (index < 0 || index >= config.pages.length) {
        console.error('Неверный индекс страницы:', index);
        return;
    }

    // Скрыть все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Показать текущую страницу
    const pageId = config.pages[index].id;
    const page = document.getElementById(pageId);
    
    if (!page) {
        console.error('Страница не найдена:', pageId);
        return;
    }
    
    page.classList.add('active');
    
    // Выполнить действия для этой страницы, если они есть
    executePageActions(config.pages[index]);
    
    // Установить таймер для переключения на следующую страницу
    pageTimeout = setTimeout(() => {
        nextPage();
    }, config.pages[index].duration);
}

function executePageActions(pageConfig) {
    if (!pageConfig.actions) return;
    
    pageConfig.actions.forEach(action => {
        setTimeout(() => {
            const element = document.querySelector(action.selector);
            if (!element) {
                console.error('Элемент не найден:', action.selector);
                return;
            }
            
            switch (action.type) {
                case 'click':
                    element.click();
                    console.log(`Нажата кнопка: ${action.selector}`);
                    break;
                case 'input':
                    element.value = action.value;
                    console.log(`Введен текст: ${action.value} в ${action.selector}`);
                    const event = new Event('input', { bubbles: true });
                    element.dispatchEvent(event);
                    break;
                case 'input_animated':
                    animateTextInput(element, action.value, action.speed || 100);
                    break;
                case 'clear_input':
                    element.value = '';
                    console.log(`Очищено поле: ${action.selector}`);
                    const clearEvent = new Event('input', { bubbles: true });
                    element.dispatchEvent(clearEvent);
                    break;
                default:
                    console.warn('Неизвестный тип действия:', action.type);
            }
        }, action.delay || 0);
    });
}


// Функция для анимированного ввода текста
function animateTextInput(element, text, speed) {
    let i = 0;
    element.value = ''; // Очищаем поле
    
    const interval = setInterval(() => {
        if (i < text.length) {
            element.value += text.charAt(i);
            // Триггерим событие изменения
            const event = new Event('input', { bubbles: true });
            element.dispatchEvent(event);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

function nextPage() {
    currentPageIndex++;
    if (currentPageIndex >= config.pages.length) {
        if (config.loop) {
            currentPageIndex = 0;
        } else {
            console.log('Переключение страниц завершено');
            return;
        }
    }
    switchToPage(currentPageIndex);
}

// Функции для ручного управления
window.startSwitcher = function() {
    if (window.location.pathname.endsWith('index2.html') || 
        window.location.pathname === '/') {
        switchToPage(0);
    }
};

window.pauseSwitcher = function() {
    clearTimeout(pageTimeout);
};

window.resumeSwitcher = function() {
    nextPage();
};

window.setPage = function(index) {
    if (index >= 0 && index < config.pages.length) {
        currentPageIndex = index - 1;
        switchToPage(index);
    } else {
        console.error('Неверный индекс страницы:', index);
    }
};

// Автоматический старт при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    if (config.pages.length > 0 && document.getElementById(config.pages[0].id)) {
        startSwitcher();
    } else {
        console.warn('Страницы для переключения не найдены');
    }
});