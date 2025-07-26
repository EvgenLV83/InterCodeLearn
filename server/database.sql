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
('public int Add(int a = 5, int b = 5) {
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
  }', 'Пример манипуляции строками: преобразование в верхний и нижний регистр.', 4);

INSERT INTO templates (example_id, codeP) VALUES
(1, 'Console.WriteLine("{0}");'),
(2, 'public int {0}(int {1} = {2}, int {3} = {4}) {
    return {1} + {3};
}'),
(3, 'public void {0}(int {1} = {2}) {
    for (int {3} = 1; {3} <= {1}; {3}++) {
        Console.WriteLine({3});
    }
}'),
(4, 'public void {3}() {
      string {4} = "{2}";
      string {6} = {4}.ToUpper();
      string {8} = {4}.ToLower();
      Console.WriteLine($"{0} {{6}}");
      Console.WriteLine($"{1} {{8}}");
}');

-- Обновление ссылки next для последнего примера
-- UPDATE examples
-- SET next = 3
-- WHERE id = 3;

-- Заполняем таблицу ключевых слов данными
-- INSERT INTO csharp_keywords (keyword, description, example, category) VALUES
-- ('public', 'Модификатор доступа - элемент доступен из любого кода', 'public class MyClass { }', 'Модификаторы доступа'),
-- ('void', 'Указывает, что метод не возвращает значение', 'public void MyMethod() { }', 'Типы возвращаемых значений'),
-- ('int', 'Целочисленный тип данных (32-битное целое число)', 'int number = 10;', 'Типы данных'),
-- ('return', 'Возвращает значение из метода', 'return 42;', 'Операторы'),
-- ('string', 'Тип данных для хранения текста', 'string name = "John";', 'Типы данных'),
-- ('bool', 'Логический тип данных (true/false)', 'bool isActive = true;', 'Типы данных'),
-- ('=', 'Оператор присваивания', 'int x = 5;', 'Операторы'),
-- ('class', 'Определяет новый тип (класс)', 'class MyClass { }', 'Основные конструкции'),
-- ('if', 'Условный оператор', 'if (condition) { }', 'Операторы управления'),
-- ('else', 'Альтернативная ветка условного оператора', 'else { }', 'Операторы управления');



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

