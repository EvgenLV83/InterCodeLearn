-- Заполнение тестовыми данными (C++ версии)

INSERT INTO CPP_examples (code, description, next) VALUES
('std::cout << "Привет, мир!" << std::endl;', 'Простейший пример программы, выводящей Привет, мир! на консоль.', 1),
('int Add(int a = 5, int b = 6) {
    return a + b;
}', 'Функция, которая принимает два целых числа и возвращает их сумму.', 2),
('void PrintNumbers(int n = 5) {
    for (int i = 1; i <= n; i++) {
        std::cout << i << std::endl;
    }
}', 'Функция, которая выводит числа от 1 до n.', 3),
('void StringManipulationExample() {
    std::string original = "Программирование на C++";
    std::string upper = original;
    std::transform(upper.begin(), upper.end(), upper.begin(), ::toupper);
    std::string lower = original;
    std::transform(lower.begin(), lower.end(), lower.begin(), ::tolower);
    std::cout << "Верхний регистр: " << upper << std::endl;
    std::cout << "Нижний регистр: " << lower << std::endl;
}', 'Пример манипуляции строками: преобразование в верхний и нижний регистр.', 4),
('std::string name = "Алексей";
int age = 30;
std::cout << "Имя: " + name + ", Возраст: " + std::to_string(age) << std::endl;
std::cout << "Имя: " << name << ", Возраст: " << age << std::endl;', 'Вывести имя и возраст пользователя, используя конкатенацию и потоковый вывод.', 5),
('double length = 5.5;
double width = 3.2;
double area = length * width;
std::cout << "Площадь прямоугольника: " << area << std::endl;', 'Рассчитать площадь прямоугольника.', 6),
('int number = 7;
if (number % 2 == 0) {
    std::cout << "Четное число - " << number << std::endl;
} else {
    std::cout << "Нечетное число - " << number << std::endl;
}', 'Проверить, является ли число четным или нечетным.', 7),
('int N = 10;
for (int i = 1; i <= N; i++) {
    if (i % 3 == 0) {
        std::cout << i << std::endl;
    }
}', 'Вывести все числа от 1 до N, которые делятся на 3.', 8),
('int Max(int a, int b) {
    return (a > b) ? a : b;
}
int result = Max(5, 8);
std::cout << "Максимум: " << result << std::endl;', 'Функция, которая возвращает максимум из двух чисел.', 9),
('int numbers[] = {1, 2, 3, 4, 5};
int sum = 0;
for (int num : numbers) {
    sum += num;
}
std::cout << "Сумма: " << sum << std::endl;', 'Найти сумму элементов массива.', 10),
('int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        std::cout << matrix[i][j] << " ";
    }
    std::cout << std::endl;
}', 'Вывести элементы двумерного массива.', 11),
('int cube[2][2][2] = {
    {{1, 2}, {3, 4}},
    {{5, 6}, {7, 8}}
};
int max = cube[0][0][0];
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
        for (int k = 0; k < 2; k++) {
            if (cube[i][j][k] > max) {
                max = cube[i][j][k];
            }
        }
    }
}
std::cout << "Максимальный элемент: " << max << std::endl;', 'Найти максимальный элемент в трехмерном массиве.', 12);
