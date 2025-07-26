window.examples = [

// Задача 1. Hello, World!
{
    code: `public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }`,
    description: "Простейший пример программы, выводящей 'Hello, World!' на консоль.",
    next: 1
},

// Задача 2. Сумма двух чисел
{
    code: `import java.util.Scanner;

    public class SumTwoNumbers {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите первое число: ");
            int num1 = scanner.nextInt();
            System.out.print("Введите второе число: ");
            int num2 = scanner.nextInt();
            System.out.println("Сумма: " + (num1 + num2));
        }
    }`,
    description: "Программа, которая принимает два числа и выводит их сумму.",
    next: 2
},

// Задача 3. Четное или нечетное
{
    code: `import java.util.Scanner;

    public class EvenOrOdd {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите число: ");
            int num = scanner.nextInt();
            if (num % 2 == 0) {
                System.out.println(num + " - четное число.");
            } else {
                System.out.println(num + " - нечетное число.");
            }
        }
    }`,
    description: "Программа, которая проверяет, является ли число четным или нечетным.",
    next: 3
},

// Задача 4. Факториал числа
{
    code: `import java.util.Scanner;

    public class Factorial {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите число: ");
            int num = scanner.nextInt();
            int factorial = 1;
            for (int i = 1; i <= num; i++) {
                factorial *= i;
            }
            System.out.println("Факториал " + num + " = " + factorial);
        }
    }`,
    description: "Программа, которая вычисляет факториал числа.",
    next: 4
},

// Задача 5. Таблица умножения
{
    code: `import java.util.Scanner;

    public class MultiplicationTable {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите число для таблицы умножения: ");
            int num = scanner.nextInt();
            for (int i = 1; i <= 10; i++) {
                System.out.println(num + " x " + i + " = " + (num * i));
            }
        }
    }`,
    description: "Программа, которая выводит таблицу умножения для числа, введенного пользователем.",
    next: 5
},

// Задача 6. Проверка палиндрома
{
    code: `import java.util.Scanner;

    public class PalindromeCheck {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите строку: ");
            String input = scanner.nextLine();
            String reverse = new StringBuilder(input).reverse().toString();
            if (input.equals(reverse)) {
                System.out.println(input + " - палиндром.");
            } else {
                System.out.println(input + " - не палиндром.");
            }
        }
    }`,
    description: "Программа, которая проверяет, является ли строка палиндромом.",
    next: 6
},

// Задача 7. Наибольший общий делитель (НОД)
{
    code: `import java.util.Scanner;

    public class GCD {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите первое число: ");
            int a = scanner.nextInt();
            System.out.print("Введите второе число: ");
            int b = scanner.nextInt();
            while (b != 0) {
                int temp = b;
                b = a % b;
                a = temp;
            }
            System.out.println("Наибольший общий делитель: " + a);
        }
    }`,
    description: "Программа, которая находит наибольший общий делитель двух чисел.",
    next: 7
},

// Задача 8. Простые числа
{
    code: `import java.util.Scanner;

    public class PrimeCheck {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите число: ");
            int num = scanner.nextInt();
            boolean isPrime = true;
            if (num <= 1) isPrime = false;
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                System.out.println(num + " - простое число.");
            } else {
                System.out.println(num + " - не простое число.");
            }
        }
    }`,
    description: "Программа, которая проверяет, является ли число простым.",
    next: 8
},

// Задача 9. Сумма цифр числа
{
    code: `import java.util.Scanner;

    public class SumOfDigits {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите число: ");
            int num = scanner.nextInt();
            int sum = 0;
            while (num != 0) {
                sum += num % 10; // добавляем последнюю цифру к сумме
                num /= 10; // убираем последнюю цифру
            }
            System.out.println("Сумма цифр: " + sum);
        }
    }`,
    description: "Программа, которая вычисляет сумму цифр числа.",
    next: 9
},

// Задача 10. Переворот строки
{
    code: `import java.util.Scanner;

    public class ReverseString {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите строку: ");
            String input = scanner.nextLine();
            String reversed = new StringBuilder(input).reverse().toString();
            System.out.println("Перевернутая строка: " + reversed);
        }
    }`,
    description: "Программа, которая переворачивает строку.",
    next: 11
},

// Задача 11. Поиск минимального и максимального элемента в массиве
{
    code: `import java.util.Scanner;

    public class MinMaxInArray {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите размер массива: ");
            int n = scanner.nextInt();
            int[] array = new int[n];
            System.out.println("Введите элементы массива:");
            for (int i = 0; i < n; i++) {
                array[i] = scanner.nextInt();
            }
            int min = array[0];
            int max = array[0];
            for (int i = 1; i < n; i++) {
                if (array[i] < min) {
                    min = array[i];
                }
                if (array[i] > max) {
                    max = array[i];
                }
            }
            System.out.println("Минимальный элемент: " + min);
            System.out.println("Максимальный элемент: " + max);
        }
    }`,
    description: "Программа, которая находит минимальный и максимальный элементы в массиве.",
    next: 12
},

// Задача 12. Сортировка массива
{
    code: `public class BubbleSort {
        public static void main(String[] args) {
            int[] array = {64, 34, 25, 12, 22, 11, 90};
            int n = array.length;
            for (int i = 0; i < n - 1; i++) {
                for (int j = 0; j < n - i - 1; j++) {
                    if (array[j] > array[j + 1]) {
                        // меняем элементы местами
                        int temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
            System.out.println("Отсортированный массив: ");
            for (int num : array) {
                System.out.print(num + " ");
            }
        }
    }`,
    description: "Программа, которая сортирует массив чисел (пузырьковая сортировка).",
    next: 13
},

// Задача 13. Бинарный поиск
{
    code: `import java.util.Arrays;

    public class BinarySearch {
        public static void main(String[] args) {
            int[] array = {2, 3, 4, 10, 40};
            int key = 10;
            int result = binarySearch(array, key);
            if (result == -1) {
                System.out.println("Элемент не найден.");
            } else {
                System.out.println("Элемент найден на индексе: " + result);
            }
        }

        public static int binarySearch(int[] array, int key) {
            int left = 0;
            int right = array.length - 1;
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (array[mid] == key) {
                    return mid;
                }
                if (array[mid] < key) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return -1; // элемент не найден
        }
    }`,
    description: "Программа, которая реализует бинарный поиск в отсортированном массиве.",
    next: 14
},

// Задача 14. Числа Фибоначчи
{
    code: `import java.util.Scanner;

    public class Fibonacci {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите количество чисел Фибоначчи: ");
            int n = scanner.nextInt();
            int a = 0, b = 1;
            System.out.print("Числа Фибоначчи: " + a + " " + b);
            for (int i = 2; i < n; i++) {
                int next = a + b;
                System.out.print(" " + next);
                a = b;
                b = next;
            }
        }
    }`,
    description: "Программа, которая выводит первые `n` чисел Фибоначчи.",
    next: 15
},

// Задача 15. Проверка на анаграмму
{
    code: `import java.util.Arrays;
    import java.util.Scanner;

    public class AnagramCheck {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите первое слово: ");
            String str1 = scanner.nextLine();
            System.out.print("Введите второе слово: ");
            String str2 = scanner.nextLine();
            char[] charArray1 = str1.toCharArray();
            char[] charArray2 = str2.toCharArray();
            Arrays.sort(charArray1);
            Arrays.sort(charArray2);
            boolean isAnagram = Arrays.equals(charArray1, charArray2);
            if (isAnagram) {
                System.out.println("Слова являются анаграммами.");
            } else {
                System.out.println("Слова не являются анаграммами.");
            }
        }
    }`,
    description: "Программа, которая проверяет, являются ли две строки анаграммами.",
    next: 16
},

// Задача 16. Подсчет гласных и согласных
{
    code: `import java.util.Scanner;

    public class VowelConsonantCount {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите строку: ");
            String input = scanner.nextLine();
            int vowels = 0, consonants = 0;
            for (char ch : input.toCharArray()) {
                if (Character.isLetter(ch)) {
                    if ("AEIOUaeiou".indexOf(ch) != -1) {
                        vowels++;
                    } else {
                        consonants++;
                    }
                }
            }
            System.out.println("Количество гласных: " + vowels);
            System.out.println("Количество согласных: " + consonants);
        }
    }`,
    description: "Программа, которая подсчитывает количество гласных и согласных в строке.",
    next: 17
},

// Задача 17. Удаление дубликатов из массива
{
    code: `import java.util.HashSet;
    import java.util.Scanner;

    public class RemoveDuplicates {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите количество элементов: ");
            int n = scanner.nextInt();
            int[] array = new int[n];
            System.out.println("Введите элементы:");
            for (int i = 0; i < n; i++) {
                array[i] = scanner.nextInt();
            }
            HashSet<Integer> set = new HashSet<>();
            for (int num : array) {
                set.add(num);
            }
            System.out.println("Массив без дубликатов: " + set);
        }
    }`,
    description: "Программа, которая удаляет дубликаты из массива.",
    next: 18
},

// Задача 18. Поиск второго по величине элемента
{
    code: `import java.util.Scanner;

    public class SecondLargest {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите количество элементов: ");
            int n = scanner.nextInt();
            int[] array = new int[n];
            System.out.println("Введите элементы:");
            for (int i = 0; i < n; i++) {
                array[i] = scanner.nextInt();
            }
            int largest = Integer.MIN_VALUE;
            int secondLargest = Integer.MIN_VALUE;
            for (int num : array) {
                if (num > largest) {
                    secondLargest = largest;
                    largest = num;
                } else if (num > secondLargest && num < largest) {
                    secondLargest = num;
                }
            }
            if (secondLargest == Integer.MIN_VALUE) {
                System.out.println("Нету второго по величине элемента.");
            } else {
                System.out.println("Второй по величине элемент: " + secondLargest);
            }
        }
    }`,
    description: "Программа, которая находит второй по величине элемент в массиве.",
    next: 19
},

// Задача 19. Проверка на простое число (оптимизация)
{
    code: `import java.util.Scanner;

    public class OptimizedPrimeCheck {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите число: ");
            int num = scanner.nextInt();
            boolean isPrime = true;
            if (num <= 1) isPrime = false;
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                System.out.println(num + " - простое число.");
            } else {
                System.out.println(num + " - не простое число.");
            }
        }
    }`,
    description: "Оптимизированная программа для проверки простого числа.",
    next: 20
},

// Задача 20. Шифр Цезаря
{
    code: `import java.util.Scanner;

    public class CaesarCipher {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введите текст: ");
            String text = scanner.nextLine();
            System.out.print("Введите сдвиг: ");
            int shift = scanner.nextInt();
            StringBuilder cipherText = new StringBuilder();
            for (char ch : text.toCharArray()) {
                if (Character.isLetter(ch)) {
                    char base = Character.isLowerCase(ch) ? 'a' : 'A';
                    cipherText.append((char) ((ch + shift - base) % 26 + base));
                } else {
                    cipherText.append(ch);
                }
            }
            System.out.println("Шифрованный текст: " + cipherText);
        }
    }`,
    description: "Программа, которая шифрует текст с помощью шифра Цезаря.",
    next: 21
},

// Задача 21. Реализация стека
{
    code: `import java.util.Stack;

    public class StackImplementation {
        public static void main(String[] args) {
            Stack<Integer> stack = new Stack<>();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            System.out.println("Элемент на вершине стека: " + stack.peek());
            System.out.println("Удаляем элемент: " + stack.pop());
            System.out.println("Элемент на вершине стека после удаления: " + stack.peek());
        }
    }`,
    description: "Программа, реализующая структуру данных 'стек' с методами push, pop и peek.",
    next: 22
},

// Задача 22. Реализация очереди
{
    code: `import java.util.LinkedList;
    import java.util.Queue;

    public class QueueImplementation {
        public static void main(String[] args) {
            Queue<Integer> queue = new LinkedList<>();
            queue.add(1);
            queue.add(2);
            queue.add(3);
            System.out.println("Первый элемент в очереди: " + queue.peek());
            System.out.println("Удаляем элемент: " + queue.poll());
            System.out.println("Первый элемент в очереди после удаления: " + queue.peek());
        }
    }`,
    description: "Программа, реализующая структуру данных 'очередь' с методами enqueue, dequeue и peek.",
    next: 23
},

// Задача 23. Реализация связного списка
{
    code: `class Node {
        int data;
        Node next;
        Node(int d) {
            data = d;
            next = null;
        }
    }

    public class LinkedList {
        Node head;

        public void add(int data) {
            Node newNode = new Node(data);
            if (head == null) {
                head = newNode;
                return;
            }
            Node last = head;
            while (last.next != null) {
                last = last.next;
            }
            last.next = newNode;
        }

        public void print() {
            Node current = head;
            while (current != null) {
                System.out.print(current.data + " ");
                current = current.next;
            }
            System.out.println();
        }

        public static void main(String[] args) {
            LinkedList list = new LinkedList();
            list.add(1);
            list.add(2);
            list.add(3);
            list.print();
        }
    }`,
    description: "Программа, реализующая односвязный список с методами add и print.",
    next: 24
},

// Задача 24. Поиск в глубину (DFS)
{
    code: `import java.util.*;

    public class Graph {
        private final Map<Integer, List<Integer>> adjList = new HashMap<>();

        public void addEdge(int v, int w) {
            adjList.computeIfAbsent(v, k -> new ArrayList<>()).add(w);
            adjList.computeIfAbsent(w, k -> new ArrayList<>()).add(v); // для неориентированного графа
        }

        public void dfs(int start) {
            Set<Integer> visited = new HashSet<>();
            dfsHelper(start, visited);
        }

        private void dfsHelper(int v, Set<Integer> visited) {
            visited.add(v);
            System.out.print(v + " ");
            for (int neighbor : adjList.getOrDefault(v, Collections.emptyList())) {
                if (!visited.contains(neighbor)) {
                    dfsHelper(neighbor, visited);
                }
            }
        }

        public static void main(String[] args) {
            Graph g = new Graph();
            g.addEdge(1, 2);
            g.addEdge(1, 3);
            g.addEdge(2, 4);
            g.addEdge(3, 5);
            System.out.println("Поиск в глубину начиная с 1:");
            g.dfs(1);
        }
    }`,
    description: "Программа, реализующая алгоритм поиска в глубину для обхода графа.",
    next: 25
},

// Задача 25. Поиск в ширину (BFS)
{
    code: `import java.util.*;

    public class Graph {
        private final Map<Integer, List<Integer>> adjList = new HashMap<>();

        public void addEdge(int v, int w) {
            adjList.computeIfAbsent(v, k -> new ArrayList<>()).add(w);
            adjList.computeIfAbsent(w, k -> new ArrayList<>()).add(v); // для неориентированного графа
        }

        public void bfs(int start) {
            Set<Integer> visited = new HashSet<>();
            Queue<Integer> queue = new LinkedList<>();
            visited.add(start);
            queue.add(start);
            while (!queue.isEmpty()) {
                int v = queue.poll();
                System.out.print(v + " ");
                for (int neighbor : adjList.getOrDefault(v, Collections.emptyList())) {
                    if (!visited.contains(neighbor)) {
                        visited.add(neighbor);
                        queue.add(neighbor);
                    }
                }
            }
        }

        public static void main(String[] args) {
            Graph g = new Graph();
            g.addEdge(1, 2);
            g.addEdge(1, 3);
            g.addEdge(2, 4);
            g.addEdge(3, 5);
            System.out.println("Поиск в ширину начиная с 1:");
            g.bfs(1);
        }
    }`,
    description: "Программа, реализующая алгоритм поиска в ширину для обхода графа.",
    next: 26
},

// Задача 26. Алгоритм Дейкстры
{
    code: `import java.util.*;

    public class Dijkstra {
        private final Map<Integer, List<Edge>> graph = new HashMap<>();

        static class Edge {
            int destination;
            int weight;

            Edge(int destination, int weight) {
                this.destination = destination;
                this.weight = weight;
            }
        }

        public void addEdge(int source, int destination, int weight) {
            graph.computeIfAbsent(source, k -> new ArrayList<>()).add(new Edge(destination, weight));
        }

        public void dijkstra(int start) {
            PriorityQueue<Edge> pq = new PriorityQueue<>(Comparator.comparingInt(edge -> edge.weight));
            Map<Integer, Integer> distances = new HashMap<>();
            for (Integer vertex : graph.keySet()) {
                distances.put(vertex, Integer.MAX_VALUE);
            }
            distances.put(start, 0);
            pq.add(new Edge(start, 0));

            while (!pq.isEmpty()) {
                Edge current = pq.poll();
                int currentDist = current.weight;
                List<Edge> edges = graph.getOrDefault(current.destination, Collections.emptyList());
                for (Edge edge : edges) {
                    int newDist = currentDist + edge.weight;
                    if (newDist < distances.get(edge.destination)) {
                        distances.put(edge.destination, newDist);
                        pq.add(new Edge(edge.destination, newDist));
                    }
                }
            }
            System.out.println("Расстояния от начальной вершины " + start + ": " + distances);
        }

        public static void main(String[] args) {
            Dijkstra dijkstra = new Dijkstra();
            dijkstra.addEdge(1, 2, 1);
            dijkstra.addEdge(1, 3, 4);
            dijkstra.addEdge(2, 3, 2);
            dijkstra.addEdge(3, 4, 1);
            System.out.println("Алгоритм Дейкстры:");
            dijkstra.dijkstra(1);
        }
    }`,
    description: "Программа, реализующая алгоритм Дейкстры для поиска кратчайшего пути в графе.",
    next: 27
},

// Задача 27. Сортировка слиянием (Merge Sort)
{
    code: `import java.util.Arrays;

    public class MergeSort {
        public static void main(String[] args) {
            int[] array = {12, 11, 13, 5, 6, 7};
            System.out.println("Несортированный массив: " + Arrays.toString(array));
            mergeSort(array);
            System.out.println("Отсортированный массив: " + Arrays.toString(array));
        }

        public static void mergeSort(int[] array) {
            if (array.length < 2) return;
            int mid = array.length / 2;
            int[] left = Arrays.copyOfRange(array, 0, mid);
            int[] right = Arrays.copyOfRange(array, mid, array.length);
            mergeSort(left);
            mergeSort(right);
            merge(array, left, right);
        }

        public static void merge(int[] array, int[] left, int[] right) {
            int i = 0, j = 0, k = 0;
            while (i < left.length && j < right.length) {
                if (left[i] <= right[j]) {
                    array[k++] = left[i++];
                } else {
                    array[k++] = right[j++];
                }
            }
            while (i < left.length) {
                array[k++] = left[i++];
            }
            while (j < right.length) {
                array[k++] = right[j++];
            }
        }
    }`,
    description: "Программа, реализующая алгоритм сортировки слиянием.",
    next: 28
},

// Задача 28. Быстрая сортировка (Quick Sort)
{
    code: `import java.util.Arrays;

    public class QuickSort {
        public static void main(String[] args) {
            int[] array = {12, 11, 13, 5, 6, 7};
            System.out.println("Несортированный массив: " + Arrays.toString(array));
            quickSort(array, 0, array.length - 1);
            System.out.println("Отсортированный массив: " + Arrays.toString(array));
        }

        public static void quickSort(int[] array, int low, int high) {
            if (low < high) {
                int pi = partition(array, low, high);
                quickSort(array, low, pi - 1);
                quickSort(array, pi + 1, high);
            }
        }

        public static int partition(int[] array, int low, int high) {
            int pivot = array[high];
            int i = (low - 1);
            for (int j = low; j < high; j++) {
                if (array[j] < pivot) {
                    i++;
                    int temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            int temp = array[i + 1];
            array[i + 1] = array[high];
            array[high] = temp;
            return i + 1;
        }
    }`,
    description: "Программа, реализующая алгоритм быстрой сортировки.",
    next: 29
},

// Задача 29. Ханойские башни
{
    code: `public class TowersOfHanoi {
        public static void main(String[] args) {
            int n = 3; // количество дисков
            solveHanoi(n, 'A', 'C', 'B'); // A, C, B - имена стержней
        }

        public static void solveHanoi(int n, char source, char target, char auxiliary) {
            if (n == 1) {
                System.out.println("Переместить диск 1 с " + source + " на " + target);
                return;
            }
            solveHanoi(n - 1, source, auxiliary, target);
            System.out.println("Переместить диск " + n + " с " + source + " на " + target);
            solveHanoi(n - 1, auxiliary, target, source);
        }
    }`,
    description: "Программа, которая решает задачу 'Ханойские башни' с использованием рекурсии.",
    next: 30
},

// Задача 30. Поиск подстроки (алгоритм Кнута-Морриса-Пратта)
{
    code: `public class KMP {
        public static void main(String[] args) {
            String text = "ABABDABACDABABCABAB";
            String pattern = "ABAB";
            KMPSearch(pattern, text);
        }

        public static void KMPSearch(String pattern, String text) {
            int M = pattern.length();
            int N = text.length();
            int[] lps = new int[M];
            computeLPSArray(pattern, M, lps);
            int i = 0; // индекс для текст
            int j = 0; // индекс для паттерна
            while (i < N) {
                if (pattern.charAt(j) == text.charAt(i)) {
                    i++;
                    j++;
                }
                if (j == M) {
                    System.out.println("Найдено в индексе " + (i - j));
                    j = lps[j - 1];
                } else if (i < N && pattern.charAt(j) != text.charAt(i)) {
                    if (j != 0) {
                        j = lps[j - 1];
                    } else {
                        i++;
                    }
                }
            }
        }

        public static void computeLPSArray(String pattern, int M, int[] lps) {
            int len = 0;
            lps[0] = 0; // lps[0] всегда 0
            int i = 1;
            while (i < M) {
                if (pattern.charAt(i) == pattern.charAt(len)) {
                    len++;
                    lps[i] = len;
                    i++;
                } else {
                    if (len != 0) {
                        len = lps[len - 1];
                    } else {
                        lps[i] = 0;
                        i++;
                    }
                }
            }
        }
    }`,
    description: "Программа, реализующая алгоритм Кнута-Морриса-Пратта для поиска подстроки в строке.",
    next: 31
},

// Задача 31. Чтение и запись файла
{
    code: `import java.io.*;

    public class FileReadWrite {
        public static void main(String[] args) {
            String content = "Hello, World!";
            try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
                writer.write(content);
            } catch (IOException e) {
                e.printStackTrace();
            }
            System.out.println("Данные записаны в файл.");
            try (BufferedReader reader = new BufferedReader(new FileReader("output.txt"))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println(line);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }`,
    description: "Программа, которая читает данные из файла и записывает их в другой файл.",
    next: 32
},

// Задача 32. Подсчет слов в файле
{
    code: `import java.io.*;

    public class WordCount {
        public static void main(String[] args) {
            try (BufferedReader reader = new BufferedReader(new FileReader("input.txt"))) {
                String line;
                int wordCount = 0;
                while ((line = reader.readLine()) != null) {
                    String[] words = line.split("\\s+");
                    wordCount += words.length;
                }
                System.out.println("Количество слов: " + wordCount);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }`,
    description: "Программа, которая подсчитывает количество слов в текстовом файле.",
    next: 33
},

// Задача 33. Поиск самого длинного слова в файле
{
    code: `import java.io.*;

    public class LongestWord {
        public static void main(String[] args) {
            try (BufferedReader reader = new BufferedReader(new FileReader("input.txt"))) {
                String line;
                String longestWord = "";
                while ((line = reader.readLine()) != null) {
                    String[] words = line.split("\\s+");
                    for (String word : words) {
                        if (word.length() > longestWord.length()) {
                            longestWord = word;
                        }
                    }
                }
                System.out.println("Самое длинное слово: " + longestWord);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }`,
    description: "Программа, которая находит самое длинное слово в текстовом файле.",
    next: 34
},

// Задача 34. HTTP-запрос
{
    code: `import java.io.BufferedReader;
    import java.io.InputStreamReader;
    import java.net.HttpURLConnection;
    import java.net.URL;

    public class HttpRequest {
        public static void main(String[] args) throws Exception {
            String url = "http://www.example.com";
            HttpURLConnection con = (HttpURLConnection) new URL(url).openConnection();
            con.setRequestMethod("GET");
            int responseCode = con.getResponseCode();
            System.out.println("Response Code: " + responseCode);
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();
            System.out.println("Response: " + content.toString());
        }
    }`,
    description: "Программа, которая отправляет HTTP-запрос на сервер и выводит ответ.",
    next: 35
},

// Задача 35. Парсинг JSON
{
    code: `import java.io.FileReader;
    import java.io.IOException;
    import com.google.gson.JsonObject;
    import com.google.gson.JsonParser;

    public class JsonParserExample {
        public static void main(String[] args) {
            try (FileReader reader = new FileReader("data.json")) {
                JsonObject jsonObject = JsonParser.parseReader(reader).getAsJsonObject();
                String name = jsonObject.get("name").getAsString();
                int age = jsonObject.get("age").getAsInt();
                System.out.println("Имя: " + name);
                System.out.println("Возраст: " + age);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }`,
    description: "Программа, которая читает JSON-файл и извлекает из него данные.",
    next: 36
},

// Задача 36. Реализация хэш-таблицы
{
    code: `import java.util.HashMap;

    public class HashTableExample {
        public static void main(String[] args) {
            HashMap<String, Integer> map = new HashMap<>();
            map.put("Alice", 25);
            map.put("Bob", 30);
            System.out.println("Alice: " + map.get("Alice"));
            map.remove("Bob");
            System.out.println("Содержимое таблицы: " + map);
        }
    }`,
    description: "Программа, реализующая хэш-таблицу с методами put, get и remove.",
    next: 37
},

// Задача 37. Реализация бинарного дерева
{
    code: `class TreeNode {
        int value;
        TreeNode left, right;

        public TreeNode(int item) {
            value = item;
            left = right = null;
        }
    }

    public class BinaryTree {
        TreeNode root;

        public void insert(int value) {
            root = insertRec(root, value);
        }

        private TreeNode insertRec(TreeNode root, int value) {
            if (root == null) {
                root = new TreeNode(value);
                return root;
            }
            if (value < root.value) {
                root.left = insertRec(root.left, value);
            } else if (value > root.value) {
                root.right = insertRec(root.right, value);
            }
            return root;
        }

        public void inorder() {
            inorderRec(root);
        }

        private void inorderRec(TreeNode root) {
            if (root != null) {
                inorderRec(root.left);
                System.out.print(root.value + " ");
                inorderRec(root.right);
            }
        }

        public static void main(String[] args) {
            BinaryTree tree = new BinaryTree();
            tree.insert(50);
            tree.insert(30);
            tree.insert(20);
            tree.insert(40);
            tree.insert(70);
            tree.insert(60);
            tree.insert(80);
            System.out.println("Индерный обход дерева:");
            tree.inorder();
        }
    }`,
    description: "Программа, реализующая бинарное дерево с методами insert и inorder.",
    next: 38
},

// Задача 38. Обход дерева (in-order, pre-order, post-order)
{
    code: `class TreeNode {
        int value;
        TreeNode left, right;

        public TreeNode(int item) {
            value = item;
            left = right = null;
        }
    }

    public class BinaryTree {
        TreeNode root;

        public void insert(int value) {
            root = insertRec(root, value);
        }

        private TreeNode insertRec(TreeNode root, int value) {
            if (root == null) {
                root = new TreeNode(value);
                return root;
            }
            if (value < root.value) {
                root.left = insertRec(root.left, value);
            } else if (value > root.value) {
                root.right = insertRec(root.right, value);
            }
            return root;
        }

        public void inorder() {
            inorderRec(root);
        }

        private void inorderRec(TreeNode root) {
            if (root != null) {
                inorderRec(root.left);
                System.out.print(root.value + " ");
                inorderRec(root.right);
            }
        }

        public void preorder() {
            preorderRec(root);
        }

        private void preorderRec(TreeNode root) {
            if (root != null) {
                System.out.print(root.value + " ");
                preorderRec(root.left);
                preorderRec(root.right);
            }
        }

        public void postorder() {
            postorderRec(root);
        }

        private void postorderRec(TreeNode root) {
            if (root != null) {
                postorderRec(root.left);
                postorderRec(root.right);
                System.out.print(root.value + " ");
            }
        }

        public static void main(String[] args) {
            BinaryTree tree = new BinaryTree();
            tree.insert(50);
            tree.insert(30);
            tree.insert(20);
            tree.insert(40);
            tree.insert(70);
            tree.insert(60);
            tree.insert(80);
            System.out.println("Индерный обход:");
            tree.inorder();
            System.out.println("\\nПредварительный обход:");
            tree.preorder();
            System.out.println("\\nПостоянный обход:");
            tree.postorder();
        }
    }`,
    description: "Программа, реализующая три способа обхода бинарного дерева.",
    next: 39
},

// Задача 39. Алгоритм Флойда-Уоршелла
{
    code: `class FloydWarshall {
        final static int INF = 99999;

        void floydWarshall(int graph[][]) {
            int V = graph.length;
            int dist[][] = new int[V][V];
            for (int i = 0; i < V; i++) {
                for (int j = 0; j < V; j++) {
                    dist[i][j] = graph[i][j];
                }
            }
            for (int k = 0; k < V; k++) {
                for (int i = 0; i < V; i++) {
                    for (int j = 0; j < V; j++) {
                        if (dist[i][k] + dist[k][j] < dist[i][j]) {
                            dist[i][j] = dist[i][k] + dist[k][j];
                        }
                    }
                }
            }
            printSolution(dist);
        }

        void printSolution(int dist[][]) {
            System.out.println("Кратчайший путь между двумя вершинами:");
            for (int i = 0; i < dist.length; i++) {
                for (int j = 0; j < dist[i].length; j++) {
                    if (dist[i][j] == INF) {
                        System.out.print("INF ");
                    } else {
                        System.out.print(dist[i][j] + " ");
                    }
                }
                System.out.println();
            }
        }

        public static void main(String args[]) {
            int graph[][] = new int[][] {
                {0, 5, INF, 10},
                {INF, 0, 3, INF},
                {INF, INF, 0, 1},
                {INF, INF, INF, 0}
            };
            FloydWarshall fw = new FloydWarshall();
            fw.floydWarshall(graph);
        }
    }`,
    description: "Программа, реализующая алгоритм Флойда-Уоршелла для поиска кратчайших путей в графе.",
    next: 40
},

// Задача 40. Алгоритм Краскала
{
    code: `import java.util.*;

    class Edge implements Comparable<Edge> {
        int source, destination, weight;

        Edge(int s, int d, int w) {
            source = s;
            destination = d;
            weight = w;
        }

        public int compareTo(Edge other) {
            return this.weight - other.weight;
        }
    }

    public class Kruskal {
        int[] parent, rank;

        public void kruskalMST(List<Edge> edges, int numVertices) {
            Collections.sort(edges);
            parent = new int[numVertices];
            rank = new int[numVertices];

            for (int i = 0; i < numVertices; i++) {
                parent[i] = i;
                rank[i] = 0;
            }
            List<Edge> result = new ArrayList<>();
            for (Edge edge : edges) {
                int rootSource = find(edge.source);
                int rootDestination = find(edge.destination);
                if (rootSource != rootDestination) {
                    result.add(edge);
                    union(rootSource, rootDestination);
                }
            }
            printResult(result);
        }

        private int find(int vertex) {
            if (parent[vertex] != vertex) {
                parent[vertex] = find(parent[vertex]);
            }
            return parent[vertex];
        }

        private void union(int source, int destination) {
            int rootSource = find(source);
            int rootDestination = find(destination);
            if (rank[rootSource] > rank[rootDestination]) {
                parent[rootDestination] = rootSource;
            } else if (rank[rootSource] < rank[rootDestination]) {
                parent[rootSource] = rootDestination;
            } else {
                parent[rootDestination] = rootSource;
                rank[rootSource]++;
            }
        }

        private void printResult(List<Edge> result) {
            System.out.println("Ребра в минимальном остовном дереве:");
            for (Edge edge : result) {
                System.out.println(edge.source + " - " + edge.destination + ": " + edge.weight);
            }
        }

        public static void main(String[] args) {
            List<Edge> edges = new ArrayList<>();
            edges.add(new Edge(0, 1, 10));
            edges.add(new Edge(0, 2, 6));
            edges.add(new Edge(0, 3, 5));
            edges.add(new Edge(1, 3, 15));
            edges.add(new Edge(2, 3, 4));

            Kruskal g = new Kruskal();
            g.kruskalMST(edges, 4);
        }
    }`,
    description: "Программа, реализующая алгоритм Краскала для поиска минимального остовного дерева.",
    next: 41
},

// Задача 41. Создание потоков
{
    code: `class ThreadExample extends Thread {
        public void run() {
            System.out.println("Поток " + Thread.currentThread().getName() + " запущен.");
        }

        public static void main(String args[]) {
            for (int i = 0; i < 5; i++) {
                ThreadExample thread = new ThreadExample();
                thread.start();
            }
        }
    }`,
    description: "Программа, которая создает несколько потоков и выполняет в них различные задачи.",
    next: 42
},

// Задача 42. Синхронизация потоков
{
    code: `class Counter {
        private int count = 0;

        public synchronized void increment() {
            count++;
        }

        public int getCount() {
            return count;
        }
    }

    public class SynchronizedThreads {
        public static void main(String[] args) {
            Counter counter = new Counter();
            Thread t1 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) {
                    counter.increment();
                }
            });
            Thread t2 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) {
                    counter.increment();
                }
            });
            t1.start();
            t2.start();
            try {
                t1.join();
                t2.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("Итоговое значение счетчика: " + counter.getCount());
        }
    }`,
    description: "Программа, которая демонстрирует синхронизацию потоков с использованием synchronized.",
    next: 43
},

// Задача 43. Пул потоков
{
    code: `import java.util.concurrent.ExecutorService;
    import java.util.concurrent.Executors;

    public class ThreadPoolExample {
        public static void main(String[] args) {
            ExecutorService executorService = Executors.newFixedThreadPool(5);
            for (int i = 0; i < 10; i++) {
                final int task = i;
                executorService.submit(() -> {
                    System.out.println("Задача " + task + " выполняется в потоке " + Thread.currentThread().getName());
                });
            }
            executorService.shutdown();
        }
    }`,
    description: "Программа, которая использует пул потоков для выполнения задач.",
    next: 44
},

// Задача 44. Производитель-потребитель
{
    code: `import java.util.LinkedList;
    import java.util.Queue;

    class ProducerConsumer {
        private static final Queue<Integer> queue = new LinkedList<>();
        private static final int LIMIT = 5;

        public static void main(String[] args) {
            Thread producer = new Thread(() -> {
                for (int i = 0; i < 10; i++) {
                    synchronized (queue) {
                        while (queue.size() == LIMIT) {
                            try {
                                queue.wait();
                            } catch (InterruptedException e) {
                                Thread.currentThread().interrupt();
                            }
                        }
                        queue.add(i);
                        System.out.println("Производитель добавил: " + i);
                        queue.notifyAll();
                    }
                }
            });

            Thread consumer = new Thread(() -> {
                for (int i = 0; i < 10; i++) {
                    synchronized (queue) {
                        while (queue.isEmpty()) {
                            try {
                                queue.wait();
                            } catch (InterruptedException e) {
                                Thread.currentThread().interrupt();
                            }
                        }
                        int value = queue.poll();
                        System.out.println("Потребитель забрал: " + value);
                        queue.notifyAll();
                    }
                }
            });

            producer.start();
            consumer.start();
        }
    }`,
    description: "Программа, которая реализует паттерн 'производитель-потребитель' с использованием многопоточности.",
    next: 45
},

// Задача 45. Deadlock
{
    code: `public class DeadlockExample {
        static final Object lock1 = new Object();
        static final Object lock2 = new Object();

        public static void main(String[] args) {
            Thread t1 = new Thread(() -> {
                synchronized (lock1) {
                    System.out.println("Thread 1: Holding lock 1...");
                    try { Thread.sleep(100); } catch (InterruptedException e) {}
                    System.out.println("Thread 1: Waiting for lock 2...");
                    synchronized (lock2) {
                        System.out.println("Thread 1: Acquired lock 2!");
                    }
                }
            });

            Thread t2 = new Thread(() -> {
                synchronized (lock2) {
                    System.out.println("Thread 2: Holding lock 2...");
                    try { Thread.sleep(100); } catch (InterruptedException e) {}
                    System.out.println("Thread 2: Waiting for lock 1...");
                    synchronized (lock1) {
                        System.out.println("Thread 2: Acquired lock 1!");
                    }
                }
            });

            t1.start();
            t2.start();
        }
    }`,
    description: "Программа, которая демонстрирует ситуацию deadlock (взаимной блокировки).",
    next: 46
},

// Задача 46. Класс "Счет"
{
    code: `class Account {
        private double balance;

        public Account(double initialBalance) {
            balance = initialBalance;
        }

        public void deposit(double amount) {
            balance += amount;
        }

        public void withdraw(double amount) {
            balance -= amount;
        }

        public double getBalance() {
            return balance;
        }

        public static void main(String[] args) {
            Account account = new Account(1000);
            account.deposit(500);
            account.withdraw(300);
            System.out.println("Баланс: " + account.getBalance());
        }
    }`,
    description: "Класс `Account`, который имеет методы `deposit`, `withdraw` и `getBalance`.",
    next: 47
},

// Задача 47. Наследование
{
    code: `class Animal {
        public void makeSound() {
            System.out.println("Животное издает звук.");
        }
    }

    class Dog extends Animal {
        @Override
        public void makeSound() {
            System.out.println("Гав!");
        }
    }

    class Cat extends Animal {
        @Override
        public void makeSound() {
            System.out.println("Мяу!");
        }
    }

    public class InheritanceExample {
        public static void main(String[] args) {
            Animal dog = new Dog();
            Animal cat = new Cat();
            dog.makeSound();
            cat.makeSound();
        }
    }`,
    description: "Программа, демонстрирующая наследование и переопределение метода `makeSound`.",
    next: 48
},

// Задача 48. Интерфейсы
{
    code: `interface Drawable {
        void draw();
    }

    class Circle implements Drawable {
        public void draw() {
            System.out.println("Рисуем круг.");
        }
    }

    class Rectangle implements Drawable {
        public void draw() {
            System.out.println("Рисуем прямоугольник.");
        }
    }

    public class InterfaceExample {
        public static void main(String[] args) {
            Drawable circle = new Circle();
            Drawable rectangle = new Rectangle();
            circle.draw();
            rectangle.draw();
        }
    }`,
    description: "Программа, которая создает интерфейс `Drawable` с методом `draw` и реализует его в классах `Circle` и `Rectangle`.",
    next: 49
},

// Задача 49. Полиморфизм
{
    code: `class Animal {
        public void makeSound() {
            System.out.println("Животное издает звук.");
        }
    }

    class Dog extends Animal {
        @Override
        public void makeSound() {
            System.out.println("Гав!");
        }
    }

    class Cat extends Animal {
        @Override
        public void makeSound() {
            System.out.println("Мяу!");
        }
    }

    public class PolymorphismExample {
        public static void main(String[] args) {
            Animal myDog = new Dog();
            Animal myCat = new Cat();
            myDog.makeSound();
            myCat.makeSound();
        }
    }`,
    description: "Программа, демонстрирующая полиморфизм через переопределение методов.",
    next: 50
},

// Задача 50. Шаблон проектирования "Синглтон"
{
    code: `class Database {
        private static Database instance;

        private Database() {}

        public static Database getInstance() {
            if (instance == null) {
                instance = new Database();
            }
            return instance;
        }

        public void connect() {
            System.out.println("Подключение к базе данных.");
        }
    }

    public class SingletonExample {
        public static void main(String[] args) {
            Database db1 = Database.getInstance();
            Database db2 = Database.getInstance();
            db1.connect();
            System.out.println(db1 == db2); // выводит true, так как это один и тот же экземпляр
        }
    }`,
    description: "Программа, реализующая шаблон проектирования 'Синглтон' для класса `Database`.",
    next: null
}
];
