// const examples = [
//     {
//         code: `public void HelloWorld() {
//     Console.WriteLine("Привет, мир!");
// }`,
//         description: "Простейший пример программы, выводящей Привет, мир! на консоль.",
//         next: 1
//     },
//     {
//         code: `public int Add(int a, int b) {
//     return a + b;
// }`,
//         description: "Метод, который принимает два целых числа и возвращает их сумму.",
//         next: 2
//     },
//     {
//         code: `public void PrintNumbers(int n) {
//     for (int i = 1; i <= n; i++) {
//         Console.WriteLine(i);
//     }
// }`,
//         description: "Метод, который выводит числа от 1 до n.",
//         next: 3
//     },
//     {
//         code: `public bool IsEven(int number) {
//     return number % 2 == 0;
// }`,
//         description: "Метод, который проверяет, является ли число четным.",
//         next: 4
//     },
//     {
//         code: `public void BubbleSort(int[] arr) {
//     int n = arr.Length;
//     for (int i = 0; i < n - 1; i++) {
//         for (int j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 int temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
// }`,
//         description: "Метод, который реализует алгоритм сортировки пузырьком.",
//         next: 5
//     },
//     {
//         code: `public int Factorial(int n) {
//     if (n <= 1) return 1;
//     return n * Factorial(n - 1);
// }`,
//         description: "Метод, который вычисляет факториал числа с использованием рекурсии.",
//         next: 6
//     },
//     {
//         code: `public void ArrayExample() {
//     int[] numbers = { 1, 2, 3, 4, 5 };
//     foreach (int num in numbers) {
//         Console.WriteLine(num);
//     }
// }`,
//         description: "Пример работы с массивом и циклом foreach для его перебора.",
//         next: 7
//     },
//     {
//         code: `public class Person {
//     public string Name { get; set; }
//     public int Age { get; set; }
    
//     public void Introduce() {
//         Console.WriteLine($"Меня зовут {Name}, мне {Age} лет.");
//     }
// }`,
//         description: "Определение класса Person с свойствами и методом для представления.",
//         next: 8
//     },
//     {
//         code: `public void ExceptionHandlingExample() {
//     try {
//         int result = 10 / 0; // Деление на ноль
//     } catch (DivideByZeroException ex) {
//         Console.WriteLine("Ошибка: " + ex.Message);
//     } finally {
//         Console.WriteLine("Этот блок выполнится в любом случае.");
//     }
// }`,
//         description: "Пример обработки исключений с использованием try-catch-finally.",
//         next: 9
//     },
//     {
//         code: `public void ListExample() {
//     List<string> fruits = new List<string> { "Яблоко", "Банан", "Груша" };
//     fruits.Add("Апельсин");
//     foreach (var fruit in fruits) {
//         Console.WriteLine(fruit);
//     }
// }`,
//         description: "Пример работы с коллекцией List и добавления элементов в нее.",
//         next: 10
//     },
//     {
//         code: `public void LINQExample() {
//     int[] numbers = { 1, 2, 3, 4, 5 };
//     var evenNumbers = from n in numbers
//                       where n % 2 == 0
//                       select n;
//     foreach (var num in evenNumbers) {
//         Console.WriteLine(num);
//     }
// }`,
//         description: "Пример использования LINQ для фильтрации четных чисел из массива.",
//         next: 11
//     },
//     {
//         code: `public void DictionaryExample() {
//     Dictionary<string, int> ages = new Dictionary<string, int>();
//     ages["Alice"] = 30;
//     ages["Bob"] = 25;
    
//     foreach (var kvp in ages) {
//         Console.WriteLine($"{kvp.Key} - {kvp.Value} лет");
//     }
// }`,
//         description: "Пример работы со словарем (Dictionary) для хранения пар ключ-значение.",
//         next: 12
//     },
//     {
//         code: `public void AsyncExample() {
//     Task.Run(async () => {
//         await Task.Delay(1000);
//         Console.WriteLine("Асинхронная операция завершена.");
//     }).Wait();
// }`,
//         description: "Пример асинхронного программирования с использованием Task и async/await.",
//         next: 13
//     },
//     {
//         code: `public void StringManipulationExample() {
//     string original = "Программирование на C#";
//     string upper = original.ToUpper();
//     string lower = original.ToLower();
//     Console.WriteLine($"Верхний регистр: {upper}");
//     Console.WriteLine($"Нижний регистр: {lower}");
// }`,
//         description: "Пример манипуляции строками: преобразование в верхний и нижний регистр.",
//         next: 14
//     },
//     {
//         code: `public void InheritanceExample() {
//     class Animal {
//         public virtual void Speak() {
//             Console.WriteLine("Животное издает звук");
//         }
//     }
    
//     class Dog : Animal {
//         public override void Speak() {
//             Console.WriteLine("Гав!");
//         }
//     }
    
//     Dog dog = new Dog();
//     dog.Speak(); 
// }`,
//         description: "Пример наследования и переопределения метода в C#.",
//         next: 15
//     },
//     {
//         code: `public void InterfaceExample() {
//     interface IAnimal {
//         void Speak();
//     }
    
//     class Cat : IAnimal {
//         public void Speak() {
//             Console.WriteLine("Мяу!");
//         }
//     }
    
//     IAnimal myCat = new Cat();
//     myCat.Speak();
// }`,
//         description: "Пример использования интерфейсов в C#.",
//         next: 16
//     },
//     {
//         code: `public void NullableTypesExample() {
//     int? nullableInt = null;
//     if (nullableInt.HasValue) {
//         Console.WriteLine($"Значение: {nullableInt.Value}");
//     } else {
//         Console.WriteLine("Значение равно null");
//     }
// }`,
//         description: "Пример использования нулевых типов (nullable types) в C#.",
//         next: 17
//     },
//     {
//         code: `public void EnumExample() {
//     enum DayOfWeek { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday }
//     DayOfWeek today = DayOfWeek.Monday;
//     Console.WriteLine($"Сегодня: {today}");
// }`,
//         description: "Пример использования перечислений (enum) в C#.",
//         next: 18
//     },
//     {
//         code: `public void ExceptionHandlingWithCustomException() {
//     class CustomException : Exception {
//         public CustomException(string message) : base(message) {}
//     }

//     try {
//         throw new CustomException("Это пользовательское исключение.");
//     } catch (CustomException ex) {
//         Console.WriteLine("Поймано исключение: " + ex.Message);
//     }
// }`,
//         description: "Пример обработки пользовательского исключения в C#.",
//         next: 19
//     },
//     {
//         code: `public void StaticMembersExample() {
//     class MathUtilities {
//         public static int Square(int number) {
//             return number * number;
//         }
//     }
    
//     Console.WriteLine(MathUtilities.Square(5));
// }`,
//         description: "Пример использования статических членов класса для выполнения операции.",
//         next: 20
//     },
//     {
//         code: `public void TupleExample() {
//     var person = (Name: "Иван", Age: 30);
//     Console.WriteLine($"Имя: {person.Name}, Возраст: {person.Age}");
// }`,
//         description: "Пример использования кортежей для хранения нескольких значений.",
//         next: 21
//     },
//     {
//         code: `public void StringInterpolationExample() {
//     string name = "Алексей";
//     int age = 25;
//     string message = $"Меня зовут {name}, мне {age} лет.";
//     Console.WriteLine(message);
// }`,
//         description: "Пример интерполяции строк для создания форматированных строк.",
//         next: 22
//     },
//     {
//         code: `public void ExtensionMethodExample() {
//     public static class StringExtensions {
//         public static string ToTitleCase(this string str) {
//             return System.Globalization.CultureInfo.CurrentCulture.TextInfo.ToTitleCase(str.ToLower());
//         }
//     }
    
//     string title = "программирование на c#".ToTitleCase();
//     Console.WriteLine(title); // Вывод: Программирование На C#
// }`,
//         description: "Пример использования методов расширения для добавления функциональности к существующим типам.",
//         next: 23
//     },
//     {
//         code: `public void EventExample() {
//     public class Button {
//         public event Action Clicked;

//         public void Click() {
//             Clicked?.Invoke();
//         }
//     }

//     Button button = new Button();
//     button.Clicked += () => Console.WriteLine("Кнопка нажата!");
//     button.Click(); // Вывод: Кнопка нажата!
// }`,
//         description: "Пример использования событий для обработки действий в C#.",
//         next: null
//     },







































































    window.examplesP = null;

function fill(N) {

    console.log(N);
    window.examplesP = [
        {
            codeP: `public class ${N[0]} {
            public static void Main(string[] args) {
                Console.WriteLine("Hello, World!");
            }
        }`,
            description: "Простейший пример программы, выводящей 'Hello, World!' на консоль.",
            next: 1
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите первое число: ");
                int ${N[2]} = Convert.ToInt32(Console.ReadLine());
                Console.Write("Введите второе число: ");
                int ${N[3]} = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Сумма: " + (${N[2]} + ${N[3]}));
            }
        }`,
            description: "Программа, которая принимает два числа и выводит их сумму.",
            next: 2
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите число: ");
                int ${N[2]} = Convert.ToInt32(Console.ReadLine());
                if (${N[2]} % 2 == 0) {
                    Console.WriteLine(${N[2]} + " - четное число.");
                } else {
                    Console.WriteLine(${N[2]} + " - нечетное число.");
                }
            }
        }`,
            description: "Программа, которая проверяет, является ли число четным или нечетным.",
            next: 3
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите число: ");
                int ${N[2]} = Convert.ToInt32(Console.ReadLine());
                int ${N[3]} = 1;
                for (int ${N[4]} = 1; ${N[4]} <= ${N[2]}; ${N[4]}++) {
                    ${N[3]} *= ${N[4]};
                }
                Console.WriteLine("Факториал " + ${N[2]} + " = " + ${N[3]});
            }
        }`,
            description: "Программа, которая вычисляет факториал числа.",
            next: 4
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите число для таблицы умножения: ");
                int ${N[2]} = Convert.ToInt32(Console.ReadLine());
                for (int ${N[3]} = 1; ${N[3]} <= 10; ${N[3]}++) {
                    Console.WriteLine(${N[2]} + " x " + ${N[3]} + " = " + (${N[2]} * ${N[3]}));
                }
            }
        }`,
            description: "Программа, которая выводит таблицу умножения для числа, введенного пользователем.",
            next: 5
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите строку: ");
                string ${N[2]} = Console.ReadLine();
                char[] ${N[3]} = ${N[2]}.ToCharArray();
                Array.Reverse(${N[3]});
                string reversedString = new string(${N[3]});
                if (${N[2]} == reversedString) {
                    Console.WriteLine(${N[2]} + " - палиндром.");
                } else {
                    Console.WriteLine(${N[2]} + " - не палиндром.");
                }
            }
        }`,
            description: "Программа, которая проверяет, является ли строка палиндромом.",
            next: 6
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите первое число: ");
                int ${N[2]} = Convert.ToInt32(Console.ReadLine());
                Console.Write("Введите второе число: ");
                int ${N[3]} = Convert.ToInt32(Console.ReadLine());
                while (${N[3]} != 0) {
                    int ${N[4]} = ${N[3]};
                    ${N[3]} = ${N[2]} % ${N[3]};
                    ${N[2]} = ${N[4]};
                }
                Console.WriteLine("Наибольший общий делитель: " + ${N[2]});
            }
        }`,
            description: "Программа, которая находит наибольший общий делитель двух чисел.",
            next: 8
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите число: ");
                int ${N[2]} = Convert.ToInt32(Console.ReadLine());
                bool ${N[3]} = true;
                if (${N[2]} <= 1) ${N[3]} = false;
                for (int ${N[4]} = 2; ${N[4]} <= Math.Sqrt(${N[2]}); ${N[4]}++) {
                    if (${N[2]} % ${N[4]} == 0) {
                        ${N[3]} = false;
                        break;
                    }
                }
                if (${N[3]}) {
                    Console.WriteLine(${N[2]} + " - простое число.");
                } else {
                    Console.WriteLine(${N[2]} + " - не простое число.");
                }
            }
        }`,
            description: "Программа, которая проверяет, является ли число простым.",
            next: 9
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите число: ");
                int ${N[2]} = Convert.ToInt32(Console.ReadLine());
                int ${N[3]} = 0;
                while (${N[2]} != 0) {
                    ${N[3]} += ${N[2]} % 10;
                    ${N[2]} /= 10;
                }
                Console.WriteLine("Сумма цифр: " + ${N[3]});
            }
        }`,
            description: "Программа, которая вычисляет сумму цифр числа.",
            next: 10
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите строку: ");
                string ${N[2]} = Console.ReadLine();
                char[] ${N[3]} = ${N[2]}.ToCharArray();
                Array.Reverse(${N[3]});
                Console.WriteLine("Перевернутая строка: " + new string(${N[3]}));
            }
        }`,
            description: "Программа, которая переворачивает строку.",
            next: 11
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите размер массива: ");
                int ${N[2]} = Convert.ToInt32(Console.ReadLine());
                int[] ${N[3]} = new int[${N[2]}];
                Console.WriteLine("Введите элементы массива:");
                for (int ${N[4]} = 0; ${N[4]} < ${N[2]}; ${N[4]}++) {
                    ${N[3]}[${N[4]}] = Convert.ToInt32(Console.ReadLine());
                }
                int ${N[5]} = ${N[3]}[0];
                int ${N[6]} = ${N[3]}[0];
                for (int ${N[4]} = 1; ${N[4]} < ${N[2]}; ${N[4]}++) {
                    if (${N[3]}[${N[4]}] < ${N[5]}) {
                        ${N[5]} = ${N[3]}[${N[4]}];
                    }
                    if (${N[3]}[${N[4]}] > ${N[6]}) {
                        ${N[6]} = ${N[3]}[${N[4]}];
                    }
                }
                Console.WriteLine("Минимальный элемент: " + ${N[5]});
                Console.WriteLine("Максимальный элемент: " + ${N[6]});
            }
        }`,
            description: "Программа, которая находит минимальный и максимальный элементы в массиве.",
            next: 12
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                int[] ${N[1]} = {64, 34, 25, 12, 22, 11, 90};
                int ${N[2]} = ${N[1]}.Length;
                for (int ${N[3]} = 0; ${N[3]} < ${N[2]} - 1; ${N[3]}++) {
                    for (int ${N[4]} = 0; ${N[4]} < ${N[2]} - ${N[3]} - 1; ${N[4]}++) {
                        if (${N[1]}[${N[4]}] > ${N[1]}[${N[4]} + 1]) {
                            int ${N[5]} = ${N[1]}[${N[4]}];
                            ${N[1]}[${N[4]}] = ${N[1]}[${N[4]} + 1];
                            ${N[1]}[${N[4]} + 1] = ${N[5]};
                        }
                    }
                }
                Console.WriteLine("Отсортированный массив: ");
                foreach (int ${N[6]} in ${N[1]}) {
                    Console.Write(${N[6]} + " ");
                }
            }
        }`,
            description: "Программа, которая сортирует массив чисел (пузырьковая сортировка).",
            next: 13
        },
        {
            codeP: `using System;

            public class ${N[0]} {
                public static void Main(string[] args) {
                    int[] ${N[1]} = {2, 3, 4, 10, 40};
                    int ${N[2]} = 10;
                    int ${N[3]} = BinarySearch(${N[1]}, ${N[2]});
                    if (${N[3]} == -1) {
                        Console.WriteLine("Элемент не найден.");
                    } else {
                        Console.WriteLine("Элемент найден на индексе: " + ${N[3]});
                    }
                }

                public static int BinarySearch(int[] ${N[4]}, int ${N[5]}) {
                    int ${N[6]} = 0;
                    int ${N[7]} = ${N[4]}.Length - 1;
                    while (${N[6]} <= ${N[7]}) {
                        int ${N[8]} = ${N[6]} + (${N[7]} - ${N[6]}) / 2;
                        if (${N[4]}[${N[8]}] == ${N[5]}) {
                            return ${N[8]};
                        }
                        if (${N[4]}[${N[8]}] < ${N[5]}) {
                            ${N[6]} = ${N[8]} + 1;
                        } else {
                            ${N[7]} = ${N[8]} - 1;
                        }
                    }
                    return -1;
                }
            }`,
            description: "Программа, которая реализует бинарный поиск в отсортированном массиве.",
            next: 14
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите количество чисел Фибоначчи: ");
                int ${N[2]} = Convert.ToInt32(Console.ReadLine());
                int ${N[3]} = 0, ${N[4]} = 1;
                Console.Write("Числа Фибоначчи: " + ${N[3]} + " " + ${N[4]});
                for (int ${N[5]} = 2; ${N[5]} < ${N[2]}; ${N[5]}++) {
                    int ${N[6]} = ${N[3]} + ${N[4]};
                    Console.Write(" " + ${N[6]});
                    ${N[3]} = ${N[4]};
                    ${N[4]} = ${N[6]};
                }
            }
        }`,
            description: "Программа, которая выводит первые `n` чисел Фибоначчи.",
            next: 15
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите первое слово: ");
                string ${N[2]} = Console.ReadLine();
                Console.Write("Введите второе слово: ");
                string ${N[3]} = Console.ReadLine();
                char[] ${N[4]} = ${N[2]}.ToCharArray();
                char[] ${N[5]} = ${N[3]}.ToCharArray();
                Array.Sort(${N[4]});
                Array.Sort(${N[5]});
                bool ${N[6]} = ${N[4]}.SequenceEqual(${N[5]});
                if (${N[6]}) {
                    Console.WriteLine("Слова являются анаграммами.");
                } else {
                    Console.WriteLine("Слова не являются анаграммами.");
                }
            }
        }`,
            description: "Программа, которая проверяет, являются ли две строки анаграммами.",
            next: 16
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите строку: ");
                string ${N[2]} = Console.ReadLine();
                int ${N[3]} = 0, ${N[4]} = 0;
                foreach (char ${N[5]} in ${N[2]}) {
                    if (char.IsLetter(${N[5]})) {
                        if ("AEIOUaeiou".IndexOf(${N[5]}) != -1) {
                            ${N[3]}++;
                        } else {
                            ${N[4]}++;
                        }
                    }
                }
                Console.WriteLine("Количество гласных: " + ${N[3]});
                Console.WriteLine("Количество согласных: " + ${N[4]});
            }
        }`,
            description: "Программа, которая подсчитывает количество гласных и согласных в строке.",
            next: 17
        },
        {
            codeP: `using System;
            using System.Collections.Generic;

            public class ${N[0]} {
                public static void Main(string[] args) {
                    Console.Write("Введите количество элементов: ");
                    int ${N[2]} = Convert.ToInt32(Console.ReadLine());
                    int[] ${N[3]} = new int[${N[2]}];
                    Console.WriteLine("Введите элементы:");
                    for (int ${N[4]} = 0; ${N[4]} < ${N[2]}; ${N[4]}++) {
                        ${N[3]}[${N[4]}] = Convert.ToInt32(Console.ReadLine());
                    }
                    HashSet<int> ${N[5]} = new HashSet<int>(${N[3]});
                    Console.WriteLine("Массив без дубликатов: " + string.Join(", ", ${N[5]}));
                }
            }`,
            description: "Программа, которая удаляет дубликаты из массива",
            next: 18
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите количество элементов: ");
                int ${N[2]} = Convert.ToInt32(Console.ReadLine());
                int[] ${N[3]} = new int[${N[2]}];
                Console.WriteLine("Введите элементы:");
                for (int ${N[4]} = 0; ${N[4]} < ${N[2]}; ${N[4]}++) {
                    ${N[3]}[${N[4]}] = Convert.ToInt32(Console.ReadLine());
                }
                int ${N[5]} = int.MinValue;
                int ${N[6]} = int.MinValue;
                foreach (int ${N[7]} in ${N[3]}) {
                    if (${N[7]} > ${N[5]}) {
                        ${N[6]} = ${N[5]};
                        ${N[5]} = ${N[7]};
                    } else if (${N[7]} > ${N[6]} && ${N[7]} < ${N[5]}) {
                        ${N[6]} = ${N[7]};
                    }
                }
                Console.WriteLine("Второй по величине элемент: " + ${N[6]});
            }
        }`,
            description: "Программа, которая находит второй по величине элемент в массиве.",
            next: 19
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите число: ");
                int ${N[2]} = Convert.ToInt32(Console.ReadLine());
                bool ${N[3]} = true;
                if (${N[2]} <= 1) ${N[3]} = false;
                for (int ${N[4]} = 2; ${N[4]} <= Math.Sqrt(${N[2]}); ${N[4]}++) {
                    if (${N[2]} % ${N[4]} == 0) {
                        ${N[3]} = false;
                        break;
                    }
                }
                Console.WriteLine(${N[2]} + " - " + (${N[3]} ? "простое" : "не простое") + " число.");
            }
        }`,
            description: "Оптимизированная программа для проверки простого числа.",
            next: 20
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                Console.Write("Введите текст: ");
                string ${N[2]} = Console.ReadLine();
                Console.Write("Введите сдвиг: ");
                int ${N[3]} = Convert.ToInt32(Console.ReadLine());
                string result = "";
                foreach (char ${N[5]} in ${N[2]}) {
                    if (char.IsLetter(${N[5]})) {
                        char ${N[6]} = char.IsLower(${N[5]}) ? 'a' : 'A';
                        result += (char)(((${N[5]} + ${N[3]} - ${N[6]}) % 26) + ${N[6]});
                    } else {
                        result += ${N[5]};
                    }
                }
                Console.WriteLine("Шифрованный текст: " + result);
            }
        }`,
            description: "Программа, которая шифрует текст с помощью шифра Цезаря.",
            next: 21
        },
        {
            codeP: `using System;
            using System.Collections.Generic;

            public class ${N[0]} {
                public static void Main(string[] args) {
                    Stack<int> ${N[1]} = new Stack<int>();
                    ${N[1]}.Push(1);
                    ${N[1]}.Push(2);
                    ${N[1]}.Push(3);
                    Console.WriteLine("Элемент на вершине: " + ${N[1]}.Peek());
                    Console.WriteLine("Удален элемент: " + ${N[1]}.Pop());
                    Console.WriteLine("Новая вершина: " + ${N[1]}.Peek());
                }
            }`,
            description: "Программа, реализующая структуру данных 'стек' с методами push, pop и peek.",
            next: 22
        },
        {
            codeP: `using System;
            using System.Collections.Generic;

            public class ${N[0]} {
                public static void Main(string[] args) {
                    Queue<int> ${N[1]} = new Queue<int>();
                    ${N[1]}.Enqueue(1);
                    ${N[1]}.Enqueue(2);
                    ${N[1]}.Enqueue(3);
                    Console.WriteLine("Первый элемент: " + ${N[1]}.Peek());
                    Console.WriteLine("Удален элемент: " + ${N[1]}.Dequeue());
                    Console.WriteLine("Новый первый элемент: " + ${N[1]}.Peek());
                }
            }`,
            description: "Программа, реализующая структуру данных 'очередь' с методами enqueue, dequeue и peek.",
            next: 23
        },
        {
            codeP: `using System;

            class ${N[0]} {
                int ${N[1]};
                ${N[0]} ${N[2]};
                ${N[0]}(int ${N[3]}) {
                    ${N[1]} = ${N[3]};
                    ${N[2]} = null;
                }
            }

            public class ${N[4]} {
                ${N[0]} ${N[5]};

                public void Add(int ${N[1]}) {
                    ${N[0]} ${N[6]} = new ${N[0]}(${N[1]});
                    if (${N[5]} == null) {
                        ${N[5]} = ${N[6]};
                        return;
                    }
                    ${N[0]} ${N[7]} = ${N[5]};
                    while (${N[7]}.${N[2]} != null) {
                        ${N[7]} = ${N[7]}.${N[2]};
                    }
                    ${N[7]}.${N[2]} = ${N[6]};
                }

                public void Print() {
                    ${N[0]} ${N[7]} = ${N[5]};
                    while (${N[7]} != null) {
                        Console.Write(${N[7]}.${N[1]} + " ");
                        ${N[7]} = ${N[7]}.${N[2]};
                    }
                    Console.WriteLine();
                }

                public static void Main(string[] args) {
                    ${N[4]} ${N[8]} = new ${N[4]}();
                    ${N[8]}.Add(1);
                    ${N[8]}.Add(2);
                    ${N[8]}.Add(3);
                    ${N[8]}.Print();
                }
            }`,
            description: "Программа, реализующая односвязный список с методами add и print.",
            next: 24
        },
        {
            codeP: `using System;
            using System.Collections.Generic;

            public class ${N[0]} {
                private readonly Dictionary<int, List<int>> ${N[1]} = new Dictionary<int, List<int>>();

                public void AddEdge(int ${N[2]}, int ${N[3]}) {
                    if (!${N[1]}.ContainsKey(${N[2]})) {
                        ${N[1]}[${N[2]}] = new List<int>();
                    }
                    if (!${N[1]}.ContainsKey(${N[3]})) {
                        ${N[1]}[${N[3]}] = new List<int>();
                    }
                    ${N[1]}[${N[2]}].Add(${N[3]});
                    ${N[1]}[${N[3]}].Add(${N[2]});
                }

                public void Dfs(int ${N[5]}) {
                    HashSet<int> ${N[6]} = new HashSet<int>();
                    DfsHelper(${N[5]}, ${N[6]});
                }

                private void DfsHelper(int ${N[7]}, HashSet<int> ${N[6]}) {
                    ${N[6]}.Add(${N[7]});
                    Console.Write(${N[7]} + " ");
                    foreach (int ${N[8]} in ${N[1]}[${N[7]}]) {
                        if (!${N[6]}.Contains(${N[8]})) {
                            DfsHelper(${N[8]}, ${N[6]});
                        }
                    }
                }

                public static void Main(string[] args) {
                    ${N[0]} ${N[9]} = new ${N[0]}();
                    ${N[9]}.AddEdge(1, 2);
                    ${N[9]}.AddEdge(1, 3);
                    ${N[9]}.AddEdge(2, 4);
                    ${N[9]}.AddEdge(3, 5);
                    ${N[9]}.Dfs(1);
                }
            }`,
            description: "Программа, реализующая алгоритм поиска в глубину для обхода графа.",
            next: 25
        },
        {
            codeP: `using System;
            using System.Collections.Generic;

            public class ${N[0]} {
                private readonly Dictionary<int, List<int>> ${N[1]} = new Dictionary<int, List<int>>();

                public void AddEdge(int ${N[2]}, int ${N[3]}) {
                    if (!${N[1]}.ContainsKey(${N[2]})) {
                        ${N[1]}[${N[2]}] = new List<int>();
                    }
                    if (!${N[1]}.ContainsKey(${N[3]})) {
                        ${N[1]}[${N[3]}] = new List<int>();
                    }
                    ${N[1]}[${N[2]}].Add(${N[3]});
                    ${N[1]}[${N[3]}].Add(${N[2]});
                }

                public void Bfs(int ${N[5]}) {
                    HashSet<int> ${N[6]} = new HashSet<int>();
                    Queue<int> ${N[7]} = new Queue<int>();
                    ${N[6]}.Add(${N[5]});
                    ${N[7]}.Enqueue(${N[5]});
                    while (${N[7]}.Count > 0) {
                        int ${N[8]} = ${N[7]}.Dequeue();
                        Console.Write(${N[8]} + " ");
                        foreach (int ${N[9]} in ${N[1]}[${N[8]}]) {
                            if (!${N[6]}.Contains(${N[9]})) {
                                ${N[6]}.Add(${N[9]});
                                ${N[7]}.Enqueue(${N[9]});
                            }
                        }
                    }
                }

                public static void Main(string[] args) {
                    ${N[0]} ${N[10]} = new ${N[0]}();
                    ${N[10]}.AddEdge(1, 2);
                    ${N[10]}.AddEdge(1, 3);
                    ${N[10]}.AddEdge(2, 4);
                    ${N[10]}.AddEdge(3, 5);
                    ${N[10]}.Bfs(1);
                }
            }`,
            description: "Программа, реализующая алгоритм поиска в ширину для обхода графа.",
            next: 26
        },
        {
            codeP: `using System;
            using System.Collections.Generic;

            public class ${N[0]} {
                private readonly Dictionary<int, List<Edge>> ${N[2]} = new Dictionary<int, List<Edge>>();

                class Edge {
                    public int Target { get; }
                    public int Weight { get; }
                    public Edge(int target, int weight) {
                        Target = target;
                        Weight = weight;
                    }
                }

                public void AddEdge(int ${N[7]}, int ${N[8]}, int ${N[9]}) {
                    if (!${N[2]}.ContainsKey(${N[7]})) {
                        ${N[2]}[${N[7]}] = new List<Edge>();
                    }
                    ${N[2]}[${N[7]}].Add(new Edge(${N[8]}, ${N[9]}));
                }

                public void FindShortestPaths(int ${N[11]}) {
                    var priorityQueue = new SortedSet<(int Distance, int Vertex)>();
                    var distances = new Dictionary<int, int>();

                    foreach (var key in ${N[2]}.Keys) {
                        distances[key] = int.MaxValue;
                    }
                    distances[${N[11]}] = 0;
                    priorityQueue.Add((0, ${N[11]}));

                    while (priorityQueue.Count > 0) {
                        var (currentDistance, currentVertex) = priorityQueue.Min;
                        priorityQueue.Remove(priorityQueue.Min);

                        foreach (var edge in ${N[2]}[currentVertex]) {
                            int newDistance = currentDistance + edge.Weight;
                            if (newDistance < distances[edge.Target]) {
                                distances[edge.Target] = newDistance;
                                priorityQueue.Add((newDistance, edge.Target));
                            }
                        }
                    }
                    Console.WriteLine("Кратчайшие пути: ");
                    foreach (var kvp in distances) {
                        Console.WriteLine($"{kvp.Key}: {kvp.Value}");
                    }
                }

                public static void Main(string[] args) {
                    ${N[0]} ${N[19]} = new ${N[0]}();
                    ${N[19]}.AddEdge(1, 2, 1);
                    ${N[19]}.AddEdge(1, 3, 4);
                    ${N[19]}.AddEdge(2, 3, 2);
                    ${N[19]}.AddEdge(3, 4, 1);
                    ${N[19]}.FindShortestPaths(1);
                }
            }`,
            description: "Программа, реализующая алгоритм Дейкстры для поиска кратчайшего пути в графе.",
            next: 27
        },
        {
            codeP: `using System;

            public class ${N[0]} {
                public static void Main(string[] args) {
                    int[] ${N[1]} = {12, 11, 13, 5, 6, 7};
                    Console.WriteLine("Исходный массив: " + string.Join(", ", ${N[1]}));
                    MergeSort(${N[1]});
                    Console.WriteLine("Отсортированный массив: " + string.Join(", ", ${N[1]}));
                }

                public static void MergeSort(int[] ${N[3]}) {
                    if (${N[3]}.Length < 2) return;
                    int mid = ${N[3]}.Length / 2;
                    int[] left = new int[mid];
                    int[] right = new int[${N[3]}.Length - mid];
                    Array.Copy(${N[3]}, 0, left, 0, mid);
                    Array.Copy(${N[3]}, mid, right, 0, ${N[3]}.Length - mid);
                    MergeSort(left);
                    MergeSort(right);
                    Merge(${N[3]}, left, right);
                }

                public static void Merge(int[] ${N[3]}, int[] left, int[] right) {
                    int i = 0, j = 0, k = 0;
                    while (i < left.Length && j < right.Length) {
                        if (left[i] <= right[j]) {
                            ${N[3]}[k++] = left[i++];
                        } else {
                            ${N[3]}[k++] = right[j++];
                        }
                    }
                    while (i < left.Length) {
                        ${N[3]}[k++] = left[i++];
                    }
                    while (j < right.Length) {
                        ${N[3]}[k++] = right[j++];
                    }
                }
            }`,
            description: "Программа, реализующая алгоритм сортировки слиянием.",
            next: 28
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                int[] ${N[1]} = {12, 11, 13, 5, 6, 7};
                Console.WriteLine("Исходный массив: " + string.Join(", ", ${N[1]}));
                QuickSort(${N[1]}, 0, ${N[1]}.Length - 1);
                Console.WriteLine("Отсортированный массив: " + string.Join(", ", ${N[1]}));
            }

            public static void QuickSort(int[] ${N[3]}, int ${N[4]}, int ${N[5]}) {
                if (${N[4]} < ${N[5]}) {
                    int pivotIndex = Partition(${N[3]}, ${N[4]}, ${N[5]});
                    QuickSort(${N[3]}, ${N[4]}, pivotIndex - 1);
                    QuickSort(${N[3]}, pivotIndex + 1, ${N[5]});
                }
            }

            public static int Partition(int[] ${N[3]}, int ${N[4]}, int ${N[5]}) {
                int pivot = ${N[3]}[${N[5]}];
                int i = (${N[4]} - 1);
                for (int j = ${N[4]}; j < ${N[5]}; j++) {
                    if (${N[3]}[j] < pivot) {
                        i++;
                        int temp = ${N[3]}[i];
                        ${N[3]}[i] = ${N[3]}[j];
                        ${N[3]}[j] = temp;
                    }
                }
                int temp1 = ${N[3]}[i + 1];
                ${N[3]}[i + 1] = ${N[3]}[${N[5]}];
                ${N[3]}[${N[5]}] = temp1;
                return i + 1;
            }
        }`,
            description: "Программа, реализующая алгоритм быстрой сортировки.",
            next: 29
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                int ${N[1]} = 3;
                TowerOfHanoi(${N[1]}, 'A', 'C', 'B');
            }

            public static void TowerOfHanoi(int ${N[3]}, char ${N[4]}, char ${N[5]}, char ${N[6]}) {
                if (${N[3]} == 1) {
                    Console.WriteLine("Переместить диск 1 с " + ${N[4]} + " на " + ${N[5]});
                    return;
                }
                TowerOfHanoi(${N[3]} - 1, ${N[4]}, ${N[6]}, ${N[5]});
                Console.WriteLine("Переместить диск " + ${N[3]} + " с " + ${N[4]} + " на " + ${N[5]});
                TowerOfHanoi(${N[3]} - 1, ${N[6]}, ${N[5]}, ${N[4]});
            }
        }`,
            description: "Программа, решающая задачу 'Ханойские башни' с использованием рекурсии.",
            next: 30
        },
        {
            codeP: `using System;

        public class ${N[0]} {
            public static void Main(string[] args) {
                string ${N[1]} = "ABABDABACDABABCABAB";
                string ${N[2]} = "ABAB";
                KMP(${N[2]}, ${N[1]});
            }
            public static void KMP(string ${N[4]}, string ${N[5]}) {
                int[] ${N[6]} = new int[${N[4]}.Length];
                ComputeLPS(${N[4]}, ${N[6]});
                int ${N[8]} = 0, ${N[9]} = 0;
                while (${N[8]} < ${N[5]}.Length) {
                    if (${N[4]}[${N[9]}]} == ${N[5]}[${N[8]}]}) {
                        ${N[9]}++;
                        ${N[8]}++;
                    }
                    if (${N[9]} == ${N[4]}.Length) {
                        Console.WriteLine("Найдено на позиции: " + (${N[8]} - ${N[9]}));
                        ${N[9]} = ${N[6]}[${N[9]} - 1];
                    } else if (${N[8]} < ${N[5]}.Length && ${N[4]}[${N[9]}]} != ${N[5]}[${N[8]}]}) {
                        if (${N[9]} != 0) {
                            ${N[9]} = ${N[6]}[${N[9]} - 1];
                        } else {
                            ${N[8]}++;
                        }
                    }
                }
            }
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
            public static void ComputeLPS(string ${N[4]}, int[] ${N[6]}) {
                int ${N[10]} = 0;
                for (int ${N[11]} = 1; ${N[11]} < ${N[4]}.Length;} {
                    if (${N[4]}[${N[11]}] == ${N[4]}[${N[10]}]}) {
                        ${N[10]}++;
                        ${N[6]}[${N[11]}] = ${N[10]};
                        ${N[11]}++;
                    } else {
                        if (${N[10]} != 0) {
                            ${N[10]} = ${N[6]}[${N[10]} - 1];
                        } else {
                            ${N[6]}[${N[11]}] = 0;
                            ${N[11]}++;
                        }
                    }
                }
            }
        }`,
            description: "Программа, реализующая алгоритм КМП для поиска подстрок.",
            next: 31
        },
        {
            codeP: `using System;
            using System.IO;

            public class ${N[0]} {
                public static void Main(string[] args) {
                    string ${N[1]} = "Пример текста";
                    using (StreamWriter ${N[2]} = new StreamWriter("output.txt")) {
                        ${N[2]}.WriteLine(${N[1]});
                    }
                    using (StreamReader ${N[4]} = new StreamReader("output.txt")) {
                        string ${N[5]};
                        while ((${N[5]} = ${N[4]}.ReadLine()) != null) {
                            Console.WriteLine(${N[5]});
                        }
                    }
                }
            }`,
            description: "Программа для записи и чтения текста из файла.",
            next: 32
        },
        {
            codeP: `using System;
            using System.IO;

            public class ${N[0]} {
                public static void Main(string[] args) {
                    using (StreamReader ${N[1]} = new StreamReader("input.txt")) {
                        int ${N[2]} = 0;
                        string ${N[3]};
                        while ((${N[3]} = ${N[1]}.ReadLine()) != null) {
                            ${N[2]} += ${N[3]}.Split(new[] {' '}, StringSplitOptions.RemoveEmptyEntries).Length;
                        }
                        Console.WriteLine("Слов: " + ${N[2]});
                    }
                }
            }`,
            description: "Программа для подсчета количества слов в файле.",
            next: 33
        },
        {
            codeP: `using System;
            using System.IO;

            public class ${N[0]} {
                public static void Main(string[] args) {
                    string longestWord = "";
                    using (StreamReader ${N[2]} = new StreamReader("input.txt")) {
                        string ${N[3]};
                        while ((${N[3]} = ${N[2]}.ReadLine()) != null) {
                            foreach (string ${N[4]} in ${N[3]}.Split(new[] {' '}, StringSplitOptions.RemoveEmptyEntries)) {
                                if (${N[4]}.Length > longestWord.Length) {
                                    longestWord = ${N[4]};
                                }
                            }
                        }
                        Console.WriteLine("Самое длинное слово: " + longestWord);
                    }
                }
            }`,
            description: "Программа для поиска самого длинного слова в файле.",
            next: 34
        },
        {
            codeP: `using System;
            using System.Net;
            using System.IO;

            public class ${N[0]} {
                public static void Main(string[] args) {
                    var url = "https://example.com";
                    var request = (HttpWebRequest)WebRequest.Create(url);
                    request.Method = "GET";

                    using (var response = (HttpWebResponse)request.GetResponse()) {
                        using (var reader = new StreamReader(response.GetResponseStream())) {
                            string line;
                            while ((line = reader.ReadLine()) != null) {
                                Console.WriteLine(line);
                            }
                        }
                    }
                }
            }`,
            description: "Программа для выполнения HTTP GET-запроса.",
            next: 35
        },
        {
            codeP: `using System;
            using Newtonsoft.Json;

            public class ${N[0]} {
                public static void Main(string[] args) {
                    string jsonString = "{\\"name\\":\\"Alice\\",\\"age\\":30}";
                    var jsonObject = JsonConvert.DeserializeObject<dynamic>(jsonString);
                    Console.WriteLine("Имя: " + jsonObject.name);
                    Console.WriteLine("Возраст: " + jsonObject.age);
                }
            }`,
            description: "Программа для парсинга JSON-строки.",
            next: 36
        },
        {
            codeP: `using System;
            using System.Collections.Generic;

            public class ${N[0]} {
                public static void Main(string[] args) {
                    var hashMap = new Dictionary<string, int>();
                    hashMap["Alice"] = 25;
                    hashMap["Bob"] = 30;
                    Console.WriteLine("Alice: " + hashMap["Alice"]);
                    hashMap.Remove("Bob");
                    Console.WriteLine("Содержимое таблицы: " + string.Join(", ", hashMap));
                }
            }`,
            description: "Программа, реализующая хэш-таблицу с методами put, get и remove.",
            next: 37
        },
        {
            codeP: `using System;

            class ${N[0]} {
                int ${N[1]};
                ${N[0]} ${N[2]}, ${N[3]};

                ${N[0]}(int ${N[4]}) {
                    ${N[1]} = ${N[4]};
                    ${N[2]} = ${N[3]} = null;
                }
            }

            public class ${N[5]} {
                ${N[0]} ${N[6]};

                public void Add(int ${N[4]}) {
                    ${N[6]} = ${N[7]}(${N[6]}, ${N[4]});
                }

                private ${N[0]} ${N[7]}(${N[0]} ${N[8]}, int ${N[4]}) {
                    if (${N[8]} == null) {
                        ${N[8]} = new ${N[0]}(${N[4]});
                        return ${N[8]};
                    }
                    if (${N[4]} < ${N[8]}.${N[1]}) {
                        ${N[8]}.${N[2]} = ${N[7]}(${N[8]}.${N[2]}, ${N[4]});
                    } else if (${N[4]} > ${N[8]}.${N[1]}) {
                        ${N[8]}.${N[3]} = ${N[7]}(${N[8]}.${N[3]}, ${N[4]});
                    }
                    return ${N[8]};
                }

                public void Print() {
                    ${N[9]}(${N[6]});
                }

                private void ${N[9]}(${N[0]} ${N[8]}) {
                    if (${N[8]} != null) {
                        ${N[9]}(${N[8]}.${N[2]});
                        Console.Write(${N[8]}.${N[1]} + " ");
                        ${N[9]}(${N[8]}.${N[3]});
                    }
                }

                public static void Main(string[] args) {
                    ${N[5]} ${N[10]} = new ${N[5]}();
                    ${N[10]}.Add(50);
                    ${N[10]}.Add(30);
                    ${N[10]}.Add(20);
                    ${N[10]}.Add(40);
                    ${N[10]}.Add(70);
                    ${N[10]}.Add(60);
                    ${N[10]}.Add(80);
                    ${N[10]}.Print();
                }
            }`,
            description: "Программа, реализующая бинарное дерево с методами вставки и обхода.",
            next: 38
        },
        {
            codeP: `using System;

            class ${N[0]} {
                int ${N[1]};
                ${N[0]} ${N[2]}, ${N[3]};

                ${N[0]}(int ${N[4]}) {
                    ${N[1]} = ${N[4]};
                    ${N[2]} = ${N[3]} = null;
                }
            }

            public class ${N[5]} {
                ${N[0]} ${N[6]};

                public void Add(int ${N[4]}) {
                    ${N[6]} = ${N[7]}(${N[6]}, ${N[4]});
                }

                private ${N[0]} ${N[7]}(${N[0]} ${N[8]}, int ${N[4]}) {
                    if (${N[8]} == null) {
                        ${N[8]} = new ${N[0]}(${N[4]});
                        return ${N[8]};
                    }
                    if (${N[4]} < ${N[8]}.${N[1]}) {
                        ${N[8]}.${N[2]} = ${N[7]}(${N[8]}.${N[2]}, ${N[4]});
                    } else if (${N[4]} > ${N[8]}.${N[1]}) {
                        ${N[8]}.${N[3]} = ${N[7]}(${N[8]}.${N[3]}, ${N[4]});
                    }
                    return ${N[8]};
                }

                public void Print() {
                    Console.WriteLine("In-order обход:");
                    ${N[9]}(${N[6]});
                    Console.WriteLine("\\nPre-order обход:");
                    ${N[10]}(${N[6]});
                    Console.WriteLine("\\nPost-order обход:");
                    ${N[11]}(${N[6]});
                }

                private void ${N[9]}(${N[0]} ${N[8]}) {
                    if (${N[8]} != null) {
                        ${N[9]}(${N[8]}.${N[2]});
                        Console.Write(${N[8]}.${N[1]} + " ");
                        ${N[9]}(${N[8]}.${N[3]});
                    }
                }

                private void ${N[10]}(${N[0]} ${N[8]}) {
                    if (${N[8]} != null) {
                        Console.Write(${N[8]}.${N[1]} + " ");
                        ${N[10]}(${N[8]}.${N[2]});
                        ${N[10]}(${N[8]}.${N[3]});
                    }
                }

                private void ${N[11]}(${N[0]} ${N[8]}) {
                    if (${N[8]} != null) {
                        ${N[11]}(${N[8]}.${N[2]});
                        ${N[11]}(${N[8]}.${N[3]});
                        Console.Write(${N[8]}.${N[1]} + " ");
                    }
                }

                public static void Main(string[] args) {
                    ${N[5]} ${N[12]} = new ${N[5]}();
                    ${N[12]}.Add(50);
                    ${N[12]}.Add(30);
                    ${N[12]}.Add(20);
                    ${N[12]}.Add(40);
                    ${N[12]}.Add(70);
                    ${N[12]}.Add(60);
                    ${N[12]}.Add(80);
                    ${N[12]}.Print();
                }
            }`,
            description: "Программа, реализующая три способа обхода бинарного дерева.",
            next: 39
        },
        {
            codeP: `using System;

            public class ${N[0]} {
                final static int ${N[1]} = 99999;

                void ${N[2]}(int[][] ${N[3]}) {
                    int ${N[4]} = ${N[3]}.Length;
                    int[][] ${N[5]} = new int[${N[4]}][];
                    for (int ${N[6]} = 0; ${N[6]} < ${N[4]}; ${N[6]}++) {
                        ${N[5]}[${N[6]}] = new int[${N[4]}];
                        for (int ${N[7]} = 0; ${N[7]} < ${N[4]}; ${N[7]}++) {
                            ${N[5]}[${N[6]}][${N[7]}] = ${N[3]}[${N[6]}][${N[7]}];
                        }
                    }
                    for (int ${N[8]} = 0; ${N[8]} < ${N[4]}; ${N[8]}++) {
                        for (int ${N[6]} = 0; ${N[6]} < ${N[4]}; ${N[6]}++) {
                            for (int ${N[7]} = 0; ${N[7]} < ${N[4]}; ${N[7]}++) {
                                if (${N[5]}[${N[6]}][${N[8]}] + ${N[5]}[${N[8]}][${N[7]}] < ${N[5]}[${N[6]}][${N[7]}]) {
                                    ${N[5]}[${N[6]}][${N[7]}] = ${N[5]}[${N[6]}][${N[8]}] + ${N[5]}[${N[8]}][${N[7]}];
                                }
                            }
                        }
                    }
                    PrintShortestPaths(${N[5]});
                }

                void PrintShortestPaths(int[][] ${N[5]}) {
                    Console.WriteLine("Кратчайшие пути:");
                    for (int ${N[6]} = 0; ${N[6]} < ${N[5]}.Length; ${N[6]}++) {
                        for (int ${N[7]} = 0; ${N[7]} < ${N[5]}[${N[6]}].Length; ${N[7]}++) {
                            if (${N[5]}[${N[6]}][${N[7]}] == ${N[1]}) {
                                Console.Write("INF ");
                            } else {
                                Console.Write(${N[5]}[${N[6]}][${N[7]}] + " ");
                            }
                        }
                        Console.WriteLine();
                    }
                }

                public static void Main(string[] args) {
                    int[][] ${N[10]} = {
                        new int[] {0, 5, ${N[1]}, 10},
                        new int[] {${N[1]}, 0, 3, ${N[1]}},
                        new int[] {${N[1]}, ${N[1]}, 0, 1},
                        new int[] {${N[1]}, ${N[1]}, ${N[1]}, 0}
                    };
                    ${N[0]} ${N[11]} = new ${N[0]}();
                    ${N[11]}.${N[2]}(${N[10]});
                }
            }`,
            description: "Программа, реализующая алгоритм Флойда-Уоршелла для поиска кратчайших путей.",
            next: 40
        },
        {
            codeP: `using System;
            using System.Collections.Generic;

            class ${N[0]} : IComparable<${N[0]}>{
                public int ${N[1]}, ${N[2]}, ${N[3]};

                public ${N[0]}(int ${N[4]}, int ${N[5]}, int ${N[6]}) {
                    ${N[1]} = ${N[4]};
                    ${N[2]} = ${N[5]};
                    ${N[3]} = ${N[6]};
                }

                public int CompareTo(${N[0]} ${N[7]}) {
                    return this.${N[3]} - ${N[7]}.${N[3]};
                }
            }

            public class ${N[8]} {
                int[] ${N[9]}, ${N[10]};

                public void Kruskal(List<${N[0]}> ${N[12]}, int ${N[13]}) {
                    ${N[12]}.Sort();
                    ${N[9]} = new int[${N[13]}];
                    ${N[10]} = new int[${N[13]}];
                    for (int ${N[14]} = 0; ${N[14]} < ${N[13]}; ${N[14]}++) {
                        ${N[9]}[${N[14]}] = ${N[14]};
                        ${N[10]}[${N[14]}] = 0;
                    }
                    List<${N[0]}> ${N[15]} = new List<${N[0]}>();
                    foreach (${N[0]} ${N[16]} in ${N[12]}) {
                        int ${N[17]} = Find(${N[16]}.${N[1]});
                        int ${N[18]} = Find(${N[16]}.${N[2]});
                        if (${N[17]} != ${N[18]}) {
                            ${N[15]}.Add(${N[16]});
                            Union(${N[17]}, ${N[18]});
                        }
                    }
                    PrintResult(${N[15]});
                }

                private int Find(int ${N[22]}) {
                    if (${N[9]}[${N[22]}] != ${N[22]}) {
                        ${N[9]}[${N[22]}] = Find(${N[9]}[${N[22]}]);
                    }
                    return ${N[9]}[${N[22]}];
                }

                private void Union(int ${N[23]}, int ${N[24]}) {
                    int ${N[25]} = Find(${N[23]});
                    int ${N[26]} = Find(${N[24]});
                    if (${N[10]}[${N[25]}] > ${N[10]}[${N[26]}]) {
                        ${N[9]}[${N[26]}] = ${N[25]};
                    } else if (${N[10]}[${N[25]}] < ${N[10]}[${N[26]}]) {
                        ${N[9]}[${N[25]}] = ${N[26]};
                    } else {
                        ${N[9]}[${N[26]}] = ${N[25]};
                        ${N[10]}[${N[25]}]++;
                    }
                }

                private void PrintResult(List<${N[0]}> ${N[15]}) {
                    Console.WriteLine("Ребра минимального остовного дерева:");
                    foreach (${N[0]} ${N[16]} in ${N[15]}) {
                        Console.WriteLine(${N[16]}.${N[1]} + " - " + ${N[16]}.${N[2]} + ": " + ${N[16]}.${N[3]});
                    }
                }

                public static void Main(string[] args) {
                    List<${N[0]}> ${N[27]} = new List<${N[0]}>();
                    ${N[27]}.Add(new ${N[0]}(0, 1, 10));
                    ${N[27]}.Add(new ${N[0]}(0, 2, 6));
                    ${N[27]}.Add(new ${N[0]}(0, 3, 5));
                    ${N[27]}.Add(new ${N[0]}(1, 3, 15));
                    ${N[27]}.Add(new ${N[0]}(2, 3, 4));

                    ${N[8]} ${N[28]} = new ${N[8]}();
                    ${N[28]}.Kruskal(${N[27]}, 4);
                }
            }`,
            description: "Программа, реализующая алгоритм Краскала для поиска минимального остовного дерева.",
            next: 41
        },
        {
            codeP: `using System;

            class ${N[0]} : Thread {
                public override void Run() {
                    Console.WriteLine("Поток " + Thread.CurrentThread.Name + " запущен.");
                }

                public static void Main(string[] args) {
                    for (int ${N[1]} = 0; ${N[1]} < 5; ${N[1]}++) {
                        ${N[0]} thread = new ${N[0]}();
                        thread.Start();
                    }
                }
            }`,
            description: "Программа, создающая несколько потоков и выполняющая в них задачи.",
            next: 42
        },
        {
            codeP: `using System;

            class ${N[0]} {
                private int ${N[1]} = 0;

                public synchronized void Increment() {
                    ${N[1]}++;
                }

                public int GetValue() {
                    return ${N[1]};
                }
            }

            public class ${N[4]} {
                public static void Main(string[] args) {
                    ${N[0]} counter = new ${N[0]}();
                    Thread thread1 = new Thread(() => {
                        for (int ${N[7]} = 0; ${N[7]} < 1000; ${N[7]}++) {
                            counter.Increment();
                        }
                    });
                    Thread thread2 = new Thread(() => {
                        for (int ${N[7]} = 0; ${N[7]} < 1000; ${N[7]}++) {
                            counter.Increment();
                        }
                    });
                    thread1.Start();
                    thread2.Start();
                    thread1.Join();
                    thread2.Join();
                    Console.WriteLine("Итоговое значение: " + counter.GetValue());
                }
            }`,
            description: "Программа, демонстрирующая синхронизацию потоков с использованием synchronized.",
            next: 43
        },
        {
            codeP: `using System;
            using System.Threading;

            public class ${N[0]} {
                private static readonly Queue<int> ${N[1]} = new Queue<int>();
                private static readonly int ${N[2]} = 5;

                public static void Main(string[] args) {
                    Thread producer = new Thread(() => {
                        for (int ${N[4]} = 0; ${N[4]} < 10; ${N[4]}++) {
                            lock (${N[1]}) {
                                while (${N[1]}.Count == ${N[2]}) {
                                    Monitor.Wait(${N[1]});
                                }
                                ${N[1]}.Enqueue(${N[4]});
                                Console.WriteLine("Производитель добавил: " + ${N[4]});
                                Monitor.PulseAll(${N[1]});
                            }
                        }
                    });

                    Thread consumer = new Thread(() => {
                        for (int ${N[4]} = 0; ${N[4]} < 10; ${N[4]}++) {
                            lock (${N[1]}) {
                                while (${N[1]}.Count == 0) {
                                    Monitor.Wait(${N[1]});
                                }
                                int item = ${N[1]}.Dequeue();
                                Console.WriteLine("Потребитель забрал: " + item);
                                Monitor.PulseAll(${N[1]});
                            }
                        }
                    });

                    producer.Start();
                    consumer.Start();
                }
            }`,
            description: "Программа, реализующая паттерн 'производитель-потребитель' с использованием многопоточности.",
            next: 45
        },
        {
            codeP: `using System;
            using System.Threading;

            public class ${N[0]} {
                static readonly object ${N[1]} = new object();
                static readonly object ${N[2]} = new object();

                public static void Main(string[] args) {
                    Thread thread1 = new Thread(() => {
                        lock (${N[1]}) {
                            Console.WriteLine("Поток 1: Захватил ${N[1]}");
                            Thread.Sleep(100);
                            Console.WriteLine("Поток 1: Ожидает ${N[2]}");
                            lock (${N[2]}) {
                                Console.WriteLine("Поток 1: Захватил ${N[2]}");
                            }
                        }
                    });

                    Thread thread2 = new Thread(() => {
                        lock (${N[2]}) {
                            Console.WriteLine("Поток 2: Захватил ${N[2]}");
                            Thread.Sleep(100);
                            Console.WriteLine("Поток 2: Ожидает ${N[1]}");
                            lock (${N[1]}) {
                                Console.WriteLine("Поток 2: Захватил ${N[1]}");
                            }
                        }
                    });

                    thread1.Start();
                    thread2.Start();
                }
            }`,
            description: "Программа, демонстрирующая ситуацию deadlock (взаимной блокировки).",
            next: 46
        },
        {
            codeP: `using System;

            class ${N[0]} {
                private double ${N[1]};

                public ${N[0]}(double ${N[2]}) {
                    ${N[1]} = ${N[2]};
                }

                public void Deposit(double ${N[4]}) {
                    ${N[1]} += ${N[4]};
                }

                public void Withdraw(double ${N[4]}) {
                    ${N[1]} -= ${N[4]};
                }

                public double GetBalance() {
                    return ${N[1]};
                }

                public static void Main(string[] args) {
                    ${N[0]} account = new ${N[0]}(1000);
                    account.Deposit(500);
                    account.Withdraw(300);
                    Console.WriteLine("Баланс: " + account.GetBalance());
                }
            }`,
            description: "Класс 'Счет' с методами для пополнения, снятия и получения баланса.",
            next: 47
        },
        {
            codeP: `using System;

            class ${N[0]} {
                public void Speak() {
                    Console.WriteLine("Животное издает звук.");
                }
            }

            class ${N[2]} : ${N[0]} {
                public override void Speak() {
                    Console.WriteLine("Гав!");
                }
            }

            class ${N[3]} : ${N[0]} {
                public override void Speak() {
                    Console.WriteLine("Мяу!");
                }
            }

            public class ${N[4]} {
                public static void Main(string[] args) {
                    ${N[0]} animal1 = new ${N[2]}();
                    ${N[0]} animal2 = new ${N[3]}();
                    animal1.Speak();
                    animal2.Speak();
                }
            }`,
            description: "Программа, демонстрирующая наследование и переопределение методов.",
            next: 48
        },
        {
            codeP: `using System;

            interface ${N[0]} {
                void Draw();
            }

            class ${N[2]} : ${N[0]} {
                public void Draw() {
                    Console.WriteLine("Рисуем круг.");
                }
            }

            class ${N[3]} : ${N[0]} {
                public void Draw() {
                    Console.WriteLine("Рисуем прямоугольник.");
                }
            }

            public class ${N[4]} {
                public static void Main(string[] args) {
                    ${N[0]} shape1 = new ${N[2]}();
                    ${N[0]} shape2 = new ${N[3]}();
                    shape1.Draw();
                    shape2.Draw();
                }
            }`,
            description: "Программа, демонстрирующая использование интерфейсов.",
            next: 49
        },
        {
            codeP: `using System;

            class ${N[0]} {
                public void Speak() {
                    Console.WriteLine("Животное издает звук.");
                }
            }

            class ${N[2]} : ${N[0]} {
                public override void Speak() {
                    Console.WriteLine("Гав!");
                }
            }

            class ${N[3]} : ${N[0]} {
                public override void Speak() {
                    Console.WriteLine("Мяу!");
                }
            }

            public class ${N[4]} {
                public static void Main(string[] args) {
                    ${N[0]} animal1 = new ${N[2]}();
                    ${N[0]} animal2 = new ${N[3]}();
                    animal1.Speak();
                    animal2.Speak();
                }
            }`,
            description: "Программа, демонстрирующая полиморфизм через переопределение методов.",
            next: 50
        },
        {
            codeP: `using System;

            class ${N[0]} {
                private static ${N[0]} _instance;

                private ${N[0]}() {}

                public static ${N[0]} GetInstance() {
                    if (_instance == null) {
                        _instance = new ${N[0]}();
                    }
                    return _instance;
                }

                public void Print() {
                    Console.WriteLine("Синглтон работает.");
                }

                public static void Main(string[] args) {
                    ${N[0]} instance = ${N[0]}.GetInstance();
                    instance.Print();
                }
            }`,
            description: "Программа, реализующая шаблон проектирования 'Синглтон'.",
            next: null
        }
    ];
}
































// // Задача 1. Hello, World!
// {
//     code: `using System;

//     public class HelloWorld {
//         public static void Main(string[] args) {
//             Console. 
//         WriteLine("Hello,World!");}
//     }`,
//     description: "Простейший пример программы, выводящей 'Hello, World!' на консоль.",
//     next: 1
// },

// // Задача 2. Сумма двух чисел
// {
//     code: `using System;

//     public class SumTwoNumbers {
//         public static void Main(string[] args) {
//             Console.Write("Введите первое число: ");
//             int num1 = Convert.ToInt32(Console.ReadLine());
//             Console.Write("Введите второе число: ");
//             int num2 = Convert.ToInt32(Console.ReadLine());
//             Console.WriteLine("Сумма: " + (num1 + num2));
//         }
//     }`,
//     description: "Программа, которая принимает два числа и выводит их сумму.",
//     next: 2
// },

// // Задача 3. Четное или нечетное
// {
//     code: `using System;

//     public class EvenOrOdd {
//         public static void Main(string[] args) {
//             Console.Write("Введите число: ");
//             int num = Convert.ToInt32(Console.ReadLine());
//             if (num % 2 == 0) {
//                 Console.WriteLine(num + " - четное число.");
//             } else {
//                 Console.WriteLine(num + " - нечетное число.");
//             }
//         }
//     }`,
//     description: "Программа, которая проверяет, является ли число четным или нечетным.",
//     next: 3
// },

// // Задача 4. Факториал числа
// {
//     code: `using System;

//     public class Factorial {
//         public static void Main(string[] args) {
//             Console.Write("Введите число: ");
//             int num = Convert.ToInt32(Console.ReadLine());
//             int factorial = 1;
//             for (int i = 1; i <= num; i++) {
//                 factorial *= i;
//             }
//             Console.WriteLine("Факториал " + num + " = " + factorial);
//         }
//     }`,
//     description: "Программа, которая вычисляет факториал числа.",
//     next: 4
// },

// // Задача 5. Таблица умножения
// {
//     code: `using System;

//     public class MultiplicationTable {
//         public static void Main(string[] args) {
//             Console.Write("Введите число для таблицы умножения: ");
//             int num = Convert.ToInt32(Console.ReadLine());
//             for (int i = 1; i <= 10; i++) {
//                 Console.WriteLine(num + " x " + i + " = " + (num * i));
//             }
//         }
//     }`,
//     description: "Программа, которая выводит таблицу умножения для числа, введенного пользователем.",
//     next: 5
// },

// // Задача 6. Проверка палиндрома
// {
//     code: `using System;

//     public class PalindromeCheck {
//         public static void Main(string[] args) {
//             Console.Write("Введите строку: ");
//             string input = Console.ReadLine();
//             string reverse = new string(input.Reverse().ToArray());
//             if (input.Equals(reverse, StringComparison.OrdinalIgnoreCase)) {
//                 Console.WriteLine(input + " - палиндром.");
//             } else {
//                 Console.WriteLine(input + " - не палиндром.");
//             }
//         }
//     }`,
//     description: "Программа, которая проверяет, является ли строка палиндромом.",
//     next: 6
// },

// // Задача 7. Наибольший общий делитель (НОД)
// {
//     code: `using System;

//     public class GCD {
//         public static void Main(string[] args) {
//             Console.Write("Введите первое число: ");
//             int a = Convert.ToInt32(Console.ReadLine());
//             Console.Write("Введите второе число: ");
//             int b = Convert.ToInt32(Console.ReadLine());
//             while (b != 0) {
//                 int temp = b;
//                 b = a % b;
//                 a = temp;
//             }
//             Console.WriteLine("Наибольший общий делитель: " + a);
//         }
//     }`,
//     description: "Программа, которая находит наибольший общий делитель двух чисел.",
//     next: 7
// },

// // Задача 8. Простые числа
// {
//     code: `using System;

//     public class PrimeCheck {
//         public static void Main(string[] args) {
//             Console.Write("Введите число: ");
//             int num = Convert.ToInt32(Console.ReadLine());
//             bool isPrime = true;
//             if (num <= 1) isPrime = false;
//             for (int i = 2; i <= Math.Sqrt(num); i++) {
//                 if (num % i == 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }
//             if (isPrime) {
//                 Console.WriteLine(num + " - простое число.");
//             } else {
//                 Console.WriteLine(num + " - не простое число.");
//             }
//         }
//     }`,
//     description: "Программа, которая проверяет, является ли число простым.",
//     next: 8
// },

// // Задача 9. Сумма цифр числа
// {
//     code: `using System;

//     public class SumOfDigits {
//         public static void Main(string[] args) {
//             Console.Write("Введите число: ");
//             int num = Convert.ToInt32(Console.ReadLine());
//             int sum = 0;
//             while (num != 0) {
//                 sum += num % 10; // добавляем последнюю цифру к сумме
//                 num /= 10; // убираем последнюю цифру
//             }
//             Console.WriteLine("Сумма цифр: " + sum);
//         }
//     }`,
//     description: "Программа, которая вычисляет сумму цифр числа.",
//     next: 9
// },

// // Задача 10. Переворот строки
// {
//     code: `using System;

//     public class ReverseString {
//         public static void Main(string[] args) {
//             Console.Write("Введите строку: ");
//             string input = Console.ReadLine();
//             char[] charArray = input.ToCharArray();
//             Array.Reverse(charArray);
//             Console.WriteLine("Перевернутая строка: " + new string(charArray));
//         }
//     }`,
//     description: "Программа, которая переворачивает строку.",
//     next: 11
// },

// // Задача 11. Поиск минимального и максимального элемента в массиве
// {
//     code: `using System;

//     public class MinMaxInArray {
//         public static void Main(string[] args) {
//             Console.Write("Введите размер массива: ");
//             int n = Convert.ToInt32(Console.ReadLine());
//             int[] array = new int[n];
//             Console.WriteLine("Введите элементы массива:");
//             for (int i = 0; i < n; i++) {
//                 array[i] = Convert.ToInt32(Console.ReadLine());
//             }
//             int min = array[0];
//             int max = array[0];
//             for (int i = 1; i < n; i++) {
//                 if (array[i] < min) {
//                     min = array[i];
//                 }
//                 if (array[i] > max) {
//                     max = array[i];
//                 }
//             }
//             Console.WriteLine("Минимальный элемент: " + min);
//             Console.WriteLine("Максимальный элемент: " + max);
//         }
//     }`,
//     description: "Программа, которая находит минимальный и максимальный элементы в массиве.",
//     next: 12
// },

// // Задача 12. Сортировка массива
// {
//     code: `using System;

//     public class BubbleSort {
//         public static void Main(string[] args) {
//             int[] array = {64, 34, 25, 12, 22, 11, 90};
//             int n = array.Length;
//             for (int i = 0; i < n - 1; i++) {
//                 for (int j = 0; j < n - i - 1; j++) {
//                     if (array[j] > array[j + 1]) {
//                         // меняем элементы местами
//                         int temp = array[j];
//                         array[j] = array[j + 1];
//                         array[j + 1] = temp;
//                     }
//                 }
//             }
//             Console.WriteLine("Отсортированный массив: ");
//             foreach (int num in array) {
//                 Console.Write(num + " ");
//             }
//         }
//     }`,
//     description: "Программа, которая сортирует массив чисел (пузырьковая сортировка).",
//     next: 13
// },

// // Задача 13. Бинарный поиск
// {
//     code: `using System;

//     public class BinarySearch {
//         public static void Main(string[] args) {
//             int[] array = {2, 3, 4, 10, 40};
//             int key = 10;
//             int result = binarySearch(array, key);
//             if (result == -1) {
//                 Console.WriteLine("Элемент не найден.");
//             } else {
//                 Console.WriteLine("Элемент найден на индексе: " + result);
//             }
//         }

//         public static int binarySearch(int[] array, int key) {
//             int left = 0;
//             int right = array.Length - 1;
//             while (left <= right) {
//                 int mid = left + (right - left) / 2;
//                 if (array[mid] == key) {
//                     return mid;
//                 }
//                 if (array[mid] < key) {
//                     left = mid + 1;
//                 } else {
//                     right = mid - 1;
//                 }
//             }
//             return -1; // элемент не найден
//         }
//     }`,
//     description: "Программа, которая реализует бинарный поиск в отсортированном массиве.",
//     next: 14
// },

// // Задача 14. Числа Фибоначчи
// {
//     code: `using System;

//     public class Fibonacci {
//         public static void Main(string[] args) {
//             Console.Write("Введите количество чисел Фибоначчи: ");
//             int n = Convert.ToInt32(Console.ReadLine());
//             int a = 0, b = 1;
//             Console.Write("Числа Фибоначчи: " + a + " " + b);
//             for (int i = 2; i < n; i++) {
//                 int next = a + b;
//                 Console.Write(" " + next);
//                 a = b;
//                 b = next;
//             }
//         }
//     }`,
//     description: "Программа, которая выводит первые `n` чисел Фибоначчи.",
//     next: 15
// },

// // Задача 15. Проверка на анаграмму
// {
//     code: `using System;

//     public class AnagramCheck {
//         public static void Main(string[] args) {
//             Console.Write("Введите первое слово: ");
//             string str1 = Console.ReadLine();
//             Console.Write("Введите второе слово: ");
//             string str2 = Console.ReadLine();
//             char[] charArray1 = str1.ToCharArray();
//             char[] charArray2 = str2.ToCharArray();
//             Array.Sort(charArray1);
//             Array.Sort(charArray2);
//             bool isAnagram = charArray1.SequenceEqual(charArray2);
//             if (isAnagram) {
//                 Console.WriteLine("Слова являются анаграммами.");
//             } else {
//                 Console.WriteLine("Слова не являются анаграммами.");
//             }
//         }
//     }`,
//     description: "Программа, которая проверяет, являются ли две строки анаграммами.",
//     next: 16
// },

// // Задача 16. Подсчет гласных и согласных
// {
//     code: `using System;

//     public class VowelConsonantCount {
//         public static void Main(string[] args) {
//             Console.Write("Введите строку: ");
//             string input = Console.ReadLine();
//             int vowels = 0, consonants = 0;
//             foreach (char ch in input) {
//                 if (char.IsLetter(ch)) {
//                     if ("AEIOUaeiou".IndexOf(ch) != -1) {
//                         vowels++;
//                     } else {
//                         consonants++;
//                     }
//                 }
//             }
//             Console.WriteLine("Количество гласных: " + vowels);
//             Console.WriteLine("Количество согласных: " + consonants);
//         }
//     }`,
//     description: "Программа, которая подсчитывает количество гласных и согласных в строке.",
//     next: 17
// },

// // Задача 17. Удаление дубликатов из массива
// {
//     code: `using System;
//     using System.Collections.Generic;

//     public class RemoveDuplicates {
//         public static void Main(string[] args) {
//             Console.Write("Введите количество элементов: ");
//             int n = Convert.ToInt32(Console.ReadLine());
//             int[] array = new int[n];
//             Console.WriteLine("Введите элементы:");
//             for (int i = 0; i < n; i++) {
//                 array[i] = Convert.ToInt32(Console.ReadLine());
//             }
//             HashSet<int> set = new HashSet<int>(array);
//             Console.WriteLine("Массив без дубликатов: " + string.Join(", ", set));
//         }
//     }`,
//     description: "Программа, которая удаляет дубликаты из массива.",
//     next: 18
// },

// // Задача 18. Поиск второго по величине элемента
// {
//     code: `using System;

//     public class SecondLargest {
//         public static void Main(string[] args) {
//             Console.Write("Введите количество элементов: ");
//             int n = Convert.ToInt32(Console.ReadLine());
//             int[] array = new int[n];
//             Console.WriteLine("Введите элементы:");
//             for (int i = 0; i < n; i++) {
//                 array[i] = Convert.ToInt32(Console.ReadLine());
//             }
//             int largest = int.MinValue;
//             int secondLargest = int.MinValue;
//             foreach (int num in array) {
//                 if (num > largest) {
//                     secondLargest = largest;
//                     largest = num;
//                 } else if (num > secondLargest && num < largest) {
//                     secondLargest = num;
//                 }
//             }
//             if (secondLargest == int.MinValue) {
//                 Console.WriteLine("Нету второго по величине элемента.");
//             } else {
//                 Console.WriteLine("Второй по величине элемент: " + secondLargest);
//             }
//         }
//     }`,
//     description: "Программа, которая находит второй по величине элемент в массиве.",
//     next: 19
// },

// // Задача 19. Проверка на простое число (оптимизация)
// {
//     code: `using System;

//     public class OptimizedPrimeCheck {
//         public static void Main(string[] args) {
//             Console.Write("Введите число: ");
//             int num = Convert.ToInt32(Console.ReadLine());
//             bool isPrime = true;
//             if (num <= 1) isPrime = false;
//             for (int i = 2; i <= Math.Sqrt(num); i++) {
//                 if (num % i == 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }
//             if (isPrime) {
//                 Console.WriteLine(num + " - простое число.");
//             } else {
//                 Console.WriteLine(num + " - не простое число.");
//             }
//         }
//     }`,
//     description: "Оптимизированная программа для проверки простого числа.",
//     next: 20
// },

// // Задача 20. Шифр Цезаря
// {
//     code: `using System;

//     public class CaesarCipher {
//         public static void Main(string[] args) {
//             Console.Write("Введите текст: ");
//             string text = Console.ReadLine();
//             Console.Write("Введите сдвиг: ");
//             int shift = Convert.ToInt32(Console.ReadLine());
//             string cipherText = "";

//             foreach (char ch in text) {
//                 if (char.IsLetter(ch)) {
//                     char baseChar = char.IsLower(ch) ? 'a' : 'A';
//                     cipherText += (char)((((ch + shift) - baseChar + 26) % 26) + baseChar);
//                 } else {
//                     cipherText += ch;
//                 }
//             }
//             Console.WriteLine("Шифрованный текст: " + cipherText);
//         }
//     }`,
//     description: "Программа, которая шифрует текст с помощью шифра Цезаря.",
//     next: 21
// },

// // Задача 21. Реализация стека
// {
//     code: `using System;
//     using System.Collections.Generic;

//     public class StackImplementation {
//         public static void Main(string[] args) {
//             Stack<int> stack = new Stack<int>();
//             stack.Push(1);
//             stack.Push(2);
//             stack.Push(3);
//             Console.WriteLine("Элемент на вершине стека: " + stack.Peek());
//             Console.WriteLine("Удаляем элемент: " + stack.Pop());
//             Console.WriteLine("Элемент на вершине стека после удаления: " + stack.Peek());
//         }
//     }`,
//     description: "Программа, реализующая структуру данных 'стек' с методами push, pop и peek.",
//     next: 22
// },

// // Задача 22. Реализация очереди
// {
//     code: `using System;
//     using System.Collections.Generic;

//     public class QueueImplementation {
//         public static void Main(string[] args) {
//             Queue<int> queue = new Queue<int>();
//             queue.Enqueue(1);
//             queue.Enqueue(2);
//             queue.Enqueue(3);
//             Console.WriteLine("Первый элемент в очереди: " + queue.Peek());
//             Console.WriteLine("Удаляем элемент: " + queue.Dequeue());
//             Console.WriteLine("Первый элемент в очереди после удаления: " + queue.Peek());
//         }
//     }`,
//     description: "Программа, реализующая структуру данных 'очередь' с методами enqueue, dequeue и peek.",
//     next: 23
// },

// // Задача 23. Реализация связного списка
// {
//     code: `using System;

//     public class Node {
//         public int data;
//         public Node next;
//         public Node(int d) {
//             data = d;
//             next = null;
//         }
//     }

//     public class LinkedList {
//         public Node head;

//         public void Add(int data) {
//             Node newNode = new Node(data);
//             if (head == null) {
//                 head = newNode;
//                 return;
//             }
//             Node last = head;
//             while (last.next != null) {
//                 last = last.next;
//             }
//             last.next = newNode;
//         }

//         public void Print() {
//             Node current = head;
//             while (current != null) {
//                 Console.Write(current.data + " ");
//                 current = current.next;
//             }
//             Console.WriteLine();
//         }

//         public static void Main(string[] args) {
//             LinkedList list = new LinkedList();
//             list.Add(1);
//             list.Add(2);
//             list.Add(3);
//             list.Print();
//         }
//     }`,
//     description: "Программа, реализующая односвязный список с методами Add и Print.",
//     next: 24
// },

// // Задача 24. Поиск в глубину (DFS)
// {
//     code: `using System;
//     using System.Collections.Generic;

//     public class Graph {
//         private Dictionary<int, List<int>> adjList = new Dictionary<int, List<int>>();

//         public void AddEdge(int v, int w) {
//             if (!adjList.ContainsKey(v)) {
//                 adjList[v] = new List<int>();
//             }
//             adjList[v].Add(w);
//         }

//         public void DFS(int start) {
//             HashSet<int> visited = new HashSet<int>();
//             DFSHelper(start, visited);
//         }

//         private void DFSHelper(int v, HashSet<int> visited) {
//             visited.Add(v);
//             Console.Write(v + " ");
//             if (adjList.ContainsKey(v)) {
//                 foreach (int neighbor in adjList[v]) {
//                     if (!visited.Contains(neighbor)) {
//                         DFSHelper(neighbor, visited);
//                     }
//                 }
//             }
//         }

//         public static void Main(string[] args) {
//             Graph g = new Graph();
//             g.AddEdge(1, 2);
//             g.AddEdge(1, 3);
//             g.AddEdge(2, 4);
//             g.AddEdge(3, 5);
//             Console.WriteLine("Поиск в глубину начиная с 1:");
//             g.DFS(1);
//         }
//     }`,
//     description: "Программа, реализующая алгоритм поиска в глубину для обхода графа.",
//     next: 25
// },

// // Задача 25. Поиск в ширину (BFS)
// {
//     code: `using System;
//     using System.Collections.Generic;

//     public class Graph {
//         private Dictionary<int, List<int>> adjList = new Dictionary<int, List<int>>();

//         public void AddEdge(int v, int w) {
//             if (!adjList.ContainsKey(v)) {
//                 adjList[v] = new List<int>();
//             }
//             adjList[v].Add(w);
//         }

//         public void BFS(int start) {
//             HashSet<int> visited = new HashSet<int>();
//             Queue<int> queue = new Queue<int>();
//             visited.Add(start);
//             queue.Enqueue(start);

//             while (queue.Count > 0) {
//                 int v = queue.Dequeue();
//                 Console.Write(v + " ");
//                 if (adjList.ContainsKey(v)) {
//                     foreach (int neighbor in adjList[v]) {
//                         if (!visited.Contains(neighbor)) {
//                             visited.Add(neighbor);
//                             queue.Enqueue(neighbor);
//                         }
//                     }
//                 }
//             }
//         }

//         public static void Main(string[] args) {
//             Graph g = new Graph();
//             g.AddEdge(1, 2);
//             g.AddEdge(1, 3);
//             g.AddEdge(2, 4);
//             g.AddEdge(3, 5);
//             Console.WriteLine("Поиск в ширину начиная с 1:");
//             g.BFS(1);
//         }
//     }`,
//     description: "Программа, реализующая алгоритм поиска в ширину для обхода графа.",
//     next: 26
// },

// // Задача 26. Алгоритм Дейкстры
// {
//     code: `using System;
//     using System.Collections.Generic;

//     public class Dijkstra {
//         private Dictionary<int, List<Edge>> graph = new Dictionary<int, List<Edge>>();

//         public class Edge {
//             public int Destination;
//             public int Weight;

//             public Edge(int destination, int weight) {
//                 Destination = destination;
//                 Weight = weight;
//             }
//         }

//         public void AddEdge(int source, int destination, int weight) {
//             if (!graph.ContainsKey(source)) {
//                 graph[source] = new List<Edge>();
//             }
//             graph[source].Add(new Edge(destination, weight));
//         }

//         public void DijkstraAlgorithm(int start) {
//             var pq = new SortedSet<(int Distance, int Vertex)>();
//             var distances = new Dictionary<int, int>();
//             foreach (var vertex in graph.Keys) {
//                 distances[vertex] = int.MaxValue;
//             }
//             distances[start] = 0;
//             pq.Add((0, start));

//             while (pq.Count > 0) {
//                 var (currentDist, currentVertex) = pq.Min;
//                 pq.Remove(pq.Min);
//                 if (graph.ContainsKey(currentVertex)) {
//                     foreach (var edge in graph[currentVertex]) {
//                         int newDist = currentDist + edge.Weight;
//                         if (newDist < distances[edge.Destination]) {
//                             distances[edge.Destination] = newDist;
//                             pq.Add((newDist, edge.Destination));
//                         }
//                     }
//                 }
//             }
//             Console.WriteLine($"Расстояния от начальной вершины {start}:");
//             foreach (var pair in distances) {
//                 Console.WriteLine($"{pair.Key}: {pair.Value}");
//             }
//         }

//         public static void Main(string[] args) {
//             Dijkstra dijkstra = new Dijkstra();
//             dijkstra.AddEdge(1, 2, 1);
//             dijkstra.AddEdge(1, 3, 4);
//             dijkstra.AddEdge(2, 3, 2);
//             dijkstra.AddEdge(3, 4, 1);
//             Console.WriteLine("Алгоритм Дейкстры:");
//             dijkstra.DijkstraAlgorithm(1);
//         }
//     }`,
//     description: "Программа, реализующая алгоритм Дейкстры для поиска кратчайшего пути в графе.",
//     next: 27
// },

// // Задача 27. Сортировка слиянием (Merge Sort)
// {
//     code: `using System;
//     using System.Linq;

//     public class MergeSort {
//         public static void Main(string[] args) {
//             int[] array = {12, 11, 13, 5, 6, 7};
//             Console.WriteLine("Несортированный массив: " + string.Join(", ", array));
//             MergeSortAlgorithm(array);
//             Console.WriteLine("Отсортированный массив: " + string.Join(", ", array));
//         }

//         public static void MergeSortAlgorithm(int[] array) {
//             if (array.Length < 2) return;
//             int mid = array.Length / 2;
//             int[] left = array.Take(mid).ToArray();
//             int[] right = array.Skip(mid).ToArray();
//             MergeSortAlgorithm(left);
//             MergeSortAlgorithm(right);
//             Merge(array, left, right);
//         }

//         public static void Merge(int[] array, int[] left, int[] right) {
//             int i = 0, j = 0, k = 0;
//             while (i < left.Length && j < right.Length) {
//                 if (left[i] <= right[j]) {
//                     array[k++] = left[i++];
//                 } else {
//                     array[k++] = right[j++];
//                 }
//             }
//             while (i < left.Length) {
//                 array[k++] = left[i++];
//             }
//             while (j < right.Length) {
//                 array[k++] = right[j++];
//             }
//         }
//     }`,
//     description: "Программа, реализующая алгоритм сортировки слиянием.",
//     next: 28
// },

// // Задача 28. Быстрая сортировка (Quick Sort)
// {
//     code: `using System;

//     public class QuickSort {
//         public static void Main(string[] args) {
//             int[] array = {12, 11, 13, 5, 6, 7};
//             Console.WriteLine("Несортированный массив: " + string.Join(", ", array));
//             QuickSortAlgorithm(array, 0, array.Length - 1);
//             Console.WriteLine("Отсортированный массив: " + string.Join(", ", array));
//         }

//         public static void QuickSortAlgorithm(int[] array, int low, int high) {
//             if (low < high) {
//                 int pi = Partition(array, low, high);
//                 QuickSortAlgorithm(array, low, pi - 1);
//                 QuickSortAlgorithm(array, pi + 1, high);
//             }
//         }

//         public static int Partition(int[] array, int low, int high) {
//             int pivot = array[high];
//             int i = low - 1;
//             for (int j = low; j < high; j++) {
//                 if (array[j] < pivot) {
//                     i++;
//                     (array[i], array[j]) = (array[j], array[i]); // меняем элементы местами
//                 }
//             }
//             (array[i + 1], array[high]) = (array[high], array[i + 1]); // меняем элементы местами
//             return i + 1;
//         }
//     }`,
//     description: "Программа, реализующая алгоритм быстрой сортировки.",
//     next: 29
// },

// // Задача 29. Ханойские башни
// {
//     code: `using System;

//     public class TowersOfHanoi {
//         public static void Main(string[] args) {
//             int n = 3; // количество дисков
//             SolveHanoi(n, 'A', 'C', 'B'); // A, C, B - имена стержней
//         }

//         public static void SolveHanoi(int n, char source, char target, char auxiliary) {
//             if (n == 1) {
//                 Console.WriteLine("Переместить диск 1 с " + source + " на " + target);
//                 return;
//             }
//             SolveHanoi(n - 1, source, auxiliary, target);
//             Console.WriteLine("Переместить диск " + n + " с " + source + " на " + target);
//             SolveHanoi(n - 1, auxiliary, target, source);
//         }
//     }`,
//     description: "Программа, которая решает задачу 'Ханойские башни' с использованием рекурсии.",
//     next: 30
// },

// // Задача 30. Поиск подстроки (алгоритм Кнута-Морриса-Пратта)
// {
//     code: `using System;

//     public class KMP {
//         public static void Main(string[] args) {
//             string text = "ABABDABACDABABCABAB";
//             string pattern = "ABAB";
//             KMPSearch(pattern, text);
//         }

//         public static void KMPSearch(string pattern, string text) {
//             int M = pattern.Length;
//             int N = text.Length;
//             int[] lps = new int[M];
//             ComputeLPSArray(pattern, M, lps);
//             int i = 0; // индекс для текст
//             int j = 0; // индекс для паттерна
//             while (i < N) {
//                 if (pattern[j] == text[i]) {
//                     i++;
//                     j++;
//                 }
//                 if (j == M) {
//                     Console.WriteLine("Найдено в индексе " + (i - j));
//                     j = lps[j - 1];
//                 } else if (i < N && pattern[j] != text[i]) {
//                     if (j != 0) {
//                         j = lps[j - 1];
//                     } else {
//                         i++;
//                     }
//                 }
//             }
//         }

//         public static void ComputeLPSArray(string pattern, int M, int[] lps) {
//             int len = 0;
//             lps[0] = 0; // lps[0] всегда 0
//             int i = 1;
//             while (i < M) {
//                 if (pattern[i] == pattern[len]) {
//                     len++;
//                     lps[i] = len;
//                     i++;
//                 } else {
//                     if (len != 0) {
//                         len = lps[len - 1];
//                     } else {
//                         lps[i] = 0;
//                         i++;
//                     }
//                 }
//             }
//         }
//     }`,
//     description: "Программа, реализующая алгоритм Кнута-Морриса-Пратта для поиска подстроки в строке.",
//     next: 31
// },

// // Задача 31. Чтение и запись файла
// {
//     code: `using System;
//     using System.IO;

//     public class FileReadWrite {
//         public static void Main(string[] args) {
//             string content = "Hello, World!";
//             File.WriteAllText("output.txt", content);
//             Console.WriteLine("Данные записаны в файл.");
//             string readContent = File.ReadAllText("output.txt");
//             Console.WriteLine("Содержимое файла: " + readContent);
//         }
//     }`,
//     description: "Программа, которая читает данные из файла и записывает их в другой файл.",
//     next: 32
// },

// // Задача 32. Подсчет слов в файле
// {
//     code: `using System;
//     using System.IO;

//     public class WordCount {
//         public static void Main(string[] args) {
//             try {
//                 string[] lines = File.ReadAllLines("input.txt");
//                 int wordCount = 0;
//                 foreach (string line in lines) {
//                     string[] words = line.Split(new char[] { ' ', '\t', '\n' }, StringSplitOptions.RemoveEmptyEntries);
//                     wordCount += words.Length;
//                 }
//                 Console.WriteLine("Количество слов: " + wordCount);
//             } catch (IOException e) {
//                 Console.WriteLine("Ошибка при чтении файла: " + e.Message);
//             }
//         }
//     }`,
//     description: "Программа, которая подсчитывает количество слов в текстовом файле.",
//     next: 33
// },

// // Задача 33. Поиск самого длинного слова в файле
// {
//     code: `using System;
//     using System.IO;

//     public class LongestWord {
//         public static void Main(string[] args) {
//             try {
//                 string[] lines = File.ReadAllLines("input.txt");
//                 string longestWord = "";
//                 foreach (string line in lines) {
//                     string[] words = line.Split(new char[] { ' ', '\t', '\n' }, StringSplitOptions.RemoveEmptyEntries);
//                     foreach (string word in words) {
//                         if (word.Length > longestWord.Length) {
//                             longestWord = word;
//                         }
//                     }
//                 }
//                 Console.WriteLine("Самое длинное слово: " + longestWord);
//             } catch (IOException e) {
//                 Console.WriteLine("Ошибка при чтении файла: " + e.Message);
//             }
//         }
//     }`,
//     description: "Программа, которая находит самое длинное слово в текстовом файле.",
//     next: 34
// },

// // Задача 34. HTTP-запрос
// {
//     code: `using System;
//     using System.Net.Http;
//     using System.Threading.Tasks;

//     public class HttpRequest {
//         public static async Task Main(string[] args) {
//             string url = "http://www.example.com";
//             using (HttpClient client = new HttpClient()) {
//                 var response = await client.GetAsync(url);
//                 Console.WriteLine("Response Code: " + (int)response.StatusCode);
//                 string content = await response.Content.ReadAsStringAsync();
//                 Console.WriteLine("Response: " + content);
//             }
//         }
//     }`,
//     description: "Программа, которая отправляет HTTP-запрос на сервер и выводит ответ.",
//     next: 35
// },

// // Задача 35. Парсинг JSON
// {
//     code: `using System;
//     using System.IO;
//     using Newtonsoft.Json;

//     public class JsonParserExample {
//         public static void Main(string[] args) {
//             try {
//                 var json = File.ReadAllText("data.json");
//                 dynamic jsonObject = JsonConvert.DeserializeObject(json);
//                 string name = jsonObject.name;
//                 int age = jsonObject.age;
//                 Console.WriteLine("Имя: " + name);
//                 Console.WriteLine("Возраст: " + age);
//             } catch (IOException e) {
//                 Console.WriteLine("Ошибка при чтении файла: " + e.Message);
//             }
//         }
//     }`,
//     description: "Программа, которая читает JSON-файл и извлекает из него данные.",
//     next: 36
// },

// // Задача 36. Реализация хэш-таблицы
// {
//     code: `using System;
//     using System.Collections.Generic;

//     public class HashTableExample {
//         public static void Main(string[] args) {
//             Dictionary<string, int> map = new Dictionary<string, int>();
//             map["Alice"] = 25;
//             map["Bob"] = 30;
//             Console.WriteLine("Alice: " + map["Alice"]);
//             map.Remove("Bob");
//             Console.WriteLine("Содержимое таблицы:");
//             foreach (var kvp in map) {
//                 Console.WriteLine(kvp.Key + ": " + kvp.Value);
//             }
//         }
//     }`,
//     description: "Программа, реализующая хэш-таблицу с методами Add, Get и Remove.",
//     next: 37
// },

// // Задача 37. Реализация бинарного дерева
// {
//     code: `using System;

//     public class TreeNode {
//         public int value;
//         public TreeNode left, right;

//         public TreeNode(int item) {
//             value = item;
//             left = right = null;
//         }
//     }

//     public class BinaryTree {
//         public TreeNode root;

//         public void Insert(int value) {
//             root = InsertRec(root, value);
//         }

//         private TreeNode InsertRec(TreeNode root, int value) {
//             if (root == null) {
//                 root = new TreeNode(value);
//                 return root;
//             }
//             if (value < root.value) {
//                 root.left = InsertRec(root.left, value);
//             } else if (value > root.value) {
//                 root.right = InsertRec(root.right, value);
//             }
//             return root;
//         }

//         public void Inorder() {
//             InorderRec(root);
//         }

//         private void InorderRec(TreeNode root) {
//             if (root != null) {
//                 InorderRec(root.left);
//                 Console.Write(root.value + " ");
//                 InorderRec(root.right);
//             }
//         }

//         public static void Main(string[] args) {
//             BinaryTree tree = new BinaryTree();
//             tree.Insert(50);
//             tree.Insert(30);
//             tree.Insert(20);
//             tree.Insert(40);
//             tree.Insert(70);
//             tree.Insert(60);
//             tree.Insert(80);
//             Console.WriteLine("Индредный обход дерева:");
//             tree.Inorder();
//         }
//     }`,
//     description: "Программа, реализующая бинарное дерево с методами Insert и Inorder.",
//     next: 38
// },

// // Задача 38. Обход дерева (in-order, pre-order, post-order)
// {
//     code: `using System;

//     public class TreeNode {
//         public int value;
//         public TreeNode left, right;

//         public TreeNode(int item) {
//             value = item;
//             left = right = null;
//         }
//     }

//     public class BinaryTree {
//         public TreeNode root;

//         public void Insert(int value) {
//             root = InsertRec(root, value);
//         }

//         private TreeNode InsertRec(TreeNode root, int value) {
//             if (root == null) {
//                 root = new TreeNode(value);
//                 return root;
//             }
//             if (value < root.value) {
//                 root.left = InsertRec(root.left, value);
//             } else if (value > root.value) {
//                 root.right = InsertRec(root.right, value);
//             }
//             return root;
//         }

//         public void Inorder() {
//             InorderRec(root);
//         }

//         private void InorderRec(TreeNode root) {
//             if (root != null) {
//                 InorderRec(root.left);
//                 Console.Write(root.value + " ");
//                 InorderRec(root.right);
//             }
//         }

//         public void Preorder() {
//             PreorderRec(root);
//         }

//         private void PreorderRec(TreeNode root) {
//             if (root != null) {
//                 Console.Write(root.value + " ");
//                 PreorderRec(root.left);
//                 PreorderRec(root.right);
//             }
//         }

//         public void Postorder() {
//             PostorderRec(root);
//         }

//         private void PostorderRec(TreeNode root) {
//             if (root != null) {
//                 PostorderRec(root.left);
//                 PostorderRec(root.right);
//                 Console.Write(root.value + " ");
//             }
//         }

//         public static void Main(string[] args) {
//             BinaryTree tree = new BinaryTree();
//             tree.Insert(50);
//             tree.Insert(30);
//             tree.Insert(20);
//             tree.Insert(40);
//             tree.Insert(70);
//             tree.Insert(60);
//             tree.Insert(80);
//             Console.WriteLine("Индредный обход:");
//             tree.Inorder();
//             Console.WriteLine("\nПредварительный обход:");
//             tree.Preorder();
//             Console.WriteLine("\nПостоянный обход:");
//             tree.Postorder();
//         }
//     }`,
//     description: "Программа, реализующая три способа обхода бинарного дерева.",
//     next: 39
// },

// // Задача 39. Алгоритм Флойда-Уоршелла
// {
//     code: `using System;

//     class FloydWarshall {
//         const int INF = 99999;

//         public void FloydWarshallAlgorithm(int[,] graph) {
//             int V = graph.GetLength(0);
//             int[,] dist = new int[V, V];
//             for (int i = 0; i < V; i++) {
//                 for (int j = 0; j < V; j++) {
//                     dist[i, j] = graph[i, j];
//                 }
//             }
//             for (int k = 0; k < V; k++) {
//                 for (int i = 0; i < V; i++) {
//                     for (int j = 0; j < V; j++) {
//                         if (dist[i, k] + dist[k, j] < dist[i, j]) {
//                             dist[i, j] = dist[i, k] + dist[k, j];
//                         }
//                     }
//                 }
//             }
//             PrintSolution(dist);
//         }

//         void PrintSolution(int[,] dist) {
//             Console.WriteLine("Кратчайший путь между двумя вершинами:");
//             for (int i = 0; i < dist.GetLength(0); i++) {
//                 for (int j = 0; j < dist.GetLength(1); j++) {
//                     if (dist[i, j] == INF) {
//                         Console.Write("INF ");
//                     } else {
//                         Console.Write(dist[i, j] + " ");
//                     }
//                 }
//                 Console.WriteLine();
//             }
//         }

//         public static void Main(string[] args) {
//             int[,] graph = new int[,] {
//                 {0, 5, INF, 10},
//                 {INF, 0, 3, INF},
//                 {INF, INF, 0, 1},
//                 {INF, INF, INF, 0}
//             };
//             FloydWarshall fw = new FloydWarshall();
//             fw.FloydWarshallAlgorithm(graph);
//         }
//     }`,
//     description: "Программа, реализующая алгоритм Флойда-Уоршелла для поиска кратчайших путей в графе.",
//     next: 40
// },

// // Задача 40. Алгоритм Краскала
// {
//     code: `using System;
//     using System.Collections.Generic;

//     class Edge : IComparable<Edge> {
//         public int Source, Destination, Weight;

//         public Edge(int s, int d, int w) {
//             Source = s;
//             Destination = d;
//             Weight = w;
//         }

//         public int CompareTo(Edge other) {
//             return Weight - other.Weight;
//         }
//     }

//     public class Kruskal {
//         int[] parent, rank;

//         public void KruskalMST(List<Edge> edges, int numVertices) {
//             edges.Sort();
//             parent = new int[numVertices];
//             rank = new int[numVertices];

//             for (int i = 0; i < numVertices; i++) {
//                 parent[i] = i;
//                 rank[i] = 0;
//             }
//             List<Edge> result = new List<Edge>();
//             foreach (Edge edge in edges) {
//                 int rootSource = Find(edge.Source);
//                 int rootDestination = Find(edge.Destination);
//                 if (rootSource != rootDestination) {
//                     result.Add(edge);
//                     Union(rootSource, rootDestination);
//                 }
//             }
//             PrintResult(result);
//         }

//         private int Find(int vertex) {
//             if (parent[vertex] != vertex) {
//                 parent[vertex] = Find(parent[vertex]);
//             }
//             return parent[vertex];
//         }

//         private void Union(int source, int destination) {
//             int rootSource = Find(source);
//             int rootDestination = Find(destination);
//             if (rank[rootSource] > rank[rootDestination]) {
//                 parent[rootDestination] = rootSource;
//             } else if (rank[rootSource] < rank[rootDestination]) {
//                 parent[rootSource] = rootDestination;
//             } else {
//                 parent[rootDestination] = rootSource;
//                 rank[rootSource]++;
//             }
//         }

//         private void PrintResult(List<Edge> result) {
//             Console.WriteLine("Ребра в минимальном остовном дереве:");
//             foreach (Edge edge in result) {
//                 Console.WriteLine(edge.Source + " - " + edge.Destination + ": " + edge.Weight);
//             }
//         }

//         public static void Main(string[] args) {
//             List<Edge> edges = new List<Edge>();
//             edges.Add(new Edge(0, 1, 10));
//             edges.Add(new Edge(0, 2, 6));
//             edges.Add(new Edge(0, 3, 5));
//             edges.Add(new Edge(1, 3, 15));
//             edges.Add(new Edge(2, 3, 4));

//             Kruskal g = new Kruskal();
//             g.KruskalMST(edges, 4);
//         }
//     }`,
//     description: "Программа, реализующая алгоритм Краскала для поиска минимального остовного дерева.",
//     next: 41
// },

// // Задача 41. Создание потоков
// {
//     code: `using System;
//     using System.Threading;

//     public class ThreadExample {
//         public static void Main(string[] args) {
//             for (int i = 0; i < 5; i++) {
//                 Thread thread = new Thread(() => {
//                     Console.WriteLine("Поток " + Thread.CurrentThread.Name + " запущен.");
//                 });
//                 thread.Start();
//             }
//         }
//     }`,
//     description: "Программа, которая создает несколько потоков и выполняет в них различные задачи.",
//     next: 42
// },

// // Задача 42. Синхронизация потоков
// {
//     code: `using System;
//     using System.Threading;

//     class Counter {
//         private int count = 0;

//         public synchronized void Increment() {
//             count++;
//         }

//         public int GetCount() {
//             return count;
//         }
//     }

//     public class SynchronizedThreads {
//         public static void Main(string[] args) {
//             Counter counter = new Counter();
//             Thread t1 = new Thread(() => {
//                 for (int i = 0; i < 1000; i++) {
//                     counter.Increment();
//                 }
//             });
//             Thread t2 = new Thread(() => {
//                 for (int i = 0; i < 1000; i++) {
//                     counter.Increment();
//                 }
//             });
//             t1.Start();
//             t2.Start();
//             try {
//                 t1.Join();
//                 t2.Join();
//             } catch (ThreadInterruptedException e) {
//                 Console.WriteLine(e.Message);
//             }
//             Console.WriteLine("Итоговое значение счетчика: " + counter.GetCount());
//         }
//     }`,
//     description: "Программа, которая демонстрирует синхронизацию потоков.",
//     next: 43
// },

// // Задача 43. Пул потоков
// {
//     code: `using System;
//     using System.Threading.Tasks;

//     public class ThreadPoolExample {
//         public static void Main(string[] args) {
//             Parallel.For(0, 10, i => {
//                 Console.WriteLine("Задача " + i + " выполняется в потоке " + Thread.CurrentThread.Name);
//             });
//         }
//     }`,
//     description: "Программа, которая использует пул потоков для выполнения задач.",
//     next: 44
// },

// // Задача 44. Производитель-потребитель
// {
//     code: `using System;
//     using System.Collections.Generic;
//     using System.Threading;

//     class ProducerConsumer {
//         private static readonly Queue<int> queue = new Queue<int>();
//         private const int LIMIT = 5;

//         public static void Main(string[] args) {
//             Thread producer = new Thread(() => {
//                 for (int i = 0; i < 10; i++) {
//                     lock (queue) {
//                         while (queue.Count == LIMIT) {
//                             Monitor.Wait(queue);
//                         }
//                         queue.Enqueue(i);
//                         Console.WriteLine("Производитель добавил: " + i);
//                         Monitor.PulseAll(queue);
//                     }
//                 }
//             });
//             Thread consumer = new Thread(() => {
//                 for (int i = 0; i < 10; i++) {
//                     lock (queue) {
//                         while (queue.Count == 0) {
//                             Monitor.Wait(queue);
//                         }
//                         int value = queue.Dequeue();
//                         Console.WriteLine("Потребитель забрал: " + value);
//                         Monitor.PulseAll(queue);
//                     }
//                 }
//             });
//             producer.Start();
//             consumer.Start();
//         }
//     }`,
//     description: "Программа, которая реализует паттерн 'производитель-потребитель' с использованием многопоточности.",
//     next: 45
// },

// // Задача 45. Deadlock
// {
//     code: `using System;
//     using System.Threading;

//     public class DeadlockExample {
//         private static readonly object lock1 = new object();
//         private static readonly object lock2 = new object();

//         public static void Main(string[] args) {
//             Thread t1 = new Thread(() => {
//                 lock (lock1) {
//                     Console.WriteLine("Thread 1: Holding lock 1...");
//                     Thread.Sleep(100);
//                     Console.WriteLine("Thread 1: Waiting for lock 2...");
//                     lock (lock2) {
//                         Console.WriteLine("Thread 1: Acquired lock 2!");
//                     }
//                 }
//             });

//             Thread t2 = new Thread(() => {
//                 lock (lock2) {
//                     Console.WriteLine("Thread 2: Holding lock 2...");
//                     Thread.Sleep(100);
//                     Console.WriteLine("Thread 2: Waiting for lock 1...");
//                     lock (lock1) {
//                         Console.WriteLine("Thread 2: Acquired lock 1!");
//                     }
//                 }
//             });

//             t1.Start();
//             t2.Start();
//         }
//     }`,
//     description: "Программа, которая демонстрирует ситуацию deadlock (взаимной блокировки).",
//     next: 46
// },

// // Задача 46. Класс "Счет"
// {
//     code: `using System;

//     class Account {
//         private double balance;

//         public Account(double initialBalance) {
//             balance = initialBalance;
//         }

//         public void Deposit(double amount) {
//             balance += amount;
//         }

//         public void Withdraw(double amount) {
//             balance -= amount;
//         }

//         public double GetBalance() {
//             return balance;
//         }

//         public static void Main(string[] args) {
//             Account account = new Account(1000);
//             account.Deposit(500);
//             account.Withdraw(300);
//             Console.WriteLine("Баланс: " + account.GetBalance());
//         }
//     }`,
//     description: "Класс `Account`, который имеет методы `Deposit`, `Withdraw` и `GetBalance`.",
//     next: 47
// },

// // Задача 47. Наследование
// {
//     code: `using System;

//     class Animal {
//         public virtual void MakeSound() {
//             Console.WriteLine("Животное издает звук.");
//         }
//     }

//     class Dog : Animal {
//         public override void MakeSound() {
//             Console.WriteLine("Гав!");
//         }
//     }

//     class Cat : Animal {
//         public override void MakeSound() {
//             Console.WriteLine("Мяу!");
//         }
//     }

//     public class InheritanceExample {
//         public static void Main(string[] args) {
//             Animal dog = new Dog();
//             Animal cat = new Cat();
//             dog.MakeSound();
//             cat.MakeSound();
//         }
//     }`,
//     description: "Программа, демонстрирующая наследование и переопределение метода `MakeSound`.",
//     next: 48
// },

// // Задача 48. Интерфейсы
// {
//     code: `using System;

//     interface IDrawable {
//         void Draw();
//     }

//     class Circle : IDrawable {
//         public void Draw() {
//             Console.WriteLine("Рисуем круг.");
//         }
//     }

//     class Rectangle : IDrawable {
//         public void Draw() {
//             Console.WriteLine("Рисуем прямоугольник.");
//         }
//     }

//     public class InterfaceExample {
//         public static void Main(string[] args) {
//             IDrawable circle = new Circle();
//             IDrawable rectangle = new Rectangle();
//             circle.Draw();
//             rectangle.Draw();
//         }
//     }`,
//     description: "Программа, которая создает интерфейс `IDrawable` с методом `Draw` и реализует его в классах `Circle` и `Rectangle`.",
//     next: 49
// },

// // Задача 49. Полиморфизм
// {
//     code: `using System;

//     class Animal {
//         public virtual void MakeSound() {
//             Console.WriteLine("Животное издает звук.");
//         }
//     }

//     class Dog : Animal {
//         public override void MakeSound() {
//             Console.WriteLine("Гав!");
//         }
//     }

//     class Cat : Animal {
//         public override void MakeSound() {
//             Console.WriteLine("Мяу!");
//         }
//     }

//     public class PolymorphismExample {
//         public static void Main(string[] args) {
//             Animal myDog = new Dog();
//             Animal myCat = new Cat();
//             myDog.MakeSound();
//             myCat.MakeSound();
//         }
//     }`,
//     description: "Программа, демонстрирующая полиморфизм через переопределение методов.",
//     next: 50
// },

// // Задача 50. Шаблон проектирования "Синглтон"
// {
//     code: `using System;

//     class Database {
//         private static Database instance;

//         private Database() {}

//         public static Database GetInstance() {
//             if (instance == null) {
//                 instance = new Database();
//             }
//             return instance;
//         }

//         public void Connect() {
//             Console.WriteLine("Подключение к базе данных.");
//         }
//     }

//     public class SingletonExample {
//         public static void Main(string[] args) {
//             Database db1 = Database.GetInstance();
//             Database db2 = Database.GetInstance();
//             db1.Connect();
//             Console.WriteLine(db1 == db2); // выводит true, так как это один и тот же экземпляр
//         }
//     }`,
//     description: "Программа, реализующая шаблон проектирования 'Синглтон' для класса `Database`.",
//     next: null
// }
//];