const exapmles = [
// Задача 1. Hello, World!
{
    code: `#include <iostream>

    int main() {
        std::cout << "Hello, World!" << std::endl;
        return 0;
    }`,
    description: "Простейший пример программы, выводящей 'Hello, World!' на консоль.",
    next: 1
},

// Задача 2. Сумма двух чисел
{
    code: `#include <iostream>

    int main() {
        std::cout << "Введите первое число: ";
        int num1;
        std::cin >> num1;
        std::cout << "Введите второе число: ";
        int num2;
        std::cin >> num2;
        std::cout << "Сумма: " << (num1 + num2) << std::endl;
        return 0;
    }`,
    description: "Программа, которая принимает два числа и выводит их сумму.",
    next: 2
},

// Задача 3. Четное или нечетное
{
    code: `#include <iostream>

    int main() {
        std::cout << "Введите число: ";
        int num;
        std::cin >> num;
        if (num % 2 == 0) {
            std::cout << num << " - четное число." << std::endl;
        } else {
            std::cout << num << " - нечетное число." << std::endl;
        }
        return 0;
    }`,
    description: "Программа, которая проверяет, является ли число четным или нечетным.",
    next: 3
},

// Задача 4. Факториал числа
{
    code: `#include <iostream>

    int main() {
        std::cout << "Введите число: ";
        int num;
        std::cin >> num;
        int factorial = 1;
        for (int i = 1; i <= num; i++) {
            factorial *= i;
        }
        std::cout << "Факториал " << num << " = " << factorial << std::endl;
        return 0;
    }`,
    description: "Программа, которая вычисляет факториал числа.",
    next: 4
},

// Задача 5. Таблица умножения
{
    code: `#include <iostream>

    int main() {
        std::cout << "Введите число для таблицы умножения: ";
        int num;
        std::cin >> num;
        for (int i = 1; i <= 10; i++) {
            std::cout << num << " x " << i << " = " << (num * i) << std::endl;
        }
        return 0;
    }`,
    description: "Программа, которая выводит таблицу умножения для числа, введенного пользователем.",
    next: 5
},

// Задача 6. Проверка палиндрома
{
    code: `#include <iostream>
    #include <string>

    int main() {
        std::cout << "Введите строку: ";
        std::string input;
        std::cin >> input;
        std::string reverse = std::string(input.rbegin(), input.rend());
        if (input == reverse) {
            std::cout << input << " - палиндром." << std::endl;
        } else {
            std::cout << input << " - не палиндром." << std::endl;
        }
        return 0;
    }`,
    description: "Программа, которая проверяет, является ли строка палиндромом.",
    next: 6
},

// Задача 7. Наибольший общий делитель (НОД)
{
    code: `#include <iostream>

    int main() {
        std::cout << "Введите первое число: ";
        int a, b;
        std::cin >> a;
        std::cout << "Введите второе число: ";
        std::cin >> b;
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        std::cout << "Наибольший общий делитель: " << a << std::endl;
        return 0;
    }`,
    description: "Программа, которая находит наибольший общий делитель двух чисел.",
    next: 7
},

// Задача 8. Простые числа
{
    code: `#include <iostream>
    #include <cmath>

    int main() {
        std::cout << "Введите число: ";
        int num;
        std::cin >> num;
        bool isPrime = true;
        if (num <= 1) isPrime = false;
        for (int i = 2; i <= std::sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            std::cout << num << " - простое число." << std::endl;
        } else {
            std::cout << num << " - не простое число." << std::endl;
        }
        return 0;
    }`,
    description: "Программа, которая проверяет, является ли число простым.",
    next: 8
},

// Задача 9. Сумма цифр числа
{
    code: `#include <iostream>

    int main() {
        std::cout << "Введите число: ";
        int num;
        std::cin >> num;
        int sum = 0;
        while (num != 0) {
            sum += num % 10; // добавляем последнюю цифру к сумме
            num /= 10; // убираем последнюю цифру
        }
        std::cout << "Сумма цифр: " << sum << std::endl;
        return 0;
    }`,
    description: "Программа, которая вычисляет сумму цифр числа.",
    next: 9
},

// Задача 10. Переворот строки
{
    code: `#include <iostream>
    #include <string>

    int main() {
        std::cout << "Введите строку: ";
        std::string input;
        std::cin >> input;
        std::string reversed(input.rbegin(), input.rend());
        std::cout << "Перевернутая строка: " << reversed << std::endl;
        return 0;
    }`,
    description: "Программа, которая переворачивает строку.",
    next: 11
},

// Задача 11. Поиск минимального и максимального элемента в массиве
{
    code: `#include <iostream>

    int main() {
        std::cout << "Введите размер массива: ";
        int n;
        std::cin >> n;
        int array[n];
        std::cout << "Введите элементы массива:" << std::endl;
        for (int i = 0; i < n; i++) {
            std::cin >> array[i];
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
        std::cout << "Минимальный элемент: " << min << std::endl;
        std::cout << "Максимальный элемент: " << max << std::endl;
        return 0;
    }`,
    description: "Программа, которая находит минимальный и максимальный элементы в массиве.",
    next: 12
},

// Задача 12. Сортировка массива
{
    code: `#include <iostream>

    int main() {
        int array[] = {64, 34, 25, 12, 22, 11, 90};
        int n = sizeof(array) / sizeof(array[0]);
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
        std::cout << "Отсортированный массив: ";
        for (int num : array) {
            std::cout << num << " ";
        }
        std::cout << std::endl;
        return 0;
    }`,
    description: "Программа, которая сортирует массив чисел (пузырьковая сортировка).",
    next: 13
},

// Задача 13. Бинарный поиск
{
    code: `#include <iostream>

    int binarySearch(int array[], int left, int right, int key) {
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

    int main() {
        int array[] = {2, 3, 4, 10, 40};
        int key = 10;
        int result = binarySearch(array, 0, 4, key); // 4 - последний индекс
        if (result == -1) {
            std::cout << "Элемент не найден." << std::endl;
        } else {
            std::cout << "Элемент найден на индексе: " << result << std::endl;
        }
        return 0;
    }`,
    description: "Программа, которая реализует бинарный поиск в отсортированном массиве.",
    next: 14
},

// Задача 14. Числа Фибоначчи
{
    code: `#include <iostream>

    int main() {
        std::cout << "Введите количество чисел Фибоначчи: ";
        int n;
        std::cin >> n;
        int a = 0, b = 1;
        std::cout << "Числа Фибоначчи: " << a << " " << b;
        for (int i = 2; i < n; i++) {
            int next = a + b;
            std::cout << " " << next;
            a = b;
            b = next;
        }
        std::cout << std::endl;
        return 0;
    }`,
    description: "Программа, которая выводит первые `n` чисел Фибоначчи.",
    next: 15
},

// Задача 15. Проверка на анаграмму
{
    code: `#include <iostream>
    #include <algorithm>

    int main() {
        std::cout << "Введите первое слово: ";
        std::string str1;
        std::cin >> str1;
        std::cout << "Введите второе слово: ";
        std::string str2;
        std::cin >> str2;
        
        std::sort(str1.begin(), str1.end());
        std::sort(str2.begin(), str2.end());
        
        if (str1 == str2) {
            std::cout << "Слова являются анаграммами." << std::endl;
        } else {
            std::cout << "Слова не являются анаграммами." << std::endl;
        }
        return 0;
    }`,
    description: "Программа, которая проверяет, являются ли две строки анаграммами.",
    next: 16
},

// Задача 16. Подсчет гласных и согласных
{
    code: `#include <iostream>
    #include <cctype>

    int main() {
        std::cout << "Введите строку: ";
        std::string input;
        std::cin.ignore(); // игнорируем предыдущий ввод
        std::getline(std::cin, input);
        
        int vowels = 0, consonants = 0;
        for (char ch : input) {
            if (std::isalpha(ch)) {
                if (strchr("AEIOUaeiou", ch)) {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }
        std::cout << "Количество гласных: " << vowels << std::endl;
        std::cout << "Количество согласных: " << consonants << std::endl;
        return 0;
    }`,
    description: "Программа, которая подсчитывает количество гласных и согласных в строке.",
    next: 17
},

// Задача 17. Удаление дубликатов из массива
{
    code: `#include <iostream>
    #include <vector>
    #include <set>

    int main() {
        std::cout << "Введите количество элементов: ";
        int n;
        std::cin >> n;
        std::vector<int> array(n);
        std::cout << "Введите элементы:" << std::endl;
        for (int i = 0; i < n; i++) {
            std::cin >> array[i];
        }
        
        std::set<int> unique(array.begin(), array.end());
        std::cout << "Массив без дубликатов: ";
        for (int num : unique) {
            std::cout << num << " ";
        }
        std::cout << std::endl;
        return 0;
    }`,
    description: "Программа, которая удаляет дубликаты из массива.",
    next: 18
},

// Задача 18. Поиск второго по величине элемента
{
    code: `#include <iostream>
    #include <limits>

    int main() {
        std::cout << "Введите количество элементов: ";
        int n;
        std::cin >> n;
        std::vector<int> array(n);
        std::cout << "Введите элементы:" << std::endl;
        for (int i = 0; i < n; i++) {
            std::cin >> array[i];
        }
        
        int largest = std::numeric_limits<int>::min();
        int secondLargest = std::numeric_limits<int>::min();
        
        for (int num : array) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num < largest) {
                secondLargest = num;
            }
        }
        
        if (secondLargest == std::numeric_limits<int>::min()) {
            std::cout << "Нету второго по величине элемента." << std::endl;
        } else {
            std::cout << "Второй по величине элемент: " << secondLargest << std::endl;
        }
        return 0;
    }`,
    description: "Программа, которая находит второй по величине элемент в массиве.",
    next: 19
},

// Задача 19. Проверка на простое число (оптимизация)
{
    code: `#include <iostream>
    #include <cmath>

    int main() {
        std::cout << "Введите число: ";
        int num;
        std::cin >> num;
        bool isPrime = true;
        if (num <= 1) isPrime = false;
        for (int i = 2; i <= std::sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            std::cout << num << " - простое число." << std::endl;
        } else {
            std::cout << num << " - не простое число." << std::endl;
        }
        return 0;
    }`,
    description: "Оптимизированная программа для проверки простого числа.",
    next: 20
},

// Задача 20. Шифр Цезаря
{
    code: `#include <iostream>

    int main() {
        std::cout << "Введите текст: ";
        std::string text;
        std::cin.ignore(); // игнорируем предыдущий ввод
        std::getline(std::cin, text);
        std::cout << "Введите сдвиг: ";
        int shift;
        std::cin >> shift;
        
        std::string cipherText = "";
        for (char ch : text) {
            if (isalpha(ch)) {
                char base = islower(ch) ? 'a' : 'A';
                cipherText += (char)((((ch + shift - base) % 26) + base));
            } else {
                cipherText += ch;
            }
        }
        std::cout << "Шифрованный текст: " << cipherText << std::endl;
        return 0;
    }`,
    description: "Программа, которая шифрует текст с помощью шифра Цезаря.",
    next: 21
},

// Задача 21. Реализация стека
{
    code: `#include <iostream>
    #include <stack>

    int main() {
        std::stack<int> stack;
        stack.push(1);
        stack.push(2);
        stack.push(3);
        std::cout << "Элемент на вершине стека: " << stack.top() << std::endl;
        std::cout << "Удаляем элемент: " << stack.top() << std::endl;
        stack.pop();
        std::cout << "Элемент на вершине стека после удаления: " << stack.top() << std::endl;
        return 0;
    }`,
    description: "Программа, реализующая структуру данных 'стек' с методами push, pop и top.",
    next: 22
},

// Задача 22. Реализация очереди
{
    code: `#include <iostream>
    #include <queue>

    int main() {
        std::queue<int> queue;
        queue.push(1);
        queue.push(2);
        queue.push(3);
        std::cout << "Первый элемент в очереди: " << queue.front() << std::endl;
        std::cout << "Удаляем элемент: " << queue.front() << std::endl;
        queue.pop();
        std::cout << "Первый элемент в очереди после удаления: " << queue.front() << std::endl;
        return 0;
    }`,
    description: "Программа, реализующая структуру данных 'очередь' с методами push, pop и front.",
    next: 23
},

// Задача 23. Реализация связного списка
{
    code: `#include <iostream>

    class Node {
    public:
        int data;
        Node* next;
        Node(int d) {
            data = d;
            next = nullptr;
        }
    };

    class LinkedList {
    public:
        Node* head;

        LinkedList() {
            head = nullptr;
        }

        void Add(int data) {
            Node* newNode = new Node(data);
            if (!head) {
                head = newNode;
                return;
            }
            Node* last = head;
            while (last->next) {
                last = last->next;
            }
            last->next = newNode;
        }

        void Print() {
            Node* current = head;
            while (current) {
                std::cout << current->data << " ";
                current = current->next;
            }
            std::cout << std::endl;
        }
    };

    int main() {
        LinkedList list;
        list.Add(1);
        list.Add(2);
        list.Add(3);
        list.Print();
        return 0;
    }`,
    description: "Программа, реализующая односвязный список с методами Add и Print.",
    next: 24
},

// Задача 24. Поиск в глубину (DFS)
{
    code: `#include <iostream>
    #include <vector>
    #include <unordered_map>
    #include <unordered_set>

    class Graph {
    private:
        std::unordered_map<int, std::vector<int>> adjList;

    public:
        void AddEdge(int v, int w) {
            adjList[v].push_back(w);
        }

        void DFS(int start) {
            std::unordered_set<int> visited;
            DFSHelper(start, visited);
        }

    private:
        void DFSHelper(int v, std::unordered_set<int>& visited) {
            visited.insert(v);
            std::cout << v << " ";
            for (int neighbor : adjList[v]) {
                if (visited.find(neighbor) == visited.end()) {
                    DFSHelper(neighbor, visited);
                }
            }
        }
    };

    int main() {
        Graph g;
        g.AddEdge(1, 2);
        g.AddEdge(1, 3);
        g.AddEdge(2, 4);
        g.AddEdge(3, 5);
        std::cout << "Поиск в глубину начиная с 1:\n";
        g.DFS(1);
        return 0;
    }`,
    description: "Программа, реализующая алгоритм поиска в глубину для обхода графа.",
    next: 25
},

// Задача 25. Поиск в ширину (BFS)
{
    code: `#include <iostream>
    #include <vector>
    #include <unordered_map>
    #include <unordered_set>
    #include <queue>

    class Graph {
    private:
        std::unordered_map<int, std::vector<int>> adjList;

    public:
        void AddEdge(int v, int w) {
            adjList[v].push_back(w);
        }

        void BFS(int start) {
            std::unordered_set<int> visited;
            std::queue<int> queue;
            visited.insert(start);
            queue.push(start);

            while (!queue.empty()) {
                int v = queue.front();
                queue.pop();
                std::cout << v << " ";
                for (int neighbor : adjList[v]) {
                    if (visited.find(neighbor) == visited.end()) {
                        visited.insert(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
        }
    };

    int main() {
        Graph g;
        g.AddEdge(1, 2);
        g.AddEdge(1, 3);
        g.AddEdge(2, 4);
        g.AddEdge(3, 5);
        std::cout << "Поиск в ширину начиная с 1:\n";
        g.BFS(1);
        return 0;
    }`,
    description: "Программа, реализующая алгоритм поиска в ширину для обхода графа.",
    next: 26
},

// Задача 26. Алгоритм Дейкстры
{
    code: `#include <iostream>
    #include <vector>
    #include <set>
    #include <utility>
    #include <limits>

    class Dijkstra {
    private:
        std::vector<std::pair<int, int>>* graph; // звено <сосед, вес>
        int V;

    public:
        Dijkstra(int vertices) {
            V = vertices;
            graph = new std::vector<std::pair<int, int>>[V];
        }

        void AddEdge(int source, int destination, int weight) {
            graph[source].push_back(std::make_pair(destination, weight));
        }

        void DijkstraAlgorithm(int start) {
            std::set<std::pair<int, int>> pq; // <расстояние, вершина>
            std::vector<int> distances(V, std::numeric_limits<int>::max());
            distances[start] = 0;
            pq.insert(std::make_pair(0, start));

            while (!pq.empty()) {
                int currentVertex = pq.begin()->second;
                pq.erase(pq.begin());

                for (auto& neighbor : graph[currentVertex]) {
                    int nextVertex = neighbor.first;
                    int weight = neighbor.second;
                    int newDist = distances[currentVertex] + weight;
                    if (newDist < distances[nextVertex]) {
                        pq.erase(std::make_pair(distances[nextVertex], nextVertex));
                        distances[nextVertex] = newDist;
                        pq.insert(std::make_pair(newDist, nextVertex));
                    }
                }
            }
            std::cout << "Расстояния от начальной вершины " << start << ":\n";
            for (int i = 0; i < V; i++) {
                std::cout << i << ": " << distances[i] << std::endl;
            }
        }
    };

    int main() {
        Dijkstra dijkstra(4);
        dijkstra.AddEdge(0, 1, 1);
        dijkstra.AddEdge(0, 2, 4);
        dijkstra.AddEdge(1, 2, 2);
        dijkstra.AddEdge(1, 3, 6);
        dijkstra.AddEdge(2, 3, 3);
        std::cout << "Алгоритм Дейкстры:\n";
        dijkstra.DijkstraAlgorithm(0);
        return 0;
    }`,
    description: "Программа, реализующая алгоритм Дейкстры для поиска кратчайшего пути в графе.",
    next: 27
},

// Задача 27. Сортировка слиянием (Merge Sort)
{
    code: `#include <iostream>
    #include <vector>

    void Merge(std::vector<int>& array, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        std::vector<int> L(n1);
        std::vector<int> R(n2);

        for (int i = 0; i < n1; i++)
            L[i] = array[left + i];
        for (int j = 0; j < n2; j++)
            R[j] = array[mid + 1 + j];

        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                array[k] = L[i];
                i++;
            } else {
                array[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < n1) {
            array[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            array[k] = R[j];
            j++;
            k++;
        }
    }

    void MergeSortAlgorithm(std::vector<int>& array, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            MergeSortAlgorithm(array, left, mid);
            MergeSortAlgorithm(array, mid + 1, right);
            Merge(array, left, mid, right);
        }
    }

    int main() {
        std::vector<int> array = {12, 11, 13, 5, 6, 7};
        std::cout << "Несортированный массив: ";
        for (const int& num : array) {
            std::cout << num << " ";
        }
        std::cout << std::endl;

        MergeSortAlgorithm(array, 0, array.size() - 1);
        
        std::cout << "Отсортированный массив: ";
        for (const int& num : array) {
            std::cout << num << " ";
        }
        std::cout << std::endl;
        return 0;
    }`,
    description: "Программа, реализующая алгоритм сортировки слиянием.",
    next: 28
},

// Задача 28. Быстрая сортировка (Quick Sort)
{
    code: `#include <iostream>
    #include <vector>

    int Partition(std::vector<int>& array, int low, int high) {
        int pivot = array[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                std::swap(array[i], array[j]);
            }
        }
        std::swap(array[i + 1], array[high]);
        return i + 1;
    }

    void QuickSortAlgorithm(std::vector<int>& array, int low, int high) {
        if (low < high) {
            int pi = Partition(array, low, high);
            QuickSortAlgorithm(array, low, pi - 1);
            QuickSortAlgorithm(array, pi + 1, high);
        }
    }

    int main() {
        std::vector<int> array = {12, 11, 13, 5, 6, 7};
        std::cout << "Несортированный массив: ";
        for (const int& num : array) {
            std::cout << num << " ";
        }
        std::cout << std::endl;

        QuickSortAlgorithm(array, 0, array.size() - 1);
        
        std::cout << "Отсортированный массив: ";
        for (const int& num : array) {
            std::cout << num << " ";
        }
        std::cout << std::endl;
        return 0;
    }`,
    description: "Программа, реализующая алгоритм быстрой сортировки.",
    next: 29
},

// Задача 29. Ханойские башни
{
    code: `#include <iostream>

    void SolveHanoi(int n, char source, char target, char auxiliary) {
        if (n == 1) {
            std::cout << "Переместить диск 1 с " << source << " на " << target << std::endl;
            return;
        }
        SolveHanoi(n - 1, source, auxiliary, target);
        std::cout << "Переместить диск " << n << " с " << source << " на " << target << std::endl;
        SolveHanoi(n - 1, auxiliary, target, source);
    }

    int main() {
        int n = 3; // количество дисков
        SolveHanoi(n, 'A', 'C', 'B'); // A, C, B - имена стержней
        return 0;
    }`,
    description: "Программа, которая решает задачу 'Ханойские башни' с использованием рекурсии.",
    next: 30
},

// Задача 30. Поиск подстроки (алгоритм Кнута-Морриса-Пратта)
{
    code: `#include <iostream>
    #include <string>
    #include <vector>

    void ComputeLPSArray(const std::string& pattern, int M, std::vector<int>& lps) {
        int len = 0;
        lps[0] = 0; // lps[0] всегда 0
        int i = 1;
        while (i < M) {
            if (pattern[i] == pattern[len]) {
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

    void KMPSearch(const std::string& pattern, const std::string& text) {
        int M = pattern.length();
        int N = text.length();
        std::vector<int> lps(M);
        ComputeLPSArray(pattern, M, lps);
        int i = 0; // индекс для текст
        int j = 0; // индекс для паттерна
        while (i < N) {
            if (pattern[j] == text[i]) {
                i++;
                j++;
            }
            if (j == M) {
                std::cout << "Найдено в индексе " << (i - j) << std::endl;
                j = lps[j - 1];
            } else if (i < N && pattern[j] != text[i]) {
                if (j != 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
    }

    int main() {
        std::string text = "ABABDABACDABABCABAB";
        std::string pattern = "ABAB";
        KMPSearch(pattern, text);
        return 0;
    }`,
    description: "Программа, реализующая алгоритм Кнута-Морриса-Пратта для поиска подстроки в строке.",
    next: 31
},

// Задача 31. Чтение и запись файла
{
    code: `#include <iostream>
    #include <fstream>

    int main() {
        std::string content = "Hello, World!";
        std::ofstream outFile("output.txt");
        outFile << content;
        outFile.close();
        std::cout << "Данные записаны в файл." << std::endl;

        std::ifstream inFile("output.txt");
        std::string readContent;
        std::getline(inFile, readContent);
        inFile.close();
        std::cout << "Содержимое файла: " << readContent << std::endl;
        return 0;
    }`,
    description: "Программа, которая читает данные из файла и записывает их в другой файл.",
    next: 32
},

// Задача 32. Подсчет слов в файле
{
    code: `#include <iostream>
    #include <fstream>
    #include <sstream>

    int main() {
        std::ifstream inFile("input.txt");
        std::string line;
        int wordCount = 0;
        while (std::getline(inFile, line)) {
            std::istringstream iss(line);
            std::string word;
            while (iss >> word) {
                wordCount++;
            }
        }
        inFile.close();
        std::cout << "Количество слов: " << wordCount << std::endl;
        return 0;
    }`,
    description: "Программа, которая подсчитывает количество слов в текстовом файле.",
    next: 33
},

// Задача 33. Поиск самого длинного слова в файле
{
    code: `#include <iostream>
    #include <fstream>
    #include <sstream>
    #include <string>

    int main() {
        std::ifstream inFile("input.txt");
        std::string line;
        std::string longestWord = "";
        while (std::getline(inFile, line)) {
            std::istringstream iss(line);
            std::string word;
            while (iss >> word) {
                if (word.length() > longestWord.length()) {
                    longestWord = word;
                }
            }
        }
        inFile.close();
        std::cout << "Самое длинное слово: " << longestWord << std::endl;
        return 0;
    }`,
    description: "Программа, которая находит самое длинное слово в текстовом файле.",
    next: 34
},

// Задача 34. HTTP-запрос
{
    code: `#include <iostream>
    #include <curl/curl.h>

    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }

    int main() {
        CURL* curl;
        CURLcode res;
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            std::string readBuffer;
            curl_easy_setopt(curl, CURLOPT_URL, "http://www.example.com");
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            res = curl_easy_perform(curl);
            curl_easy_cleanup(curl);
            std::cout << "Response: " << readBuffer << std::endl;
        }
        curl_global_cleanup();
        return 0;
    }`,
    description: "Программа, которая отправляет HTTP-запрос на сервер и выводит ответ.",
    next: 35
},

// Задача 35. Парсинг JSON
{
    code: `#include <iostream>
    #include <fstream>
    #include <nlohmann/json.hpp>

    int main() {
        std::ifstream inFile("data.json");
        nlohmann::json jsonObject;
        inFile >> jsonObject;
        std::string name = jsonObject["name"];
        int age = jsonObject["age"];
        std::cout << "Имя: " << name << std::endl;
        std::cout << "Возраст: " << age << std::endl;
        return 0;
    }`,
    description: "Программа, которая читает JSON-файл и извлекает из него данные.",
    next: 36
},

// Задача 36. Реализация хэш-таблицы
{
    code: `#include <iostream>
    #include <unordered_map>

    int main() {
        std::unordered_map<std::string, int> map;
        map["Alice"] = 25;
        map["Bob"] = 30;
        std::cout << "Alice: " << map["Alice"] << std::endl;
        map.erase("Bob");
        std::cout << "Содержимое таблицы:" << std::endl;
        for (const auto& kvp : map) {
            std::cout << kvp.first << ": " << kvp.second << std::endl;
        }
        return 0;
    }`,
    description: "Программа, реализующая хэш-таблицу с методами Add, Get и Remove.",
    next: 37
},

// Задача 37. Реализация бинарного дерева
{
    code: `#include <iostream>

    class TreeNode {
    public:
        int value;
        TreeNode* left;
        TreeNode* right;

        TreeNode(int item) {
            value = item;
            left = right = nullptr;
        }
    };

    class BinaryTree {
    public:
        TreeNode* root;

        BinaryTree() {
            root = nullptr;
        }

        void Insert(int value) {
            root = InsertRec(root, value);
        }

    private:
        TreeNode* InsertRec(TreeNode* root, int value) {
            if (root == nullptr) {
                root = new TreeNode(value);
                return root;
            }
            if (value < root->value) {
                root->left = InsertRec(root->left, value);
            } else if (value > root->value) {
                root->right = InsertRec(root->right, value);
            }
            return root;
        }

    public:
        void Inorder() {
            InorderRec(root);
        }

    private:
        void InorderRec(TreeNode* root) {
            if (root != nullptr) {
                InorderRec(root->left);
                std::cout << root->value << " ";
                InorderRec(root->right);
            }
        }
    };

    int main() {
        BinaryTree tree;
        tree.Insert(50);
        tree.Insert(30);
        tree.Insert(20);
        tree.Insert(40);
        tree.Insert(70);
        tree.Insert(60);
        tree.Insert(80);
        std::cout << "Индерный обход дерева:";
        tree.Inorder();
        std::cout << std::endl;
        return 0;
    }`,
    description: "Программа, реализующая бинарное дерево с методами Insert и Inorder.",
    next: 38
},

// Задача 38. Обход дерева (in-order, pre-order, post-order)
{
    code: `#include <iostream>

    class TreeNode {
    public:
        int value;
        TreeNode* left;
        TreeNode* right;

        TreeNode(int item) {
            value = item;
            left = right = nullptr;
        }
    };

    class BinaryTree {
    public:
        TreeNode* root;

        BinaryTree() {
            root = nullptr;
        }

        void Insert(int value) {
            root = InsertRec(root, value);
        }

    private:
        TreeNode* InsertRec(TreeNode* root, int value) {
            if (root == nullptr) {
                root = new TreeNode(value);
                return root;
            }
            if (value < root->value) {
                root->left = InsertRec(root->left, value);
            } else if (value > root->value) {
                root->right = InsertRec(root->right, value);
            }
            return root;
        }

    public:
        void Inorder() {
            InorderRec(root);
        }

        void Preorder() {
            PreorderRec(root);
        }

        void Postorder() {
            PostorderRec(root);
        }

    private:
        void InorderRec(TreeNode* root) {
            if (root != nullptr) {
                InorderRec(root->left);
                std::cout << root->value << " ";
                InorderRec(root->right);
            }
        }

        void PreorderRec(TreeNode* root) {
            if (root != nullptr) {
                std::cout << root->value << " ";
                PreorderRec(root->left);
                PreorderRec(root->right);
            }
        }

        void PostorderRec(TreeNode* root) {
            if (root != nullptr) {
                PostorderRec(root->left);
                PostorderRec(root->right);
                std::cout << root->value << " ";
            }
        }
    };

    int main() {
        BinaryTree tree;
        tree.Insert(50);
        tree.Insert(30);
        tree.Insert(20);
        tree.Insert(40);
        tree.Insert(70);
        tree.Insert(60);
        tree.Insert(80);
        std::cout << "Индерный обход:" << std::endl;
        tree.Inorder();
        std::cout << "\nПредварительный обход:" << std::endl;
        tree.Preorder();
        std::cout << "\nПостоянный обход:" << std::endl;
        tree.Postorder();
        std::cout << std::endl;
        return 0;
    }`,
    description: "Программа, реализующая три способа обхода бинарного дерева.",
    next: 39
},

// Задача 39. Алгоритм Флойда-Уоршелла
{
    code: `#include <iostream>
    #include <limits>

    class FloydWarshall {
    const int INF = std::numeric_limits<int>::max();

    public:
        void FloydWarshallAlgorithm(int graph[][4], int V) {
            int dist[4][4];
            for (int i = 0; i < V; i++)
                for (int j = 0; j < V; j++)
                    dist[i][j] = graph[i][j];

            for (int k = 0; k < V; k++) {
                for (int i = 0; i < V; i++) {
                    for (int j = 0; j < V; j++) {
                        if (dist[i][k] + dist[k][j] < dist[i][j])
                            dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
            PrintSolution(dist, V);
        }

        void PrintSolution(int dist[][4], int V) {
            std::cout << "Кратчайший путь между двумя вершинами:\n";
            for (int i = 0; i < V; i++) {
                for (int j = 0; j < V; j++) {
                    if (dist[i][j] == INF)
                        std::cout << "INF ";
                    else
                        std::cout << dist[i][j] << " ";
                }
                std::cout << std::endl;
            }
        }
    };

    int main() {
        int graph[4][4] = {
            {0, 5, INF, 10},
            {INF, 0, 3, INF},
            {INF, INF, 0, 1},
            {INF, INF, INF, 0}
        };
        FloydWarshall fw;
        fw.FloydWarshallAlgorithm(graph, 4);
        return 0;
    }`,
    description: "Программа, реализующая алгоритм Флойда-Уоршелла для поиска кратчайших путей в графе.",
    next: 40
},

// Задача 40. Алгоритм Краскала
{
    code: `#include <iostream>
    #include <vector>
    #include <algorithm>

    class Edge {
    public:
        int source, destination, weight;

        Edge(int s, int d, int w) : source(s), destination(d), weight(w) {}
    };

    class Kruskal {
    std::vector<Edge> edges;
    int* parent;
    int* rank;

    public:
        Kruskal(int numVertices) {
            parent = new int[numVertices];
            rank = new int[numVertices];
            for (int i = 0; i < numVertices; i++) {
                parent[i] = i;
                rank[i] = 0;
            }
        }

        void AddEdge(int s, int d, int w) {
            edges.push_back(Edge(s, d, w));
        }

        int Find(int vertex) {
            if (parent[vertex] != vertex) {
                parent[vertex] = Find(parent[vertex]);
            }
            return parent[vertex];
        }

        void Union(int source, int destination) {
            int rootSource = Find(source);
            int rootDestination = Find(destination);
            if (rank[rootSource] > rank[rootDestination]) {
                parent[rootDestination] = rootSource;
            } else if (rank[rootSource] < rank[rootDestination]) {
                parent[rootSource] = rootDestination;
            } else {
                parent[rootDestination] = rootSource;
                rank[rootSource]++;
            }
        }

        void KruskalMST(int numVertices) {
            std::sort(edges.begin(), edges.end(), [](Edge a, Edge b) { return a.weight < b.weight; });
            std::vector<Edge> result;

            for (auto edge : edges) {
                int rootSource = Find(edge.source);
                int rootDestination = Find(edge.destination);
                if (rootSource != rootDestination) {
                    result.push_back(edge);
                    Union(rootSource, rootDestination);
                }
            }

            std::cout << "Ребра в минимальном остовном дереве:\n";
            for (auto edge : result) {
                std::cout << edge.source << " - " << edge.destination << ": " << edge.weight << std::endl;
            }
        }

        ~Kruskal() {
            delete[] parent;
            delete[] rank;
        }
    };

    int main() {
        Kruskal g(4);
        g.AddEdge(0, 1, 10);
        g.AddEdge(0, 2, 6);
        g.AddEdge(0, 3, 5);
        g.AddEdge(1, 3, 15);
        g.AddEdge(2, 3, 4);
        std::cout << "Алгоритм Краскала:\n";
        g.KruskalMST(4);
        return 0;
    }`,
    description: "Программа, реализующая алгоритм Краскала для поиска минимального остовного дерева.",
    next: 41
},

// Задача 41. Создание потоков
{
    code: `#include <iostream>
    #include <thread>

    void threadFunction() {
        std::cout << "Поток " << std::this_thread::get_id() << " запущен." << std::endl;
    }

    int main() {
        for (int i = 0; i < 5; i++) {
            std::thread thread(threadFunction);
            thread.join(); // ждём завершения потока
        }
        return 0;
    }`,
    description: "Программа, которая создаёт несколько потоков и выполняет в них различные задачи.",
    next: 42
},

// Задача 42. Синхронизация потоков
{
    code: `#include <iostream>
    #include <thread>
    #include <mutex>

    class Counter {
    private:
        int count = 0;
        std::mutex mtx;

    public:
        void Increment() {
            std::lock_guard<std::mutex> lock(mtx);
            count++;
        }

        int GetCount() {
            return count;
        }
    };

    int main() {
        Counter counter;
        std::thread t1([&]() {
            for (int i = 0; i < 1000; i++) {
                counter.Increment();
            }
        });

        std::thread t2([&]() {
            for (int i = 0; i < 1000; i++) {
                counter.Increment();
            }
        });

        t1.join();
        t2.join();
        std::cout << "Итоговое значение счетчика: " << counter.GetCount() << std::endl;
        return 0;
    }`,
    description: "Программа, которая демонстрирует синхронизацию потоков с использованием мьютексов.",
    next: 43
},

// Задача 43. Пул потоков
{
    code: `#include <iostream>
    #include <vector>
    #include <future>
    #include <thread>

    void taskFunction(int task) {
        std::cout << "Задача " << task << " выполняется в потоке " << std::this_thread::get_id() << std::endl;
    }

    int main() {
        std::vector<std::future<void>> futures;
        for (int i = 0; i < 10; i++) {
            futures.push_back(std::async(std::launch::async, taskFunction, i));
        }
        for (auto& future : futures) {
            future.get(); // ждём завершения задачи
        }
        return 0;
    }`,
    description: "Программа, которая использует пул потоков для выполнения задач.",
    next: 44
},

// Задача 44. Производитель-потребитель
{
    code: `#include <iostream>
    #include <queue>
    #include <thread>
    #include <mutex>
    #include <condition_variable>

    class ProducerConsumer {
    private:
        std::queue<int> q;
        const unsigned int LIMIT = 5;
        std::mutex mtx;
        std::condition_variable cv;

    public:
        void Producer() {
            for (int i = 0; i < 10; i++) {
                std::unique_lock<std::mutex> lock(mtx);
                cv.wait(lock, [this]() { return q.size() < LIMIT; }); // ждёт, пока очередь не станет < LIMIT
                q.push(i);
                std::cout << "Производитель добавил: " << i << std::endl;
                cv.notify_all(); // уведомляем о наличии нового элемента
            }
        }

        void Consumer() {
            for (int i = 0; i < 10; i++) {
                std::unique_lock<std::mutex> lock(mtx);
                cv.wait(lock, [this]() { return !q.empty(); }); // ждёт, пока очередь не станет непустой
                int value = q.front();
                q.pop();
                std::cout << "Потребитель забрал: " << value << std::endl;
                cv.notify_all(); // уведомляем о наличии свободного места
            }
        }
    };

    int main() {
        ProducerConsumer pc;
        std::thread producer(&ProducerConsumer::Producer, &pc);
        std::thread consumer(&ProducerConsumer::Consumer, &pc);
        producer.join();
        consumer.join();
        return 0;
    }`,
    description: "Программа, которая реализует паттерн 'производитель-потребитель' с использованием многопоточности.",
    next: 45
},

// Задача 45. Deadlock
{
    code: `#include <iostream>
    #include <thread>
    #include <mutex>

    class DeadlockExample {
    private:
        std::mutex lock1;
        std::mutex lock2;

    public:
        void Thread1() {
            std::lock_guard<std::mutex> l1(lock1);
            std::cout << "Thread 1: Holding lock 1..." << std::endl;
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            std::lock_guard<std::mutex> l2(lock2);
            std::cout << "Thread 1: Acquired lock 2!" << std::endl;
        }

        void Thread2() {
            std::lock_guard<std::mutex> l2(lock2);
            std::cout << "Thread 2: Holding lock 2..." << std::endl;
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            std::lock_guard<std::mutex> l1(lock1);
            std::cout << "Thread 2: Acquired lock 1!" << std::endl;
        }
    };

    int main() {
        DeadlockExample example;
        std::thread t1(&DeadlockExample::Thread1, &example);
        std::thread t2(&DeadlockExample::Thread2, &example);
        t1.join();
        t2.join();
        return 0;
    }`,
    description: "Программа, которая демонстрирует ситуацию deadlock (взаимной блокировки).",
    next: 46
},

// Задача 46. Класс "Счет"
{
    code: `#include <iostream>

    class Account {
    private:
        double balance;

    public:
        Account(double initialBalance) {
            balance = initialBalance;
        }

        void Deposit(double amount) {
            balance += amount;
        }

        void Withdraw(double amount) {
            balance -= amount;
        }

        double GetBalance() {
            return balance;
        }
    };

    int main() {
        Account account(1000);
        account.Deposit(500);
        account.Withdraw(300);
        std::cout << "Баланс: " << account.GetBalance() << std::endl;
        return 0;
    }`,
    description: "Класс `Account`, который имеет методы `Deposit`, `Withdraw` и `GetBalance`.",
    next: 47
},

// Задача 47. Наследование
{
    code: `#include <iostream>

    class Animal {
    public:
        virtual void MakeSound() {
            std::cout << "Животное издает звук." << std::endl;
        }
    };

    class Dog : public Animal {
    public:
        void MakeSound() override {
            std::cout << "Гав!" << std::endl;
        }
    };

    class Cat : public Animal {
    public:
        void MakeSound() override {
            std::cout << "Мяу!" << std::endl;
        }
    };

    int main() {
        Animal* dog = new Dog();
        Animal* cat = new Cat();
        dog->MakeSound();
        cat->MakeSound();
        delete dog;
        delete cat;
        return 0;
    }`,
    description: "Программа, демонстрирующая наследование и переопределение метода `MakeSound`.",
    next: 48
},

// Задача 48. Интерфейсы
{
    code: `#include <iostream>

    class IDrawable {
    public:
        virtual void Draw() = 0; // Чисто виртуальная функция
    };

    class Circle : public IDrawable {
    public:
        void Draw() override {
            std::cout << "Рисуем круг." << std::endl;
        }
    };

    class Rectangle : public IDrawable {
    public:
        void Draw() override {
            std::cout << "Рисуем прямоугольник." << std::endl;
        }
    };

    int main() {
        IDrawable* circle = new Circle();
        IDrawable* rectangle = new Rectangle();
        circle->Draw();
        rectangle->Draw();
        delete circle;
        delete rectangle;
        return 0;
    }`,
    description: "Программа, которая создает интерфейс `IDrawable` с методом `Draw` и реализует его в классах `Circle` и `Rectangle`.",
    next: 49
},

// Задача 49. Полиморфизм
{
    code: `#include <iostream>

    class Animal {
    public:
        virtual void MakeSound() {
            std::cout << "Животное издает звук." << std::endl;
        }
    };

    class Dog : public Animal {
    public:
        void MakeSound() override {
            std::cout << "Гав!" << std::endl;
        }
    };

    class Cat : public Animal {
    public:
        void MakeSound() override {
            std::cout << "Мяу!" << std::endl;
        }
    };

    int main() {
        Animal* myDog = new Dog();
        Animal* myCat = new Cat();
        myDog->MakeSound();
        myCat->MakeSound();
        delete myDog;
        delete myCat;
        return 0;
    }`,
    description: "Программа, демонстрирующая полиморфизм через переопределение методов.",
    next: 50
},

// Задача 50. Шаблон проектирования "Синглтон"
{
    code: `#include <iostream>

    class Database {
    private:
        static Database* instance;

        Database() {}

    public:
        static Database* GetInstance() {
            if (instance == nullptr) {
                instance = new Database();
            }
            return instance;
        }

        void Connect() {
            std::cout << "Подключение к базе данных." << std::endl;
        }
    };

    Database* Database::instance = nullptr;

    int main() {
        Database* db1 = Database::GetInstance();
        Database* db2 = Database::GetInstance();
        db1->Connect();
        std::cout << (db1 == db2 ? "Это один и тот же экземпляр." : "Это разные экземпляры.") << std::endl; // выводит, что это один и тот же экземпляр
        return 0;
    }`,
    description: "Программа, реализующая шаблон проектирования 'Синглтон' для класса `Database`.",
    next: null
}
];