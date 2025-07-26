
window.examplesP = null;

function fill(N) {

    console.log(N);
    window.examplesP = [
        {

            codeP: `public class ${N[0]} {
            public static void main(String[] args) {
                System.out.println("Hello, World!");
            }
        }`,
            description: "Простейший пример программы, выводящей 'Hello, World!' на консоль.",
            next: 1
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите первое число: ");
                int ${N[2]} = ${N[1]}.nextInt();
                System.out.print("Введите второе число: ");
                int ${N[3]} = ${N[1]}.nextInt();
                System.out.println("Сумма: " + (${N[2]} + ${N[3]}));
            }
        }`,
            description: "Программа, которая принимает два числа и выводит их сумму.",
            next: 2
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите число: ");
                int ${N[2]} = ${N[1]}.nextInt();
                if (${N[2]} % 2 == 0) {
                    System.out.println(${N[2]} + " - четное число.");
                } else {
                    System.out.println(${N[2]} + " - нечетное число.");
                }
            }
        }`,
            description: "Программа, которая проверяет, является ли число четным или нечетным.",
            next: 3
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите число: ");
                int ${N[2]} = ${N[1]}.nextInt();
                int ${N[3]} = 1;
                for (int ${N[4]} = 1; ${N[4]} <= ${N[2]}; ${N[4]}++) {
                    ${N[3]} *= ${N[4]};
                }
                System.out.println("Факториал " + ${N[2]} + " = " + ${N[3]});
            }
        }`,
            description: "Программа, которая вычисляет факториал числа.",
            next: 4
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите число для таблицы умножения: ");
                int ${N[2]} = ${N[1]}.nextInt();
                for (int ${N[3]} = 1; ${N[3]} <= 10; ${N[3]}++) {
                    System.out.println(${N[2]} + " x " + ${N[3]} + " = " + (${N[2]} * ${N[3]}));
                }
            }
        }`,
            description: "Программа, которая выводит таблицу умножения для числа, введенного пользователем.",
            next: 5
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите строку: ");
                String ${N[2]} = ${N[1]}.nextLine();
                String ${N[3]} = new StringBuilder(${N[2]}).reverse().toString();
                if (${N[2]}.equals(${N[3]})) {
                    System.out.println(${N[2]} + " - палиндром.");
                } else {
                    System.out.println(${N[2]} + " - не палиндром.");
                }
            }
        }`,
            description: "Программа, которая проверяет, является ли строка палиндромом.",
            next: 6
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите первое число: ");
                int ${N[2]} = ${N[1]}.nextInt();
                System.out.print("Введите второе число: ");
                int ${N[3]} = ${N[1]}.nextInt();
                while (${N[3]} != 0) {
                    int ${N[4]} = ${N[3]};
                    ${N[3]} = ${N[2]} % ${N[3]};
                    ${N[2]} = ${N[4]};
                }
                System.out.println("Наибольший общий делитель: " + ${N[2]});
            }
        }`,
            description: "Программа, которая находит наибольший общий делитель двух чисел.",
            next: 8
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите число: ");
                int ${N[2]} = ${N[1]}.nextInt();
                boolean ${N[3]} = true;
                if (${N[2]} <= 1) ${N[3]} = false;
                for (int ${N[4]} = 2; ${N[4]} <= Math.sqrt(${N[2]}); ${N[4]}++) {
                    if (${N[2]} % ${N[4]} == 0) {
                        ${N[3]} = false;
                        break;
                    }
                }
                if (${N[3]}) {
                    System.out.println(${N[2]} + " - простое число.");
                } else {
                    System.out.println(${N[2]} + " - не простое число.");
                }
            }
        }`,
            description: "Программа, которая проверяет, является ли число простым.",
            next: 9
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите число: ");
                int ${N[2]} = ${N[1]}.nextInt();
                int ${N[3]} = 0;
                while (${N[2]} != 0) {
                    ${N[3]} += ${N[2]} % 10;
                    ${N[2]} /= 10;
                }
                System.out.println("Сумма цифр: " + ${N[3]});
            }
        }`,
            description: "Программа, которая вычисляет сумму цифр числа.",
            next: 10
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите строку: ");
                String ${N[2]} = ${N[1]}.nextLine();
                String ${N[3]} = new StringBuilder(${N[2]}).reverse().toString();
                System.out.println("Перевернутая строка: " + ${N[3]});
            }
        }`,
            description: "Программа, которая переворачивает строку.",
            next: 11
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите размер массива: ");
                int ${N[2]} = ${N[1]}.nextInt();
                int[] ${N[3]} = new int[${N[2]}];
                System.out.println("Введите элементы массива:");
                for (int ${N[4]} = 0; ${N[4]} < ${N[2]}; ${N[4]}++) {
                    ${N[3]}[${N[4]}] = ${N[1]}.nextInt();
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
                System.out.println("Минимальный элемент: " + ${N[5]});
                System.out.println("Максимальный элемент: " + ${N[6]});
            }
        }`,
            description: "Программа, которая находит минимальный и максимальный элементы в массиве.",
            next: 12
        },
        {
            codeP: `public class ${N[0]} {
            public static void main(String[] args) {
                int[] ${N[1]} = {64, 34, 25, 12, 22, 11, 90};
                int ${N[2]} = ${N[1]}.length;
                for (int ${N[3]} = 0; ${N[3]} < ${N[2]} - 1; ${N[3]}++) {
                    for (int ${N[4]} = 0; ${N[4]} < ${N[2]} - ${N[3]} - 1; ${N[4]}++) {
                        if (${N[1]}[${N[4]}] > ${N[1]}[${N[4]} + 1]) {
                            int ${N[5]} = ${N[1]}[${N[4]}];
                            ${N[1]}[${N[4]}] = ${N[1]}[${N[4]} + 1];
                            ${N[1]}[${N[4]} + 1] = ${N[5]};
                        }
                    }
                }
                System.out.println("Отсортированный массив: ");
                for (int ${N[6]} : ${N[1]}) {
                    System.out.print(${N[6]} + " ");
                }
            }
        }`,
            description: "Программа, которая сортирует массив чисел (пузырьковая сортировка).",
            next: 13
        },
        {
            codeP: `import java.util.Arrays;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                int[] ${N[1]} = {2, 3, 4, 10, 40};
                int ${N[2]} = 10;
                int ${N[3]} = ${N[9]}(${N[1]}, ${N[2]});
                if (${N[3]} == -1) {
                    System.out.println("Элемент не найден.");
                } else {
                    System.out.println("Элемент найден на индексе: " + ${N[3]});
                }
            }
        
            public static int ${N[9]}(int[] ${N[4]}, int ${N[5]}) {
                int ${N[6]} = 0;
                int ${N[7]} = ${N[4]}.length - 1;
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
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите количество чисел Фибоначчи: ");
                int ${N[2]} = ${N[1]}.nextInt();
                int ${N[3]} = 0, ${N[4]} = 1;
                System.out.print("Числа Фибоначчи: " + ${N[3]} + " " + ${N[4]});
                for (int ${N[5]} = 2; ${N[5]} < ${N[2]}; ${N[5]}++) {
                    int ${N[6]} = ${N[3]} + ${N[4]};
                    System.out.print(" " + ${N[6]});
                    ${N[3]} = ${N[4]};
                    ${N[4]} = ${N[6]};
                }
            }
        }`,
            description: "Программа, которая выводит первые `n` чисел Фибоначчи.",
            next: 15
        },
        {
            codeP: `import java.util.Arrays;
        import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите первое слово: ");
                String ${N[2]} = ${N[1]}.nextLine();
                System.out.print("Введите второе слово: ");
                String ${N[3]} = ${N[1]}.nextLine();
                char[] ${N[4]} = ${N[2]}.toCharArray();
                char[] ${N[5]} = ${N[3]}.toCharArray();
                Arrays.sort(${N[4]});
                Arrays.sort(${N[5]});
                boolean ${N[6]} = Arrays.equals(${N[4]}, ${N[5]});
                if (${N[6]}) {
                    System.out.println("Слова являются анаграммами.");
                } else {
                    System.out.println("Слова не являются анаграммами.");
                }
            }
        }`,
            description: "Программа, которая проверяет, являются ли две строки анаграммами.",
            next: 16
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите строку: ");
                String ${N[2]} = ${N[1]}.nextLine();
                int ${N[3]} = 0, ${N[4]} = 0;
                for (char ${N[5]} : ${N[2]}.toCharArray()) {
                    if (Character.isLetter(${N[5]})) {
                        if ("AEIOUaeiou".indexOf(${N[5]}) != -1) {
                            ${N[3]}++;
                        } else {
                            ${N[4]}++;
                        }
                    }
                }
                System.out.println("Количество гласных: " + ${N[3]});
                System.out.println("Количество согласных: " + ${N[4]});
            }
        }`,
            description: "Программа, которая подсчитывает количество гласных и согласных в строке.",
            next: 17
        },
        {
            codeP: `import java.util.HashSet;
        import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите количество элементов: ");
                int ${N[2]} = ${N[1]}.nextInt();
                int[] ${N[3]} = new int[${N[2]}];
                System.out.println("Введите элементы:");
                for (int ${N[4]} = 0; ${N[4]} < ${N[2]}; ${N[4]}++) {
                    ${N[3]}[${N[4]}] = ${N[1]}.nextInt();
                }
                HashSet<Integer> ${N[5]} = new HashSet<>();
                for (int ${N[6]} : ${N[3]}) {
                    ${N[5]}.add(${N[6]});
                }
                System.out.println("Массив без дубликатов: " + ${N[5]});
            }
        }`,
            description: "Программа, которая удаляет дубликаты из массива",
            next: 18
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите количество элементов: ");
                int ${N[2]} = ${N[1]}.nextInt();
                int[] ${N[3]} = new int[${N[2]}];
                System.out.println("Введите элементы:");
                for (int ${N[4]} = 0; ${N[4]} < ${N[2]}; ${N[4]}++) {
                    ${N[3]}[${N[4]}] = ${N[1]}.nextInt();
                }
                int ${N[5]} = Integer.MIN_VALUE;
                int ${N[6]} = Integer.MIN_VALUE;
                for (int ${N[7]} : ${N[3]}) {
                    if (${N[7]} > ${N[5]}) {
                        ${N[6]} = ${N[5]};
                        ${N[5]} = ${N[7]};
                    } else if (${N[7]} > ${N[6]} && ${N[7]} < ${N[5]}) {
                        ${N[6]} = ${N[7]};
                    }
                }
                System.out.println("Второй по величине элемент: " + ${N[6]});
            }
        }`,
            description: "Программа, которая находит второй по величине элемент в массиве.",
            next: 19
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите число: ");
                int ${N[2]} = ${N[1]}.nextInt();
                boolean ${N[3]} = true;
                if (${N[2]} <= 1) ${N[3]} = false;
                for (int ${N[4]} = 2; ${N[4]} <= Math.sqrt(${N[2]}); ${N[4]}++) {
                    if (${N[2]} % ${N[4]} == 0) {
                        ${N[3]} = false;
                        break;
                    }
                }
                System.out.println(${N[2]} + " - " + (${N[3]} ? "простое" : "не простое") + " число.");
            }
        }`,
            description: "Оптимизированная программа для проверки простого числа.",
            next: 20
        },
        {
            codeP: `import java.util.Scanner;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Scanner ${N[1]} = new Scanner(System.in);
                System.out.print("Введите текст: ");
                String ${N[2]} = ${N[1]}.nextLine();
                System.out.print("Введите сдвиг: ");
                int ${N[3]} = ${N[1]}.nextInt();
                StringBuilder ${N[4]} = new StringBuilder();
                for (char ${N[5]} : ${N[2]}.toCharArray()) {
                    if (Character.isLetter(${N[5]})) {
                        char ${N[6]} = Character.isLowerCase(${N[5]}) ? 'a' : 'A';
                        ${N[4]}.append((char) ((${N[5]} + ${N[3]} - ${N[6]}) % 26 + ${N[6]}));
                    } else {
                        ${N[4]}.append(${N[5]});
                    }
                }
                System.out.println("Шифрованный текст: " + ${N[4]});
            }
        }`,
            description: "Программа, которая шифрует текст с помощью шифра Цезаря.",
            next: 21
        },
        {
            codeP: `import java.util.Stack;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Stack<Integer> ${N[1]} = new Stack<>();
                ${N[1]}.push(1);
                ${N[1]}.push(2);
                ${N[1]}.push(3);
                System.out.println("Элемент на вершине: " + ${N[1]}.peek());
                System.out.println("Удален элемент: " + ${N[1]}.pop());
                System.out.println("Новая вершина: " + ${N[1]}.peek());
            }
        }`,
            description: "Программа, реализующая структуру данных 'стек' с методами push, pop и peek.",
            next: 22
        },
        {
            codeP: `import java.util.LinkedList;
        import java.util.Queue;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                Queue<Integer> ${N[1]} = new LinkedList<>();
                ${N[1]}.add(1);
                ${N[1]}.add(2);
                ${N[1]}.add(3);
                System.out.println("Первый элемент: " + ${N[1]}.peek());
                System.out.println("Удален элемент: " + ${N[1]}.poll());
                System.out.println("Новый первый элемент: " + ${N[1]}.peek());
            }
        }`,
            description: "Программа, реализующая структуру данных 'очередь' с методами enqueue, dequeue и peek.",
            next: 23
        },
        {
            codeP: `class ${N[0]} {
            int ${N[1]};
            ${N[0]} ${N[2]};
            ${N[0]}(int ${N[3]}) {
                ${N[1]} = ${N[3]};
                ${N[2]} = null;
            }
        }
        
        public class ${N[4]} {
            ${N[0]} ${N[5]};
        
            public void add(int ${N[1]}) {
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
        
            public void print() {
                ${N[0]} ${N[7]} = ${N[5]};
                while (${N[7]} != null) {
                    System.out.print(${N[7]}.${N[1]} + " ");
                    ${N[7]} = ${N[7]}.${N[2]};
                }
                System.out.println();
            }
        
            public static void main(String[] args) {
                ${N[4]} ${N[8]} = new ${N[4]}();
                ${N[8]}.add(1);
                ${N[8]}.add(2);
                ${N[8]}.add(3);
                ${N[8]}.print();
            }
        }`,
            description: "Программа, реализующая односвязный список с методами add и print.",
            next: 24
        },
        {
            codeP: `import java.util.*;
        
        public class ${N[0]} {
            private final Map<Integer, List<Integer>> ${N[1]} = new HashMap<>();
        
            public void addEdge(int ${N[2]}, int ${N[3]}) {
                ${N[1]}.computeIfAbsent(${N[2]}, ${N[4]} -> new ArrayList<>()).add(${N[3]});
                ${N[1]}.computeIfAbsent(${N[3]}, ${N[4]} -> new ArrayList<>()).add(${N[2]});
            }
        
            public void dfs(int ${N[5]}) {
                Set<Integer> ${N[6]} = new HashSet<>();
                dfsHelper(${N[5]}, ${N[6]});
            }
        
            private void dfsHelper(int ${N[7]}, Set<Integer> ${N[6]}) {
                ${N[6]}.add(${N[7]});
                System.out.print(${N[7]} + " ");
                for (int ${N[8]} : ${N[1]}.getOrDefault(${N[7]}, Collections.emptyList())) {
                    if (!${N[6]}.contains(${N[8]})) {
                        dfsHelper(${N[8]}, ${N[6]});
                    }
                }
            }
        
            public static void main(String[] args) {
                ${N[0]} ${N[9]} = new ${N[0]}();
                ${N[9]}.addEdge(1, 2);
                ${N[9]}.addEdge(1, 3);
                ${N[9]}.addEdge(2, 4);
                ${N[9]}.addEdge(3, 5);
                ${N[9]}.dfs(1);
            }
        }`,
            description: "Программа, реализующая алгоритм поиска в глубину для обхода графа.",
            next: 25
        },
        {
            codeP: `import java.util.*;
        
        public class ${N[0]} {
            private final Map<Integer, List<Integer>> ${N[1]} = new HashMap<>();
        
            public void addEdge(int ${N[2]}, int ${N[3]}) {
                ${N[1]}.computeIfAbsent(${N[2]}, ${N[4]} -> new ArrayList<>()).add(${N[3]});
                ${N[1]}.computeIfAbsent(${N[3]}, ${N[4]} -> new ArrayList<>()).add(${N[2]});
            }
        
            public void bfs(int ${N[5]}) {
                Set<Integer> ${N[6]} = new HashSet<>();
                Queue<Integer> ${N[7]} = new LinkedList<>();
                ${N[6]}.add(${N[5]});
                ${N[7]}.add(${N[5]});
                while (!${N[7]}.isEmpty()) {
                    int ${N[8]} = ${N[7]}.poll();
                    System.out.print(${N[8]} + " ");
                    for (int ${N[9]} : ${N[1]}.getOrDefault(${N[8]}, Collections.emptyList())) {
                        if (!${N[6]}.contains(${N[9]})) {
                            ${N[6]}.add(${N[9]});
                            ${N[7]}.add(${N[9]});
                        }
                    }
                }
            }
        
            public static void main(String[] args) {
                ${N[0]} ${N[10]} = new ${N[0]}();
                ${N[10]}.addEdge(1, 2);
                ${N[10]}.addEdge(1, 3);
                ${N[10]}.addEdge(2, 4);
                ${N[10]}.addEdge(3, 5);
                ${N[10]}.bfs(1);
            }
        }`,
            description: "Программа, реализующая алгоритм поиска в ширину для обхода графа.",
            next: 26
        },
        {
            codeP: `import java.util.*;
        
        public class ${N[0]} {
            private final Map<Integer, List<${N[1]}>> ${N[2]} = new HashMap<>();
        
            static class ${N[1]} {
                int ${N[3]};
                int ${N[4]};
                ${N[1]}(int ${N[5]}, int ${N[6]}) {
                    ${N[3]} = ${N[5]};
                    ${N[4]} = ${N[6]};
                }
            }
        
            public void addEdge(int ${N[7]}, int ${N[8]}, int ${N[9]}) {
                ${N[2]}.computeIfAbsent(${N[7]}, ${N[10]} -> new ArrayList<>())
                    .add(new ${N[1]}(${N[8]}, ${N[9]}));
            }
        
            public void findShortestPaths(int ${N[11]}) {
                PriorityQueue<${N[1]}> ${N[12]} = new PriorityQueue<>(Comparator.comparingInt(${N[13]} -> ${N[13]}.${N[4]}));
                Map<Integer, Integer> ${N[14]} = new HashMap<>();
                for (Integer ${N[15]} : ${N[2]}.keySet()) {
                    ${N[14]}.put(${N[15]}, Integer.MAX_VALUE);
                }
                ${N[14]}.put(${N[11]}, 0);
                ${N[12]}.add(new ${N[1]}(${N[11]}, 0));
        
                while (!${N[12]}.isEmpty()) {
                    ${N[1]} ${N[16]} = ${N[12]}.poll();
                    for (${N[1]} ${N[17]} : ${N[2]}.getOrDefault(${N[16]}.${N[3]}, Collections.emptyList())) {
                        int ${N[18]} = ${N[16]}.${N[4]} + ${N[17]}.${N[4]};
                        if (${N[18]} < ${N[14]}.get(${N[17]}.${N[3]})) {
                            ${N[14]}.put(${N[17]}.${N[3]}, ${N[18]});
                            ${N[12]}.add(new ${N[1]}(${N[17]}.${N[3]}, ${N[18]}));
                        }
                    }
                }
                System.out.println("Кратчайшие пути: " + ${N[14]});
            }
        
            public static void main(String[] args) {
                ${N[0]} ${N[19]} = new ${N[0]}();
                ${N[19]}.addEdge(1, 2, 1);
                ${N[19]}.addEdge(1, 3, 4);
                ${N[19]}.addEdge(2, 3, 2);
                ${N[19]}.addEdge(3, 4, 1);
                ${N[19]}.findShortestPaths(1);
            }
        }`,
            description: "Программа, реализующая алгоритм Дейкстры для поиска кратчайшего пути в графе.",
            next: 27
        },
        {
            codeP: `import java.util.Arrays;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                int[] ${N[1]} = {12, 11, 13, 5, 6, 7};
                System.out.println("Исходный массив: " + Arrays.toString(${N[1]}));
                ${N[2]}(${N[1]});
                System.out.println("Отсортированный массив: " + Arrays.toString(${N[1]}));
            }
        
            public static void ${N[2]}(int[] ${N[3]}) {
                if (${N[3]}.length < 2) return;
                int ${N[4]} = ${N[3]}.length / 2;
                int[] ${N[5]} = Arrays.copyOfRange(${N[3]}, 0, ${N[4]});
                int[] ${N[6]} = Arrays.copyOfRange(${N[3]}, ${N[4]}, ${N[3]}.length);
                ${N[2]}(${N[5]});
                ${N[2]}(${N[6]});
                ${N[7]}(${N[3]}, ${N[5]}, ${N[6]});
            }
        
            public static void ${N[7]}(int[] ${N[3]}, int[] ${N[5]}, int[] ${N[6]}) {
                int ${N[8]} = 0, ${N[9]} = 0, ${N[10]} = 0;
                while (${N[8]} < ${N[5]}.length && ${N[9]} < ${N[6]}.length) {
                    if (${N[5]}[${N[8]}] <= ${N[6]}[${N[9]}]) {
                        ${N[3]}[${N[10]}] = ${N[5]}[${N[8]}];
                        ${N[8]}++;
                    } else {
                        ${N[3]}[${N[10]}] = ${N[6]}[${N[9]}];
                        ${N[9]}++;
                    }
                    ${N[10]}++;
                }
                while (${N[8]} < ${N[5]}.length) {
                    ${N[3]}[${N[10]}] = ${N[5]}[${N[8]}];
                    ${N[8]}++;
                    ${N[10]}++;
                }
                while (${N[9]} < ${N[6]}.length) {
                    ${N[3]}[${N[10]}] = ${N[6]}[${N[9]}];
                    ${N[9]}++;
                    ${N[10]}++;
                }
            }
        }`,
            description: "Программа, реализующая алгоритм сортировки слиянием.",
            next: 28
        },
        {
            codeP: `import java.util.Arrays;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                int[] ${N[1]} = {12, 11, 13, 5, 6, 7};
                System.out.println("Исходный массив: " + Arrays.toString(${N[1]}));
                ${N[2]}(${N[1]}, 0, ${N[1]}.length - 1);
                System.out.println("Отсортированный массив: " + Arrays.toString(${N[1]}));
            }
        
            public static void ${N[2]}(int[] ${N[3]}, int ${N[4]}, int ${N[5]}) {
                if (${N[4]} < ${N[5]}) {
                    int ${N[6]} = ${N[7]}(${N[3]}, ${N[4]}, ${N[5]});
                    ${N[2]}(${N[3]}, ${N[4]}, ${N[6]} - 1);
                    ${N[2]}(${N[3]}, ${N[6]} + 1, ${N[5]});
                }
            }
        
            public static int ${N[7]}(int[] ${N[3]}, int ${N[4]}, int ${N[5]}) {
                int ${N[8]} = ${N[3]}[${N[5]}];
                int ${N[9]} = (${N[4]} - 1);
                for (int ${N[10]} = ${N[4]}; ${N[10]} < ${N[5]}; ${N[10]}++) {
                    if (${N[3]}[${N[10]}] < ${N[8]}) {
                        ${N[9]}++;
                        int ${N[11]} = ${N[3]}[${N[9]}];
                        ${N[3]}[${N[9]}] = ${N[3]}[${N[10]}];
                        ${N[3]}[${N[10]}] = ${N[11]};
                    }
                }
                int ${N[11]} = ${N[3]}[${N[9]} + 1];
                ${N[3]}[${N[9]} + 1] = ${N[3]}[${N[5]}];
                ${N[3]}[${N[5]}] = ${N[11]};
                return ${N[9]} + 1;
            }
        }`,
            description: "Программа, реализующая алгоритм быстрой сортировки.",
            next: 29
        },
        {
            codeP: `public class ${N[0]} {
            public static void main(String[] args) {
                int ${N[1]} = 3;
                ${N[2]}(${N[1]}, 'A', 'C', 'B');
            }
        
            public static void ${N[2]}(int ${N[3]}, char ${N[4]}, char ${N[5]}, char ${N[6]}) {
                if (${N[3]} == 1) {
                    System.out.println("Переместить диск 1 с " + ${N[4]} + " на " + ${N[5]});
                    return;
                }
                ${N[2]}(${N[3]} - 1, ${N[4]}, ${N[6]}, ${N[5]});
                System.out.println("Переместить диск " + ${N[3]} + " с " + ${N[4]} + " на " + ${N[5]});
                ${N[2]}(${N[3]} - 1, ${N[6]}, ${N[5]}, ${N[4]});
            }
        }`,
            description: "Программа, решающая задачу 'Ханойские башни' с использованием рекурсии.",
            next: 30
        },
        {
            codeP: `public class ${N[0]} {
            public static void main(String[] args) {
                String ${N[1]} = "ABABDABACDABABCABAB";
                String ${N[2]} = "ABAB";
                ${N[3]}(${N[2]}, ${N[1]});
            }
        
            public static void ${N[3]}(String ${N[4]}, String ${N[5]}) {
                int[] ${N[6]} = new int[${N[4]}.length()];
                ${N[7]}(${N[4]}, ${N[6]});
                int ${N[8]} = 0, ${N[9]} = 0;
                while (${N[8]} < ${N[5]}.length()) {
                    if (${N[4]}.charAt(${N[9]}) == ${N[5]}.charAt(${N[8]})) {
                        ${N[9]}++;
                        ${N[8]}++;
                    }
                    if (${N[9]} == ${N[4]}.length()) {
                        System.out.println("Найдено на позиции: " + (${N[8]} - ${N[9]}));
                        ${N[9]} = ${N[6]}[${N[9]} - 1];
                    } else if (${N[8]} < ${N[5]}.length() && ${N[4]}.charAt(${N[9]}) != ${N[5]}.charAt(${N[8]})) {
                        if (${N[9]} != 0) {
                            ${N[9]} = ${N[6]}[${N[9]} - 1];
                        } else {
                            ${N[8]}++;
                        }
                    }
                }
            }
        
            public static void ${N[7]}(String ${N[4]}, int[] ${N[6]}) {
                int ${N[10]} = 0;
                for (int ${N[11]} = 1; ${N[11]} < ${N[4]}.length();) {
                    if (${N[4]}.charAt(${N[11]}) == ${N[4]}.charAt(${N[10]})) {
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
            codeP: `import java.io.*;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                String ${N[1]} = "Пример текста";
                try (BufferedWriter ${N[2]} = new BufferedWriter(new FileWriter("output.txt"))) {
                    ${N[2]}.write(${N[1]});
                } catch (IOException ${N[3]}) {
                    ${N[3]}.printStackTrace();
                }
                try (BufferedReader ${N[4]} = new BufferedReader(new FileReader("output.txt"))) {
                    String ${N[5]};
                    while ((${N[5]} = ${N[4]}.readLine()) != null) {
                        System.out.println(${N[5]});
                    }
                } catch (IOException ${N[3]}) {
                    ${N[3]}.printStackTrace();
                }
            }
        }`,
            description: "Программа для записи и чтения текста из файла.",
            next: 32
        },
        {
            codeP: `import java.io.*;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                try (BufferedReader ${N[1]} = new BufferedReader(new FileReader("input.txt"))) {
                    int ${N[2]} = 0;
                    String ${N[3]};
                    while ((${N[3]} = ${N[1]}.readLine()) != null) {
                        ${N[2]} += ${N[3]}.split("\\\\s+").length;
                    }
                    System.out.println("Слов: " + ${N[2]});
                } catch (IOException ${N[4]}) {
                    ${N[4]}.printStackTrace();
                }
            }
        }`,
            description: "Программа для подсчета количества слов в файле.",
            next: 33
        },
        {
            codeP: `import java.io.*;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                String ${N[1]} = "";
                try (BufferedReader ${N[2]} = new BufferedReader(new FileReader("input.txt"))) {
                    String ${N[3]};
                    while ((${N[3]} = ${N[2]}.readLine()) != null) {
                        for (String ${N[4]} : ${N[3]}.split("\\\\s+")) {
                            if (${N[4]}.length() > ${N[1]}.length()) {
                                ${N[1]} = ${N[4]};
                            }
                        }
                    }
                    System.out.println("Самое длинное слово: " + ${N[1]});
                } catch (IOException ${N[5]}) {
                    ${N[5]}.printStackTrace();
                }
            }
        }`,
            description: "Программа для поиска самого длинного слова в файле.",
            next: 34
        },
        {
            codeP: `import java.net.*;
        import java.io.*;
        
        public class ${N[0]} {
            public static void main(String[] args) throws Exception {
                URL ${N[1]} = new URL("https://example.com");
                HttpURLConnection ${N[2]} = (HttpURLConnection) ${N[1]}.openConnection();
                ${N[2]}.setRequestMethod("GET");
                
                try (BufferedReader ${N[3]} = new BufferedReader(
                    new InputStreamReader(${N[2]}.getInputStream()))) {
                    
                    String ${N[4]};
                    while ((${N[4]} = ${N[3]}.readLine()) != null) {
                        System.out.println(${N[4]});
                    }
                }
            }
        }`,
            description: "Программа для выполнения HTTP GET-запроса.",
            next: 35
        },
        {
            codeP: `import com.google.gson.*;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                String ${N[1]} = "{\\"name\\":\\"Alice\\",\\"age\\":30}";
                JsonObject ${N[2]} = JsonParser.parseString(${N[1]}).getAsJsonObject();
                System.out.println("Имя: " + ${N[2]}.get("name").getAsString());
                System.out.println("Возраст: " + ${N[2]}.get("age").getAsInt());
            }
        }`,
            description: "Программа для парсинга JSON-строки.",
            next: 36
        },
        {
            codeP: `import java.util.HashMap;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                HashMap<String, Integer> ${N[1]} = new HashMap<>();
                ${N[1]}.put("Alice", 25);
                ${N[1]}.put("Bob", 30);
                System.out.println("Alice: " + ${N[1]}.get("Alice"));
                ${N[1]}.remove("Bob");
                System.out.println("Содержимое таблицы: " + ${N[1]});
            }
        }`,
            description: "Программа, реализующая хэш-таблицу с методами put, get и remove.",
            next: 37
        },
        {
            codeP: `class ${N[0]} {
            int ${N[1]};
            ${N[0]} ${N[2]}, ${N[3]};
        
            ${N[0]}(int ${N[4]}) {
                ${N[1]} = ${N[4]};
                ${N[2]} = ${N[3]} = null;
            }
        }
        
        public class ${N[5]} {
            ${N[0]} ${N[6]};
        
            public void ${N[7]}(int ${N[4]}) {
                ${N[6]} = ${N[8]}(${N[6]}, ${N[4]});
            }
        
            private ${N[0]} ${N[8]}(${N[0]} ${N[9]}, int ${N[4]}) {
                if (${N[9]} == null) {
                    ${N[9]} = new ${N[0]}(${N[4]});
                    return ${N[9]};
                }
                if (${N[4]} < ${N[9]}.${N[1]}) {
                    ${N[9]}.${N[2]} = ${N[8]}(${N[9]}.${N[2]}, ${N[4]});
                } else if (${N[4]} > ${N[9]}.${N[1]}) {
                    ${N[9]}.${N[3]} = ${N[8]}(${N[9]}.${N[3]}, ${N[4]});
                }
                return ${N[9]};
            }
        
            public void ${N[10]}() {
                ${N[11]}(${N[6]});
            }
        
            private void ${N[11]}(${N[0]} ${N[9]}) {
                if (${N[9]} != null) {
                    ${N[11]}(${N[9]}.${N[2]});
                    System.out.print(${N[9]}.${N[1]} + " ");
                    ${N[11]}(${N[9]}.${N[3]});
                }
            }
        
            public static void main(String[] args) {
                ${N[5]} ${N[12]} = new ${N[5]}();
                ${N[12]}.${N[7]}(50);
                ${N[12]}.${N[7]}(30);
                ${N[12]}.${N[7]}(20);
                ${N[12]}.${N[7]}(40);
                ${N[12]}.${N[7]}(70);
                ${N[12]}.${N[7]}(60);
                ${N[12]}.${N[7]}(80);
                ${N[12]}.${N[10]}();
            }
        }`,
            description: "Программа, реализующая бинарное дерево с методами вставки и обхода.",
            next: 38
        },
        {
            codeP: `class ${N[0]} {
            int ${N[1]};
            ${N[0]} ${N[2]}, ${N[3]};
        
            ${N[0]}(int ${N[4]}) {
                ${N[1]} = ${N[4]};
                ${N[2]} = ${N[3]} = null;
            }
        }
        
        public class ${N[5]} {
            ${N[0]} ${N[6]};
        
            public void ${N[7]}(int ${N[4]}) {
                ${N[6]} = ${N[8]}(${N[6]}, ${N[4]});
            }
        
            private ${N[0]} ${N[8]}(${N[0]} ${N[9]}, int ${N[4]}) {
                if (${N[9]} == null) {
                    ${N[9]} = new ${N[0]}(${N[4]});
                    return ${N[9]};
                }
                if (${N[4]} < ${N[9]}.${N[1]}) {
                    ${N[9]}.${N[2]} = ${N[8]}(${N[9]}.${N[2]}, ${N[4]});
                } else if (${N[4]} > ${N[9]}.${N[1]}) {
                    ${N[9]}.${N[3]} = ${N[8]}(${N[9]}.${N[3]}, ${N[4]});
                }
                return ${N[9]};
            }
        
            public void ${N[10]}() {
                System.out.println("In-order обход:");
                ${N[11]}(${N[6]});
                System.out.println("\\nPre-order обход:");
                ${N[12]}(${N[6]});
                System.out.println("\\nPost-order обход:");
                ${N[13]}(${N[6]});
            }
        
            private void ${N[11]}(${N[0]} ${N[9]}) {
                if (${N[9]} != null) {
                    ${N[11]}(${N[9]}.${N[2]});
                    System.out.print(${N[9]}.${N[1]} + " ");
                    ${N[11]}(${N[9]}.${N[3]});
                }
            }
        
            private void ${N[12]}(${N[0]} ${N[9]}) {
                if (${N[9]} != null) {
                    System.out.print(${N[9]}.${N[1]} + " ");
                    ${N[12]}(${N[9]}.${N[2]});
                    ${N[12]}(${N[9]}.${N[3]});
                }
            }
        
            private void ${N[13]}(${N[0]} ${N[9]}) {
                if (${N[9]} != null) {
                    ${N[13]}(${N[9]}.${N[2]});
                    ${N[13]}(${N[9]}.${N[3]});
                    System.out.print(${N[9]}.${N[1]} + " ");
                }
            }
        
            public static void main(String[] args) {
                ${N[5]} ${N[14]} = new ${N[5]}();
                ${N[14]}.${N[7]}(50);
                ${N[14]}.${N[7]}(30);
                ${N[14]}.${N[7]}(20);
                ${N[14]}.${N[7]}(40);
                ${N[14]}.${N[7]}(70);
                ${N[14]}.${N[7]}(60);
                ${N[14]}.${N[7]}(80);
                ${N[14]}.${N[10]}();
            }
        }`,
            description: "Программа, реализующая три способа обхода бинарного дерева.",
            next: 39
        },
        {
            codeP: `public class ${N[0]} {
            final static int ${N[1]} = 99999;
        
            void ${N[2]}(int[][] ${N[3]}) {
                int ${N[4]} = ${N[3]}.length;
                int[][] ${N[5]} = new int[${N[4]}][${N[4]}];
                for (int ${N[6]} = 0; ${N[6]} < ${N[4]}; ${N[6]}++) {
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
                ${N[9]}(${N[5]});
            }
        
            void ${N[9]}(int[][] ${N[5]}) {
                System.out.println("Кратчайшие пути:");
                for (int ${N[6]} = 0; ${N[6]} < ${N[5]}.length; ${N[6]}++) {
                    for (int ${N[7]} = 0; ${N[7]} < ${N[5]}[${N[6]}].length; ${N[7]}++) {
                        if (${N[5]}[${N[6]}][${N[7]}] == ${N[1]}) {
                            System.out.print("INF ");
                        } else {
                            System.out.print(${N[5]}[${N[6]}][${N[7]}] + " ");
                        }
                    }
                    System.out.println();
                }
            }
        
            public static void main(String[] args) {
                int[][] ${N[10]} = {
                    {0, 5, ${N[1]}, 10},
                    {${N[1]}, 0, 3, ${N[1]}},
                    {${N[1]}, ${N[1]}, 0, 1},
                    {${N[1]}, ${N[1]}, ${N[1]}, 0}
                };
                ${N[0]} ${N[11]} = new ${N[0]}();
                ${N[11]}.${N[2]}(${N[10]});
            }
        }`,
            description: "Программа, реализующая алгоритм Флойда-Уоршелла для поиска кратчайших путей.",
            next: 40
        },
        {
            codeP: `import java.util.*;
        
        class ${N[0]} implements Comparable<${N[0]}> {
            int ${N[1]}, ${N[2]}, ${N[3]};
        
            ${N[0]}(int ${N[4]}, int ${N[5]}, int ${N[6]}) {
                ${N[1]} = ${N[4]};
                ${N[2]} = ${N[5]};
                ${N[3]} = ${N[6]};
            }
        
            public int compareTo(${N[0]} ${N[7]}) {
                return this.${N[3]} - ${N[7]}.${N[3]};
            }
        }
        
        public class ${N[8]} {
            int[] ${N[9]}, ${N[10]};
        
            public void ${N[11]}(List<${N[0]}> ${N[12]}, int ${N[13]}) {
                Collections.sort(${N[12]});
                ${N[9]} = new int[${N[13]}];
                ${N[10]} = new int[${N[13]}];
                for (int ${N[14]} = 0; ${N[14]} < ${N[13]}; ${N[14]}++) {
                    ${N[9]}[${N[14]}] = ${N[14]};
                    ${N[10]}[${N[14]}] = 0;
                }
                List<${N[0]}> ${N[15]} = new ArrayList<>();
                for (${N[0]} ${N[16]} : ${N[12]}) {
                    int ${N[17]} = ${N[18]}(${N[16]}.${N[1]});
                    int ${N[19]} = ${N[18]}(${N[16]}.${N[2]});
                    if (${N[17]} != ${N[19]}) {
                        ${N[15]}.add(${N[16]});
                        ${N[20]}(${N[17]}, ${N[19]});
                    }
                }
                ${N[21]}(${N[15]});
            }
        
            private int ${N[18]}(int ${N[22]}) {
                if (${N[9]}[${N[22]}] != ${N[22]}) {
                    ${N[9]}[${N[22]}] = ${N[18]}(${N[9]}[${N[22]}]);
                }
                return ${N[9]}[${N[22]}];
            }
        
            private void ${N[20]}(int ${N[23]}, int ${N[24]}) {
                int ${N[25]} = ${N[18]}(${N[23]});
                int ${N[26]} = ${N[18]}(${N[24]});
                if (${N[10]}[${N[25]}] > ${N[10]}[${N[26]}]) {
                    ${N[9]}[${N[26]}] = ${N[25]};
                } else if (${N[10]}[${N[25]}] < ${N[10]}[${N[26]}]) {
                    ${N[9]}[${N[25]}] = ${N[26]};
                } else {
                    ${N[9]}[${N[26]}] = ${N[25]};
                    ${N[10]}[${N[25]}]++;
                }
            }
        
            private void ${N[21]}(List<${N[0]}> ${N[15]}) {
                System.out.println("Ребра минимального остовного дерева:");
                for (${N[0]} ${N[16]} : ${N[15]}) {
                    System.out.println(${N[16]}.${N[1]} + " - " + ${N[16]}.${N[2]} + ": " + ${N[16]}.${N[3]});
                }
            }
        
            public static void main(String[] args) {
                List<${N[0]}> ${N[27]} = new ArrayList<>();
                ${N[27]}.add(new ${N[0]}(0, 1, 10));
                ${N[27]}.add(new ${N[0]}(0, 2, 6));
                ${N[27]}.add(new ${N[0]}(0, 3, 5));
                ${N[27]}.add(new ${N[0]}(1, 3, 15));
                ${N[27]}.add(new ${N[0]}(2, 3, 4));
        
                ${N[8]} ${N[28]} = new ${N[8]}();
                ${N[28]}.${N[11]}(${N[27]}, 4);
            }
        }`,
            description: "Программа, реализующая алгоритм Краскала для поиска минимального остовного дерева.",
            next: 41
        },
        {
            codeP: `class ${N[0]} extends Thread {
            public void run() {
                System.out.println("Поток " + Thread.currentThread().getName() + " запущен.");
            }
        
            public static void main(String[] args) {
                for (int ${N[1]} = 0; ${N[1]} < 5; ${N[1]}++) {
                    ${N[0]} ${N[2]} = new ${N[0]}();
                    ${N[2]}.start();
                }
            }
        }`,
            description: "Программа, создающая несколько потоков и выполняющая в них задачи.",
            next: 42
        },
        {
            codeP: `class ${N[0]} {
            private int ${N[1]} = 0;
        
            public synchronized void ${N[2]}() {
                ${N[1]}++;
            }
        
            public int ${N[3]}() {
                return ${N[1]};
            }
        }
        
        public class ${N[4]} {
            public static void main(String[] args) {
                ${N[0]} ${N[5]} = new ${N[0]}();
                Thread ${N[6]} = new Thread(() -> {
                    for (int ${N[7]} = 0; ${N[7]} < 1000; ${N[7]}++) {
                        ${N[5]}.${N[2]}();
                    }
                });
                Thread ${N[8]} = new Thread(() -> {
                    for (int ${N[7]} = 0; ${N[7]} < 1000; ${N[7]}++) {
                        ${N[5]}.${N[2]}();
                    }
                });
                ${N[6]}.start();
                ${N[8]}.start();
                try {
                    ${N[6]}.join();
                    ${N[8]}.join();
                } catch (InterruptedException ${N[9]}) {
                    ${N[9]}.printStackTrace();
                }
                System.out.println("Итоговое значение: " + ${N[5]}.${N[3]}());
            }
        }`,
            description: "Программа, демонстрирующая синхронизацию потоков с использованием synchronized.",
            next: 43
        },
        {
            codeP: `import java.util.concurrent.ExecutorService;
        import java.util.concurrent.Executors;
        
        public class ${N[0]} {
            public static void main(String[] args) {
                ExecutorService ${N[1]} = Executors.newFixedThreadPool(5);
                for (int ${N[2]} = 0; ${N[2]} < 10; ${N[2]}++) {
                    int ${N[3]} = ${N[2]};
                    ${N[1]}.submit(() -> {
                        System.out.println("Задача " + ${N[3]} + " выполняется в потоке " + Thread.currentThread().getName());
                    });
                }
                ${N[1]}.shutdown();
            }
        }`,
            description: "Программа, использующая пул потоков для выполнения задач.",
            next: 44
        },
        {
            codeP: `import java.util.LinkedList;
        import java.util.Queue;
        
        class ${N[0]} {
            private static final Queue<Integer> ${N[1]} = new LinkedList<>();
            private static final int ${N[2]} = 5;
        
            public static void main(String[] args) {
                Thread ${N[3]} = new Thread(() -> {
                    for (int ${N[4]} = 0; ${N[4]} < 10; ${N[4]}++) {
                        synchronized (${N[1]}) {
                            while (${N[1]}.size() == ${N[2]}) {
                                try {
                                    ${N[1]}.wait();
                                } catch (InterruptedException ${N[5]}) {
                                    ${N[5]}.printStackTrace();
                                }
                            }
                            ${N[1]}.add(${N[4]});
                            System.out.println("Производитель добавил: " + ${N[4]});
                            ${N[1]}.notifyAll();
                        }
                    }
                });
        
                Thread ${N[6]} = new Thread(() -> {
                    for (int ${N[4]} = 0; ${N[4]} < 10; ${N[4]}++) {
                        synchronized (${N[1]}) {
                            while (${N[1]}.isEmpty()) {
                                try {
                                    ${N[1]}.wait();
                                } catch (InterruptedException ${N[5]}) {
                                    ${N[5]}.printStackTrace();
                                }
                            }
                            int ${N[7]} = ${N[1]}.poll();
                            System.out.println("Потребитель забрал: " + ${N[7]});
                            ${N[1]}.notifyAll();
                        }
                    }
                });
        
                ${N[3]}.start();
                ${N[6]}.start();
            }
        }`,
            description: "Программа, реализующая паттерн 'производитель-потребитель' с использованием многопоточности.",
            next: 45
        },
        {
            codeP: `public class ${N[0]} {
            static final Object ${N[1]} = new Object();
            static final Object ${N[2]} = new Object();
        
            public static void main(String[] args) {
                Thread ${N[3]} = new Thread(() -> {
                    synchronized (${N[1]}) {
                        System.out.println("Поток 1: Захватил ${N[1]}");
                        try { Thread.sleep(100); } catch (InterruptedException ${N[4]}) {}
                        System.out.println("Поток 1: Ожидает ${N[2]}");
                        synchronized (${N[2]}) {
                            System.out.println("Поток 1: Захватил ${N[2]}");
                        }
                    }
                });
        
                Thread ${N[5]} = new Thread(() -> {
                    synchronized (${N[2]}) {
                        System.out.println("Поток 2: Захватил ${N[2]}");
                        try { Thread.sleep(100); } catch (InterruptedException ${N[4]}) {}
                        System.out.println("Поток 2: Ожидает ${N[1]}");
                        synchronized (${N[1]}) {
                            System.out.println("Поток 2: Захватил ${N[1]}");
                        }
                    }
                });
        
                ${N[3]}.start();
                ${N[5]}.start();
            }
        }`,
            description: "Программа, демонстрирующая ситуацию deadlock (взаимной блокировки).",
            next: 46
        },
        {
            codeP: `class ${N[0]} {
            private double ${N[1]};
        
            public ${N[0]}(double ${N[2]}) {
                ${N[1]} = ${N[2]};
            }
        
            public void ${N[3]}(double ${N[4]}) {
                ${N[1]} += ${N[4]};
            }
        
            public void ${N[5]}(double ${N[4]}) {
                ${N[1]} -= ${N[4]};
            }
        
            public double ${N[6]}() {
                return ${N[1]};
            }
        
            public static void main(String[] args) {
                ${N[0]} ${N[7]} = new ${N[0]}(1000);
                ${N[7]}.${N[3]}(500);
                ${N[7]}.${N[5]}(300);
                System.out.println("Баланс: " + ${N[7]}.${N[6]}());
            }
        }`,
            description: "Класс 'Счет' с методами для пополнения, снятия и получения баланса.",
            next: 47
        },
        {
            codeP: `class ${N[0]} {
            public void ${N[1]}() {
                System.out.println("Животное издает звук.");
            }
        }
        
        class ${N[2]} extends ${N[0]} {
            @Override
            public void ${N[1]}() {
                System.out.println("Гав!");
            }
        }
        
        class ${N[3]} extends ${N[0]} {
            @Override
            public void ${N[1]}() {
                System.out.println("Мяу!");
            }
        }
        
        public class ${N[4]} {
            public static void main(String[] args) {
                ${N[0]} ${N[5]} = new ${N[2]}();
                ${N[0]} ${N[6]} = new ${N[3]}();
                ${N[5]}.${N[1]}();
                ${N[6]}.${N[1]}();
            }
        }`,
            description: "Программа, демонстрирующая наследование и переопределение методов.",
            next: 48
        },
        {
            codeP: `interface ${N[0]} {
            void ${N[1]}();
        }
        
        class ${N[2]} implements ${N[0]} {
            public void ${N[1]}() {
                System.out.println("Рисуем круг.");
            }
        }
        
        class ${N[3]} implements ${N[0]} {
            public void ${N[1]}() {
                System.out.println("Рисуем прямоугольник.");
            }
        }
        
        public class ${N[4]} {
            public static void main(String[] args) {
                ${N[0]} ${N[5]} = new ${N[2]}();
                ${N[0]} ${N[6]} = new ${N[3]}();
                ${N[5]}.${N[1]}();
                ${N[6]}.${N[1]}();
            }
        }`,
            description: "Программа, демонстрирующая использование интерфейсов.",
            next: 49
        },
        {
            codeP: `class ${N[0]} {
            public void ${N[1]}() {
                System.out.println("Животное издает звук.");
            }
        }
        
        class ${N[2]} extends ${N[0]} {
            @Override
            public void ${N[1]}() {
                System.out.println("Гав!");
            }
        }
        
        class ${N[3]} extends ${N[0]} {
            @Override
            public void ${N[1]}() {
                System.out.println("Мяу!");
            }
        }
        
        public class ${N[4]} {
            public static void main(String[] args) {
                ${N[0]} ${N[5]} = new ${N[2]}();
                ${N[0]} ${N[6]} = new ${N[3]}();
                ${N[5]}.${N[1]}();
                ${N[6]}.${N[1]}();
            }
        }`,
            description: "Программа, демонстрирующая полиморфизм через переопределение методов.",
            next: 50
        },
        {
            codeP: `class ${N[0]} {
            private static ${N[0]} ${N[1]};
        
            private ${N[0]}() {}
        
            public static ${N[0]} ${N[2]}() {
                if (${N[1]} == null) {
                    ${N[1]} = new ${N[0]}();
                }
                return ${N[1]};
            }
        
            public void ${N[3]}() {
                System.out.println("Синглтон работает.");
            }
        
            public static void main(String[] args) {
                ${N[0]} ${N[4]} = ${N[0]}.${N[2]}();
                ${N[4]}.${N[3]}();
            }
        }`,
            description: "Программа, реализующая шаблон проектирования 'Синглтон'.",
            next: null
        }







    ];

}