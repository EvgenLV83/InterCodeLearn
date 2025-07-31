--Таблица с примерами
CREATE TABLE IF NOT EXISTS examples (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL,
  description TEXT NOT NULL,
  next INTEGER NULL
);

-- Таблица с шаблонами
CREATE TABLE IF NOT EXISTS templates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  example_id INTEGER NOT NULL,
  codeP TEXT NOT NULL,
  FOREIGN KEY (example_id) REFERENCES examples(id)
);

-- Таблица ключевых слов C#
CREATE TABLE IF NOT EXISTS csharp_keywords (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  keyword TEXT NOT NULL,
  description TEXT NOT NULL,
  example TEXT,
  category TEXT
);

-- Заполнение тестовыми данными
INSERT INTO examples (code, description, next) VALUES
('Console.WriteLine("Привет, мир!");', 'Простейший пример программы, выводящей Привет, мир! на консоль.', 1),
('public int Add(int a = 5 , int b = 6) {
     return a + b;
 }', 'Метод, который принимает два целых числа и возвращает их сумму.', 2),
('public void PrintNumbers(int n = 5) {
     for (int i = 1; i <= n; i++) {
         Console.WriteLine(i);
    }
 }', 'Метод, который выводит числа от 1 до n.', 3),
('public void StringManipulationExample() {
      string original = "Программирование на C#";
      string upper = original.ToUpper();
      string lower = original.ToLower();
      Console.WriteLine($"Верхний регистр: {upper}");
      Console.WriteLine($"Нижний регистр: {lower}");
  }', 'Пример манипуляции строками: преобразование в верхний и нижний регистр.', 4),
('string name = "Алексей";
int age = 30;
Console.WriteLine("Имя: " + name + ", Возраст: " + age);
Console.WriteLine($"Имя: {name}, Возраст: {age}");', 'Вывести имя и возраст пользователя, используя конкатенацию и интерполяцию строк.', 5),
('double length = 5.5;
double width = 3.2;
double area = length * width;
Console.WriteLine($"Площадь прямоугольника: {area}");', 'Рассчитать площадь прямоугольника.', 6),
('int number = 7;
if (number % 2 == 0) {
    Console.WriteLine($"Четное число - {number}");
} else {
    Console.WriteLine($"Нечетное число - {number}");
}', 'Проверить, является ли число четным или нечетным.', 7),
('int N = 10;
for (int i = 1; i <= N; i++) {
    if (i % 3 == 0) {
        Console.WriteLine(i);
    }
}', 'Вывести все числа от 1 до N, которые делятся на 3.', 8),
('int Max(int a, int b) {
    return a > b ? a : b;
}
int result = Max(5, 8);
Console.WriteLine($"Максимум: {result}");', 'Функция, которая возвращает максимум из двух чисел.', 9),
('int[] numbers = { 1, 2, 3, 4, 5 };
int sum = 0;
foreach (int num in numbers) {
    sum += num;
}
Console.WriteLine($"Сумма: {sum}");', 'Найти сумму элементов массива.', 10),
('int[,] matrix = {
    { 1, 2, 3 },
    { 4, 5, 6 },
    { 7, 8, 9 }
};
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        Console.Write(matrix[i, j] + " ");
    }
    Console.WriteLine();
}', 'Вывести элементы двумерного массива.', 11),
('int[,,] cube = {
    { { 1, 2 }, { 3, 4 } },
    { { 5, 6 }, { 7, 8 } }
};
int max = cube[0, 0, 0];
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
        for (int k = 0; k < 2; k++) {
            if (cube[i, j, k] > max) {
                max = cube[i, j, k];
            }
        }
    }
}
Console.WriteLine($"Максимальный элемент: {max}");', 'Найти максимальный элемент в трехмерном массиве.', 12);

INSERT INTO templates (example_id, codeP) VALUES
(1, 'Console.WriteLine("{0}");'),
(2, 'public int {2}(int {3} = {0} , int {4} = {1}) {
    return {3} + {4};
}'),
(3, 'public void {2}(int {3} = {0}) { 
    for (int {4} = 1; {4} <= {3}; {4}++) { 
        Console.WriteLine({4}); } }'),
(4, 'public void {5}() {
      string {6} = "{2}";
      string {8} = {6}.ToUpper();
      string {9} = {6}.ToLower();
      Console.WriteLine($"{0} {{8}}");
      Console.WriteLine($"{1} {{9}}"); }'),
(5, 'string {2} = "{4}"; 
int {7} = {6}; 
Console.WriteLine("{0} " + {2} + "{3}" + {7}); 
Console.WriteLine($"{0} {{2}}{3} {{7}}");
'),
(6, 'double {4} = {2}; 
double {6} = {3}; 
double {8} = {4} * {6}; 
Console.WriteLine($"{0} {{8}}");'),
(7, 'int {7} = {4}; 
    if ({7} % 2 == 0) { 
    Console.WriteLine($"{0} {{7}}"); 
    } else { 
    Console.WriteLine($"{1} {{7}}");
    }'),
(8, 'int {4} = {0}; 
for (int {5} = 1; {5} <= {4}; {5}++) { 
    if ({5} % 3 == 0) { 
        Console.WriteLine({5}); } }'),
(9, 'int {4}(int {5}, int {6}) { 
    return {5} > {6} ? {5} : {6}; } 
    int {7} = {4}({2}, {3}); 
    Console.WriteLine($"{0} {{7}}");'),

(10, 'int[] {8} = { {2}, {3}, {4}, {5}, {6} }; 
 int {9} = {7}; 
 foreach (int {10} in {8}) { {9} += {10}; } 
 Console.WriteLine($"{0} {{9}}");'),
(11, 'int[,] {10} = { { {0}, {1}, {2} }, { {3}, {4}, {5} }, { {6}, {7}, {8} } }; 
 for (int {11} = 0; {11} < 3; {11}++) { 
    for (int {12} = 0; {12} < 3; {12}++) { 
        Console.Write({10}[{11}, {12}] + " "); } 
        Console.WriteLine(); }'),
(12, 'int[,,] {11} = { { { {2}, {3} }, { {4}, {5} } }, { { {6}, {7} }, { {8}, {9} } } }; 
int {12} = {11}[0, 0, 0]; 
for (int {14} = 0; {14} < 2; {14}++) { 
    for (int {15} = 0; {15} < 2; {15}++) { 
        for (int {16} = 0; {16} < 2; {16}++) { 
            if ({11}[{14}, {15}, {16}] > {12}) { {12} = {11}[{14}, {15}, {16}]; } } } } 
            Console.WriteLine($"{0} {{12}}");');




CREATE TABLE IF NOT EXISTS code_explanations (
  example_id INTEGER PRIMARY KEY,
  structure TEXT NOT NULL,
  algorithm TEXT NOT NULL,
  notes TEXT,
  FOREIGN KEY (example_id) REFERENCES examples(id)
);

-- Пример 1: Console.WriteLine
INSERT INTO code_explanations (example_id, structure, algorithm, notes) 
VALUES (
  1,
  '1. Console.WriteLine - метод вывода текста в консоль
2. "Привет, мир!" - строковый литерал (текст в кавычках)',
  '- Программа выводит текст между кавычками
- Автоматически добавляет переход на новую строку',
  'Точка с запятой ; завершает инструкцию'
);

-- Пример 2: Метод Add
INSERT INTO code_explanations (example_id, structure, algorithm, notes)
VALUES (
  2,
  '1. public - доступен из других классов
2. int - возвращает целое число
3. Add - имя метода
4. Параметры:
   - int a = 5 - число со значением по умолчанию 5
   - int b = 6 - число со значением по умолчанию 6
5. return a + b - возвращает сумму параметров',
  '- При вызове без аргументов использует значения по умолчанию
- Можно передать свои значения: Add(3, 4) вернет 7',
  'Пример вызова: int result = Add(); // Вернет 11'
);

-- Пример 3: PrintNumbers
INSERT INTO code_explanations (example_id, structure, algorithm, notes)
VALUES (
  3,
  '1. int i = 1 - инициализация счетчика
2. i <= n - условие продолжения цикла
3. i++ - инкремент счетчика',
  '1. Создается счетчик i = 1
2. Проверяется условие i <= n (n по умолчанию 5)
3. Если условие истинно:
   - Выводится значение i
   - Счетчик увеличивается на 1 (i++)
4. Повторяется шаг 2',
  'Цикл выполняется ровно n раз. Выводит числа в возрастающем порядке.
Результат для n=5: 1 2 3 4 5'
);

-- Пример 4: Манипуляция строками
INSERT INTO code_explanations (example_id, structure, algorithm, notes)
VALUES (
  4,
  '1. string original - исходная строка
2. ToUpper() - преобразование в верхний регистр
3. ToLower() - преобразование в нижний регистр
4. Console.WriteLine - вывод с интерполяцией строк',
  '1. Создается строка original с текстом
2. ToUpper() преобразует все символы в ВЕРХНИЙ РЕГИСТР
3. ToLower() преобразует все символы в нижний регистр
4. Вывод с интерполяцией строк ($ перед кавычками)',
  'Исходная строка original не изменяется. Методы возвращают новые строки.
Результат:
Верхний регистр: ПРОГРАММИРОВАНИЕ НА C#
Нижний регистр: программирование на c#'
);

-- Пример 5: Конкатенация vs Интерполяция
INSERT INTO code_explanations (example_id, structure, algorithm, notes)
VALUES (
  5,
  '1. Конкатенация: "Имя: " + name + ", Возраст: " + age
2. Интерполяция: $"Имя: {name}, Возраст: {age}"',
  'Способ 1 (конкатенация):
- Соединение строк оператором +
- Менее читаемо при многих параметрах

Способ 2 (интерполяция):
- Переменные подставляются в { }
- Более чистый и читаемый код',
  'Вывод (одинаковый для обоих способов):
Имя: Алексей, Возраст: 30'
);

-- Продолжаем для остальных примеров (6-12) аналогичным образом...

-- Пример 6: Площадь прямоугольника
INSERT INTO code_explanations (example_id, structure, algorithm, notes)
VALUES (
  6,
  '1. double length - длина
2. double width - ширина
3. double area = length * width - вычисление площади
4. Console.WriteLine - вывод результата',
  'Формула:
Площадь = Длина × Ширина

Ключевые моменты:
- Используется тип double для дробных чисел
- Умножение оператором *',
  'Пример расчета:
5.5 * 3.2 = 17.6
Вывод:
Площадь прямоугольника: 17.6'
);

-- Пример 7: Четность числа
INSERT INTO code_explanations (example_id, structure, algorithm, notes)
VALUES (
  7,
  '1. int number - проверяемое число
2. number % 2 == 0 - проверка четности
3. if-else - выбор ветки выполнения',
  'Логика проверки:
- Четное: number % 2 == 0 (остаток от деления на 2 равен 0)
- Нечетное: иначе',
  'Оператор % возвращает остаток от деления.

');


INSERT INTO code_explanations (example_id, structure, algorithm, notes)
VALUES (
  8,
  '1. int N - верхняя граница диапазона
2. for (int i = 1; i <= N; i++) - цикл перебора чисел
3. if (i % 3 == 0) - проверка кратности 3',
  '1. Перебираем числа от 1 до N (включительно)
2. Проверяем условие i % 3 == 0
3. Если истина - выводим число',
  'Особенности:
- Проверка кратности через остаток от деления
- Вывод только подходящих чисел
Результат для N=10:
3
6
9'
);

INSERT INTO code_explanations (example_id, structure, algorithm, notes)
VALUES (
  9,
  '1. int Max(int a, int b) - объявление метода
2. return a > b ? a : b - тернарный оператор
3. Console.WriteLine - вывод результата',
  '1. Сравнивает a и b
2. Если a > b - возвращает a
3. Иначе - возвращает b',
  'Тернарный оператор: условие ? значение_если_истина : значение_если_ложь
Пример:
Max(5, 8) → 8
Вывод:

');

INSERT INTO code_explanations (example_id, structure, algorithm, notes)
VALUES (
  10,
  '1. int[] numbers - объявление массива
2. foreach (int num in numbers) - цикл перебора
3. sum += num - накопление суммы',
  '1. Создается массив из 5 чисел
2. Инициализируется переменная sum = 0
3. Цикл foreach перебирает все элементы
4. Каждое число добавляется к sum',
  'Особенности:
- foreach автоматически перебирает элементы
- sum += num эквивалентно sum = sum + num

');

INSERT INTO code_explanations (example_id, structure, algorithm, notes)
VALUES (
  11,
  '1. int[,] matrix - объявление матрицы
2. Вложенные циклы for по строкам и столбцам
3. Console.Write + Console.WriteLine - форматированный вывод',
  '1. Внешний цикл по строкам (i)
2. Внутренний цикл по столбцам (j)
3. Вывод элемента matrix[i,j]
4. Перевод строки после каждой строки матрицы',
  'Структура матрицы 3x3:
1 2 3
4 5 6
7 8 9
Формат вывода:

');

INSERT INTO code_explanations (example_id, structure, algorithm, notes)
VALUES (
  12,
  '1. int[,,] cube - трехмерный массив 2x2x2
2. Три вложенных цикла for по измерениям
3. if (cube[i,j,k] > max) - поиск максимума',
  '1. Изначально max = первый элемент
2. Цикл по первому измерению (i)
3. Цикл по второму измерению (j)
4. Цикл по третьему измерению (k)
5. Сравнение и обновление максимума',
  'Логика:
- Сравнивает каждый элемент
- Обходит весь "куб" данных

');


































INSERT INTO csharp_keywords (keyword, description, example, category) VALUES
-- 1. Типы данных
('bool', 'Логический тип данных (true/false)', 'bool isActive = true;', 'Типы данных'),
('byte', '8-битное целое число без знака (0-255)', 'byte b = 255;', 'Типы данных'),
('char', 'Тип данных для одного символа Unicode', 'char c = ''A'';', 'Типы данных'),
('decimal', 'Тип данных для точных десятичных вычислений', 'decimal price = 9.99m;', 'Типы данных'),
('double', '64-битное число с плавающей точкой', 'double pi = 3.14159;', 'Типы данных'),
('dynamic', 'Динамический тип (проверка на этапе выполнения)', 'dynamic obj = GetObject();', 'Типы данных'),
('float', '32-битное число с плавающей точкой', 'float pi = 3.14f;', 'Типы данных'),
('int', '32-битное целое число', 'int number = 42;', 'Типы данных'),
('long', '64-битное целое число', 'long bigNumber = 10000000000L;', 'Типы данных'),
('object', 'Базовый тип для всех типов в .NET', 'object obj = new object();', 'Типы данных'),
('sbyte', '8-битное целое число со знаком (-128-127)', 'sbyte sb = -100;', 'Типы данных'),
('short', '16-битное целое число', 'short s = 100;', 'Типы данных'),
('string', 'Тип данных для хранения текста', 'string name = "John";', 'Типы данных'),
('uint', '32-битное целое число без знака', 'uint ui = 4000000000;', 'Типы данных'),
('ulong', '64-битное целое число без знака', 'ulong ul = 100000000000UL;', 'Типы данных'),
('ushort', '16-битное целое число без знака', 'ushort us = 65000;', 'Типы данных'),
('var', 'Неявно типизированная локальная переменная', 'var number = 10;', 'Типы данных'),
('void', 'Указывает, что метод не возвращает значение', 'public void MyMethod() { }', 'Типы возвращаемых значений'),
-- 2. Модификаторы доступа
('public', 'Элемент доступен из любого кода', 'public class MyClass { }', 'Модификаторы доступа'),
('private', 'Элемент доступен только внутри класса', 'private int count;', 'Модификаторы доступа'),
('protected', 'Элемент доступен внутри класса и производных', 'protected string name;', 'Модификаторы доступа'),
('internal', 'Элемент доступен в пределах сборки', 'internal class Helper { }', 'Модификаторы доступа'),
('protected internal', 'Элемент доступен в пределах сборки и производных классах', 'protected internal void Method() { }', 'Модификаторы доступа'),
('private protected', 'Элемент доступен в классе и наследниках в той же сборке', 'private protected int value;', 'Модификаторы доступа'),
-- 3. Модификаторы классов/членов
('abstract', 'Абстрактный класс или метод (не может быть создан напрямую)', 'abstract class Shape { }', 'Модификаторы'),
('const', 'Константное значение (не может быть изменено)', 'const double PI = 3.14;', 'Модификаторы'),
('extern', 'Внешняя реализация метода', 'extern static void Method();', 'Модификаторы'),
('new', 'Создание экземпляра или скрытие члена базового класса', 'var obj = new MyClass();', 'Модификаторы'),
('override', 'Переопределение виртуального метода базового класса', 'public override void Draw() { }', 'Модификаторы'),
('partial', 'Разделение определения класса на несколько файлов', 'partial class MyClass { }', 'Модификаторы'),
('readonly', 'Поле можно инициализировать только при объявлении или в конструкторе', 'readonly int max = 100;', 'Модификаторы'),
('sealed', 'Запрещает наследование или переопределение', 'sealed class FinalClass { }', 'Модификаторы'),
('static', 'Указывает, что член принадлежит типу, а не экземпляру', 'static void Main() { }', 'Модификаторы'),
('unsafe', 'Разрешает использование небезопасного кода', 'unsafe { int* p = &x; }', 'Модификаторы'),
('virtual', 'Позволяет переопределить метод в производном классе', 'virtual void Draw() { }', 'Модификаторы'),
('volatile', 'Указывает, что поле может изменяться несколькими потоками', 'volatile bool isRunning;', 'Модификаторы'),
-- 4. Операторы управления потоком
('if', 'Условный оператор', 'if (condition) { /* код */ }', 'Операторы управления'),
('else', 'Альтернативная ветка условного оператора', 'else { /* код */ }', 'Операторы управления'),
('switch', 'Оператор выбора', 'switch (value) { case 1: break; }', 'Операторы управления'),
('case', 'Вариант выбора в операторе switch', 'case 1: Console.WriteLine("One"); break;', 'Операторы управления'),
--('default', 'Вариант по умолчанию в операторе switch', 'default: Console.WriteLine("Unknown"); break;', 'Операторы управления'),
('do', 'Цикл с постусловием', 'do { /* код */ } while (condition);', 'Операторы управления'),
('while', 'Цикл с предусловием', 'while (condition) { /* код */ }', 'Операторы управления'),
('for', 'Цикл с заданным количеством итераций', 'for (int i = 0; i < 10; i++) { /* код */ }', 'Операторы управления'),
('foreach', 'Цикл по элементам коллекции', 'foreach (var item in collection) { /* код */ }', 'Операторы управления'),
('in', 'Используется в foreach и LINQ для указания коллекции', 'foreach (var item in collection) { }', 'Операторы управления'),
('break', 'Прерывание выполнения цикла или switch', 'while (true) { break; }', 'Операторы управления'),
('continue', 'Переход к следующей итерации цикла', 'for (int i = 0; i < 10; i++) { if (i % 2 == 0) continue; }', 'Операторы управления'),
('goto', 'Переход к метке (не рекомендуется к использованию)', 'goto label; label: Console.WriteLine("Jumped");', 'Операторы управления'),
('return', 'Возврат из метода', 'return 42;', 'Операторы управления'),
('yield', 'Итераторный блок (генератор последовательности)', 'yield return 1;', 'Операторы управления'),
-- 5. Обработка исключений
('try', 'Блок кода для обработки исключений', 'try { /* код */ } catch { }', 'Обработка исключений'),
('catch', 'Блок обработки исключения', 'catch (Exception ex) { Console.WriteLine(ex.Message); }', 'Обработка исключений'),
('finally', 'Блок кода, выполняемый в любом случае', 'finally { /* код очистки */ }', 'Обработка исключений'),
('throw', 'Генерация исключения', 'throw new Exception("Error");', 'Обработка исключений'),
('when', 'Фильтр исключений (C# 6+)', 'catch (Exception ex) when (ex.Message.Contains("timeout")) { }', 'Обработка исключений'),
-- 6. Пространства имен и импорт
('namespace', 'Определяет область видимости', 'namespace MyApp { class Program { } }', 'Основные конструкции'),
('using', 'Директива для импорта пространств имен или создания псевдонимов', 'using System;', 'Директивы'),
-- 7. ООП
('class', 'Определяет новый тип (класс)', 'class MyClass { }', 'Основные конструкции'),
('struct', 'Определяет структуру (значимый тип)', 'struct Point { public int X, Y; }', 'Основные конструкции'),
('interface', 'Определяет интерфейс (контракт)', 'interface ILogger { void Log(string message); }', 'Основные конструкции'),
('enum', 'Определяет перечисление', 'enum Days { Monday, Tuesday }', 'Основные конструкции'),
('delegate', 'Тип, представляющий ссылку на метод', 'delegate void MyDelegate(string msg);', 'Основные конструкции'),
('event', 'Объявление события', 'event EventHandler Click;', 'Основные конструкции'),
('operator', 'Перегрузка оператора', 'public static Vector operator +(Vector a, Vector b) { }', 'Основные конструкции'),
('this', 'Ссылка на текущий экземпляр класса', 'this.name = name;', 'Ключевые слова'),
('base', 'Доступ к членам базового класса', 'base.Method();', 'Ключевые слова'),
('nameof', 'Получение строкового имени переменной, типа или члена', 'string name = nameof(MyClass);', 'Ключевые слова'),
('sizeof', 'Получение размера типа в байтах', 'int size = sizeof(int);', 'Ключевые слова'),
('typeof', 'Получение объекта Type для типа', 'Type t = typeof(int);', 'Ключевые слова'),
('is', 'Проверка типа объекта', 'if (obj is string) { }', 'Операторы'),
('as', 'Безопасное приведение типа (возвращает null при неудаче)', 'string s = obj as string;', 'Операторы'),
('record', 'Тип, предназначенный для хранения данных (C# 9+)', 'record Person(string Name, int Age);', 'Основные конструкции'),
-- 8. Асинхронное программирование
('async', 'Модификатор асинхронного метода', 'async Task<int> GetDataAsync() { }', 'Асинхронное программирование'),
('await', 'Ожидание завершения асинхронной операции', 'var result = await GetDataAsync();', 'Асинхронное программирование'),
('Task', 'Тип, представляющий асинхронную операцию', 'Task<int> task = GetDataAsync();', 'Асинхронное программирование'),
('ValueTask', 'Оптимизированная версия Task для случаев, когда результат часто доступен синхронно', 'ValueTask<int> GetValueAsync() { }', 'Асинхронное программирование'),
-- 9. Указатели и небезопасный код
('stackalloc', 'Выделение памяти в стеке', 'int* arr = stackalloc int[10];', 'Небезопасный код'),
('fixed', 'Фиксация указателя на объект в памяти', 'fixed (int* p = &arr[0]) { }', 'Небезопасный код'),
-- 10. LINQ
('from', 'Начало LINQ-запроса (определяет источник данных)', 'from x in collection select x;', 'LINQ'),
('where', 'Фильтрация в LINQ-запросе', 'from x in collection where x > 5 select x;', 'LINQ'),
('select', 'Проекция в LINQ-запросе', 'from x in collection select x * 2;', 'LINQ'),
('group', 'Группировка в LINQ-запросе', 'from x in collection group x by x.Category;', 'LINQ'),
('into', 'Продолжение LINQ-запроса', 'from x in collection group x by x.Category into g select g;', 'LINQ'),
('orderby', 'Сортировка в LINQ-запросе', 'from x in collection orderby x.Name select x;', 'LINQ'),
('join', 'Соединение в LINQ-запросе', 'from a in listA join b in listB on a.Id equals b.Id select a;', 'LINQ'),
('let', 'Создание промежуточной переменной в LINQ-запросе', 'from x in collection let y = x * 2 select y;', 'LINQ'),
('on', 'Часть выражения join в LINQ', 'join b in listB on a.Id equals b.Id', 'LINQ'),
('equals', 'Часть выражения join в LINQ', 'join b in listB on a.Id equals b.Id', 'LINQ'),
('by', 'Часть выражения group в LINQ', 'group x by x.Category', 'LINQ'),
('ascending', 'Сортировка по возрастанию в LINQ', 'orderby x.Name ascending', 'LINQ'),
('descending', 'Сортировка по убыванию в LINQ', 'orderby x.Name descending', 'LINQ'),
-- 11. Другие ключевые слова
('checked', 'Контекст проверки переполнения арифметических операций', 'checked { int x = int.MaxValue + 1; }', 'Ключевые слова'),
('unchecked', 'Контекст без проверки переполнения', 'unchecked { int x = int.MaxValue + 1; }', 'Ключевые слова'),
('default', 'Значение по умолчанию для типа', 'int x = default;', 'Ключевые слова'),
('get', 'Аксессор для получения значения свойства', 'public int Value { get; }', 'Свойства'),
('set', 'Аксессор для установки значения свойства', 'public int Value { get; set; }', 'Свойства'),
('add', 'Аксессор для добавления обработчика события', 'event EventHandler Click { add { } remove { } }', 'События'),
('remove', 'Аксессор для удаления обработчика события', 'event EventHandler Click { add { } remove { } }', 'События'),
('global', 'Глобальное пространство имен', 'global::System.Console.WriteLine();', 'Ключевые слова'),
('params', 'Модификатор для переменного числа параметров', 'void Method(params int[] numbers) { }', 'Модификаторы'),
('ref', 'Передача параметра по ссылке', 'void Method(ref int x) { x++; }', 'Модификаторы'),
('out', 'Возврат результата через параметр', 'void Method(out int result) { result = 42; }', 'Модификаторы'),
--('in', 'Передача параметра по ссылке только для чтения', 'void Method(in int x) { /* x нельзя изменить */ }', 'Модификаторы'),
('notnull', 'Ограничение generic-типа (C# 8+)', 'where T : notnull', 'Generic-ограничения'),
('with', 'Копирование record с изменениями (C# 9+)', 'var newPerson = person with { Name = "New" };', 'Ключевые слова'),
('init', 'Инициализатор свойства (C# 9+)', 'public string Name { get; init; }', 'Свойства'),
('required', 'Обязательное свойство (C# 11+)', 'public required string Name { get; set; }', 'Свойства'),
-- 12. Литералы и специальные значения
('true', 'Логическое значение "истина"', 'bool b = true;', 'Литералы'),
('false', 'Логическое значение "ложь"', 'bool b = false;', 'Литералы'),
('null', 'Литерал, представляющий отсутствие ссылки', 'string s = null;', 'Литералы'),
-- 13. Операторы
('=', 'Оператор присваивания', 'int x = 5;', 'Операторы'),
('=>', 'Лямбда-выражение или выражение тела метода', 'Func<int, int> square = x => x * x;', 'Операторы'),
('??', 'Оператор объединения null', 'string s = name ?? "default";', 'Операторы'),
('?.', 'Оператор условного null', 'int? length = str?.Length;', 'Операторы'),
('?[', 'Оператор условного null для индексации (C# 6+)', 'var item = list?[0];', 'Операторы'),
('??=', 'Оператор присваивания объединения null (C# 8+)', 'name ??= "default";', 'Операторы'),
('..', 'Оператор диапазона (C# 8+)', 'var slice = array[1..^1];', 'Операторы'),
('&&', 'Логическое И', 'if (x > 0 && x < 10) { }', 'Операторы'),
('||', 'Логическое ИЛИ', 'if (x < 0 || x > 100) { }', 'Операторы'),
('!', 'Логическое НЕ', 'if (!isValid) { }', 'Операторы'),
('&', 'Побитовое И или адрес переменной', 'int flags = flag1 & flag2;', 'Операторы'),
('|', 'Побитовое ИЛИ', 'int flags = flag1 | flag2;', 'Операторы'),
('^', 'Побитовое исключающее ИЛИ', 'int result = a ^ b;', 'Операторы'),
('~', 'Побитовое НЕ', 'int result = ~flags;', 'Операторы'),
('<<', 'Побитовый сдвиг влево', 'int result = value << 2;', 'Операторы'),
('>>', 'Побитовый сдвиг вправо', 'int result = value >> 2;', 'Операторы'),
('==', 'Оператор сравнения на равенство', 'if (x == y) { }', 'Операторы'),
('!=', 'Оператор сравнения на неравенство', 'if (x != y) { }', 'Операторы'),
('>', 'Оператор "больше"', 'if (x > y) { }', 'Операторы'),
('<', 'Оператор "меньше"', 'if (x < y) { }', 'Операторы'),
('>=', 'Оператор "больше или равно"', 'if (x >= y) { }', 'Операторы'),
('<=', 'Оператор "меньше или равно"', 'if (x <= y) { }', 'Операторы'),
('+', 'Сложение или унарный плюс', 'int sum = a + b;', 'Операторы'),
('-', 'Вычитание или унарный минус', 'int diff = a - b;', 'Операторы'),
('*', 'Умножение или указатель', 'int product = a * b;', 'Операторы'),
('/', 'Деление', 'int quotient = a / b;', 'Операторы'),
('%', 'Остаток от деления', 'int remainder = a % b;', 'Операторы'),
('++', 'Инкремент', 'x++;', 'Операторы'),
('--', 'Декремент', 'x--;', 'Операторы'),
('+=', 'Присваивание со сложением', 'x += 5;', 'Операторы'),
('-=', 'Присваивание с вычитанием', 'x -= 5;', 'Операторы'),
('*=', 'Присваивание с умножением', 'x *= 2;', 'Операторы'),
('/=', 'Присваивание с делением', 'x /= 2;', 'Операторы'),
('%=', 'Присваивание с остатком', 'x %= 3;', 'Операторы'),
('&=', 'Присваивание с побитовым И', 'flags &= mask;', 'Операторы'),
('|=', 'Присваивание с побитовым ИЛИ', 'flags |= mask;', 'Операторы'),
('^=', 'Присваивание с побитовым исключающим ИЛИ', 'flags ^= mask;', 'Операторы'),
('<<=', 'Присваивание с побитовым сдвигом влево', 'value <<= 2;', 'Операторы'),
('>>=', 'Присваивание с побитовым сдвигом вправо', 'value >>= 2;', 'Операторы'),
('&&=', 'Присваивание с логическим И (C# 9+)', 'flag &&= condition;', 'Операторы'),
('||=', 'Присваивание с логическим ИЛИ (C# 9+)', 'flag ||= condition;', 'Операторы'),
-- 14. Шаблоны (pattern matching)
('and', 'Логическое И в шаблонах (C# 9+)', 'if (o is int and > 0) { }', 'Pattern matching'),
('or', 'Логическое ИЛИ в шаблонах (C# 9+)', 'if (o is string or null) { }', 'Pattern matching'),
('not', 'Логическое НЕ в шаблонах (C# 9+)', 'if (o is not null) { }', 'Pattern matching'),
--('is', 'Проверка типа с pattern matching', 'if (o is int i) { Console.WriteLine(i); }', 'Pattern matching'),
-- 15. Генераторы кода
--('partial', 'Разделение определения класса на несколько файлов', 'partial class MyClass { }', 'Модификаторы'),
('field', 'Автоматически реализуемое поле (в record)', 'record Person(string Name); // содержит поле Name', 'Record'),
('property', 'Автоматически реализуемое свойство', 'public string Name { get; set; }', 'Свойства'),
-- 16. Коллекции и массивы
('Array', 'Базовый класс для всех массивов', 'Array arr = Array.CreateInstance(typeof(int), 10);', 'Коллекции'),
('List', 'Универсальный список', 'List<string> names = new List<string>();', 'Коллекции'),
('Dictionary', 'Универсальный словарь', 'Dictionary<int, string> dict = new Dictionary<int, string>();', 'Коллекции'),
('HashSet', 'Универсальное множество', 'HashSet<int> set = new HashSet<int>();', 'Коллекции'),
('Queue', 'Очередь (FIFO)', 'Queue<string> queue = new Queue<string>();', 'Коллекции'),
('Stack', 'Стек (LIFO)', 'Stack<string> stack = new Stack<string>();', 'Коллекции'),
('Span', 'Тип для работы с участками памяти (C# 7.2+)', 'Span<int> span = stackalloc int[10];', 'Коллекции'),
('Memory', 'Аналог Span для использования в async-методах', 'Memory<int> memory = new int[10];', 'Коллекции'),
('IEnumerable', 'Интерфейс для перечисления элементов', 'IEnumerable<int> numbers = Enumerable.Range(1, 10);', 'Коллекции'),
('ICollection', 'Интерфейс для коллекций', 'ICollection<string> collection = new List<string>();', 'Коллекции'),
('IList', 'Интерфейс для списков', 'IList<string> list = new List<string>();', 'Коллекции'),
('IDictionary', 'Интерфейс для словарей', 'IDictionary<int, string> dict = new Dictionary<int, string>();', 'Коллекции'),
('int[]', 'Массив целых чисел', 'int[] numbers = new int[5];', 'Коллекции'),
-- 17. Атрибуты
('Attribute', 'Базовый класс для всех атрибутов', '[Serializable] class MyClass { }', 'Атрибуты'),
('Obsolete', 'Атрибут для пометки устаревшего кода', '[Obsolete("Use NewMethod instead")] void OldMethod() { }', 'Атрибуты'),
('Serializable', 'Атрибут для пометки сериализуемых классов', '[Serializable] class MyData { }', 'Атрибуты'),
('DllImport', 'Атрибут для импорта функций из DLL', '[DllImport("user32.dll")] static extern void MessageBeep(uint uType);', 'Атрибуты');


