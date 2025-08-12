-- Заполнение тестовыми данными
INSERT INTO CSharp_examples (code, description, next) VALUES
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