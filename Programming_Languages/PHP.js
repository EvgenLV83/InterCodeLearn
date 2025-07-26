const example = [
// Задача 1. Hello, World!
{
    code: `<?php
    echo "Hello, World!\n";
    ?>`,
    description: "Простейший пример программы, выводящей 'Hello, World!' на консоль.",
    next: 1
},

// Задача 2. Сумма двух чисел
{
    code: `<?php
    echo "Введите первое число: ";
    $num1 = (int)fgets(STDIN);
    echo "Введите второе число: ";
    $num2 = (int)fgets(STDIN);
    echo "Сумма: " . ($num1 + $num2) . "\n";
    ?>`,
    description: "Программа, которая принимает два числа и выводит их сумму.",
    next: 2
},

// Задача 3. Четное или нечетное
{
    code: `<?php
    echo "Введите число: ";
    $num = (int)fgets(STDIN);
    if ($num % 2 == 0) {
        echo "$num - четное число.\n";
    } else {
        echo "$num - нечетное число.\n";
    }
    ?>`,
    description: "Программа, которая проверяет, является ли число четным или нечетным.",
    next: 3
},

// Задача 4. Факториал числа
{
    code: `<?php
    echo "Введите число: ";
    $num = (int)fgets(STDIN);
    $factorial = 1;
    for ($i = 1; $i <= $num; $i++) {
        $factorial *= $i;
    }
    echo "Факториал $num = $factorial\n";
    ?>`,
    description: "Программа, которая вычисляет факториал числа.",
    next: 4
},

// Задача 5. Таблица умножения
{
    code: `<?php
    echo "Введите число для таблицы умножения: ";
    $num = (int)fgets(STDIN);
    for ($i = 1; $i <= 10; $i++) {
        echo "$num x $i = " . ($num * $i) . "\n";
    }
    ?>`,
    description: "Программа, которая выводит таблицу умножения для числа, введенного пользователем.",
    next: 5
},

// Задача 6. Проверка палиндрома
{
    code: `<?php
    echo "Введите строку: ";
    $input = trim(fgets(STDIN));
    $reverse = strrev($input);
    if ($input === $reverse) {
        echo "$input - палиндром.\n";
    } else {
        echo "$input - не палиндром.\n";
    }
    ?>`,
    description: "Программа, которая проверяет, является ли строка палиндромом.",
    next: 6
},

// Задача 7. Наибольший общий делитель (НОД)
{
    code: `<?php
    echo "Введите первое число: ";
    $a = (int)fgets(STDIN);
    echo "Введите второе число: ";
    $b = (int)fgets(STDIN);
    while ($b != 0) {
        $temp = $b;
        $b = $a % $b;
        $a = $temp;
    }
    echo "Наибольший общий делитель: $a\n";
    ?>`,
    description: "Программа, которая находит наибольший общий делитель двух чисел.",
    next: 7
},

// Задача 8. Простые числа
{
    code: `<?php
    echo "Введите число: ";
    $num = (int)fgets(STDIN);
    $isPrime = true;
    if ($num <= 1) $isPrime = false;
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) {
            $isPrime = false;
            break;
        }
    }
    if ($isPrime) {
        echo "$num - простое число.\n";
    } else {
        echo "$num - не простое число.\n";
    }
    ?>`,
    description: "Программа, которая проверяет, является ли число простым.",
    next: 8
},

// Задача 9. Сумма цифр числа
{
    code: `<?php
    echo "Введите число: ";
    $num = (int)fgets(STDIN);
    $sum = 0;
    while ($num != 0) {
        $sum += $num % 10; // добавляем последнюю цифру к сумме
        $num = (int)($num / 10); // убираем последнюю цифру
    }
    echo "Сумма цифр: $sum\n";
    ?>`,
    description: "Программа, которая вычисляет сумму цифр числа.",
    next: 9
},

// Задача 10. Переворот строки
{
    code: `<?php
    echo "Введите строку: ";
    $input = trim(fgets(STDIN));
    $reversed = strrev($input);
    echo "Перевернутая строка: $reversed\n";
    ?>`,
    description: "Программа, которая переворачивает строку.",
    next: 11
},

// Задача 11. Поиск минимального и максимального элемента в массиве
{
    code: `<?php
    echo "Введите размер массива: ";
    $n = (int)fgets(STDIN);
    $array = [];
    echo "Введите элементы массива:\n";
    for ($i = 0; $i < $n; $i++) {
        $array[] = (int)fgets(STDIN);
    }
    $min = $array[0];
    $max = $array[0];
    for ($i = 1; $i < $n; $i++) {
        if ($array[$i] < $min) {
            $min = $array[$i];
        }
        if ($array[$i] > $max) {
            $max = $array[$i];
        }
    }
    echo "Минимальный элемент: $min\n";
    echo "Максимальный элемент: $max\n";
    ?>`,
    description: "Программа, которая находит минимальный и максимальный элементы в массиве.",
    next: 12
},

// Задача 12. Сортировка массива
{
    code: `<?php
    $array = [64, 34, 25, 12, 22, 11, 90];
    $n = count($array);
    for ($i = 0; $i < $n - 1; $i++) {
        for ($j = 0; $j < $n - $i - 1; $j++) {
            if ($array[$j] > $array[$j + 1]) {
                // меняем элементы местами
                $temp = $array[$j];
                $array[$j] = $array[$j + 1];
                $array[$j + 1] = $temp;
            }
        }
    }
    echo "Отсортированный массив: ";
    foreach ($array as $num) {
        echo "$num ";
    }
    echo "\n";
    ?>`,
    description: "Программа, которая сортирует массив чисел (пузырьковая сортировка).",
    next: 13
},

// Задача 13. Бинарный поиск
{
    code: `<?php
    function binarySearch($array, $left, $right, $key) {
        while ($left <= $right) {
            $mid = $left + intdiv(($right - $left), 2);
            if ($array[$mid] == $key) {
                return $mid;
            }
            if ($array[$mid] < $key) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
        return -1; // элемент не найден
    }

    $array = [2, 3, 4, 10, 40];
    $key = 10;
    $result = binarySearch($array, 0, count($array) - 1, $key);
    if ($result == -1) {
        echo "Элемент не найден.\n";
    } else {
        echo "Элемент найден на индексе: $result\n";
    }
    ?>`,
    description: "Программа, которая реализует бинарный поиск в отсортированном массиве.",
    next: 14
},

// Задача 14. Числа Фибоначчи
{
    code: `<?php
    echo "Введите количество чисел Фибоначчи: ";
    $n = (int)fgets(STDIN);
    $a = 0; 
    $b = 1; 
    echo "Числа Фибоначчи: $a $b";
    for ($i = 2; $i < $n; $i++) {
        $next = $a + $b;
        echo " $next";
        $a = $b;
        $b = $next;
    }
    echo "\n";
    ?>`,
    description: "Программа, которая выводит первые `n` чисел Фибоначчи.",
    next: 15
},

// Задача 15. Проверка на анаграмму
{
    code: `<?php
    echo "Введите первое слово: ";
    $str1 = trim(fgets(STDIN));
    echo "Введите второе слово: ";
    $str2 = trim(fgets(STDIN));

    $str1 = str_split($str1);
    $str2 = str_split($str2);
    
    sort($str1);
    sort($str2);
    
    if ($str1 == $str2) {
        echo "Слова являются анаграммами.\n";
    } else {
        echo "Слова не являются анаграммами.\n";
    }
    ?>`,
    description: "Программа, которая проверяет, являются ли две строки анаграммами.",
    next: 16
},

// Задача 16. Подсчет гласных и согласных
{
    code: `<?php
    echo "Введите строку: ";
    $input = trim(fgets(STDIN));
    
    $vowels = 0; 
    $consonants = 0;
    foreach (str_split($input) as $ch) {
        if (ctype_alpha($ch)) {
            if (strpos("AEIOUaeiou", $ch) !== false) {
                $vowels++;
            } else {
                $consonants++;
            }
        }
    }
    echo "Количество гласных: $vowels\n";
    echo "Количество согласных: $consonants\n";
    ?>`,
    description: "Программа, которая подсчитывает количество гласных и согласных в строке.",
    next: 17
},

// Задача 17. Удаление дубликатов из массива
{
    code: `<?php
    echo "Введите количество элементов: ";
    $n = (int)fgets(STDIN);
    $array = [];
    echo "Введите элементы:\n";
    for ($i = 0; $i < $n; $i++) {
        $array[] = (int)fgets(STDIN);
    }
    
    $unique = array_unique($array);
    echo "Массив без дубликатов: " . implode(" ", $unique) . "\n";
    ?>`,
    description: "Программа, которая удаляет дубликаты из массива.",
    next: 18
},

// Задача 18. Поиск второго по величине элемента
{
    code: `<?php
    echo "Введите количество элементов: ";
    $n = (int)fgets(STDIN);
    $array = [];
    echo "Введите элементы:\n";
    for ($i = 0; $i < $n; $i++) {
        $array[] = (int)fgets(STDIN);
    }

    $largest = null; 
    $secondLargest = null;

    foreach ($array as $num) {
        if ($largest === null || $num > $largest) {
            $secondLargest = $largest;
            $largest = $num;
        } elseif ($secondLargest === null || ($num > $secondLargest && $num < $largest)) {
            $secondLargest = $num;
        }
    }

    if ($secondLargest === null) {
        echo "Нет второго по величине элемента.\n";
    } else {
        echo "Второй по величине элемент: $secondLargest\n";
    }
    ?>`,
    description: "Программа, которая находит второй по величине элемент в массиве.",
    next: 19
},

// Задача 19. Проверка на простое число (оптимизация)
{
    code: `<?php
    echo "Введите число: ";
    $num = (int)fgets(STDIN);
    $isPrime = true;
    if ($num <= 1) $isPrime = false;
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) {
            $isPrime = false;
            break;
        }
    }
    if ($isPrime) {
        echo "$num - простое число.\n";
    } else {
        echo "$num - не простое число.\n";
    }
    ?>`,
    description: "Оптимизированная программа для проверки простого числа.",
    next: 20
},

// Задача 20. Шифр Цезаря
{
    code: `<?php
    echo "Введите текст: ";
    $text = trim(fgets(STDIN));
    echo "Введите сдвиг: ";
    $shift = (int)fgets(STDIN);
    
    $cipherText = "";
    foreach (str_split($text) as $ch) {
        if (ctype_alpha($ch)) {
            $base = ctype_lower($ch) ? 'a' : 'A';
            $cipherText .= chr((ord($ch) + $shift - ord($base)) % 26 + ord($base));
        } else {
            $cipherText .= $ch;
        }
    }
    echo "Шифрованный текст: $cipherText\n";
    ?>`,
    description: "Программа, которая шифрует текст с помощью шифра Цезаря.",
    next: 21
},

// Задача 21. Реализация стека
{
    code: `<?php
    class Stack {
        private $stack;
        private $top;

        public function __construct() {
            $this->stack = [];
            $this->top = -1;
        }

        public function push($value) {
            array_push($this->stack, $value);
            $this->top++;
        }

        public function pop() {
            if ($this->top < 0) return null;
            $this->top--;
            return array_pop($this->stack);
        }

        public function top() {
            if ($this->top < 0) return null;
            return $this->stack[$this->top];
        }
    }

    $stack = new Stack();
    $stack->push(1);
    $stack->push(2);
    $stack->push(3);
    echo "Элемент на вершине стека: " . $stack->top() . "\n";
    echo "Удаляем элемент: " . $stack->pop() . "\n";
    echo "Элемент на вершине стека после удаления: " . $stack->top() . "\n";
    ?>`,
    description: "Программа, реализующая структуру данных 'стек' с методами push, pop и top.",
    next: 22
},

// Задача 22. Реализация очереди
{
    code: `<?php
    class Queue {
        private $queue;

        public function __construct() {
            $this->queue = [];
        }

        public function enqueue($value) {
            array_push($this->queue, $value);
        }

        public function dequeue() {
            if (empty($this->queue)) return null;
            return array_shift($this->queue);
        }

        public function front() {
            if (empty($this->queue)) return null;
            return $this->queue[0];
        }
    }

    $queue = new Queue();
    $queue->enqueue(1);
    $queue->enqueue(2);
    $queue->enqueue(3);
    echo "Первый элемент в очереди: " . $queue->front() . "\n";
    echo "Удаляем элемент: " . $queue->dequeue() . "\n";
    echo "Первый элемент в очереди после удаления: " . $queue->front() . "\n";
    ?>`,
    description: "Программа, реализующая структуру данных 'очередь' с методами enqueue, dequeue и front.",
    next: 23
},

// Задача 23. Реализация связного списка
{
    code: `<?php
    class Node {
        public $data;
        public $next;

        public function __construct($data) {
            $this->data = $data;
            $this->next = null;
        }
    }

    class LinkedList {
        public $head;

        public function __construct() {
            $this->head = null;
        }

        public function add($data) {
            $newNode = new Node($data);
            if ($this->head === null) {
                $this->head = $newNode;
                return;
            }
            $last = $this->head;
            while ($last->next !== null) {
                $last = $last->next;
            }
            $last->next = $newNode;
        }

        public function print() {
            $current = $this->head;
            while ($current !== null) {
                echo $current->data . " ";
                $current = $current->next;
            }
            echo "\n";
        }
    }

    $list = new LinkedList();
    $list->add(1);
    $list->add(2);
    $list->add(3);
    $list->print();
    ?>`,
    description: "Программа, реализующая односвязный список с методами Add и Print.",
    next: 24
},

// Задача 24. Поиск в глубину (DFS)
{
    code: `<?php
    class Graph {
        private $adjList;

        public function __construct() {
            $this->adjList = [];
        }

        public function addEdge($v, $w) {
            if (!isset($this->adjList[$v])) {
                $this->adjList[$v] = [];
            }
            $this->adjList[$v][] = $w;
        }

        public function dfs($start) {
            $visited = [];
            $this->dfsHelper($start, $visited);
        }

        private function dfsHelper($v, &$visited) {
            $visited[$v] = true;
            echo "$v ";
            foreach ($this->adjList[$v] as $neighbor) {
                if (!isset($visited[$neighbor])) {
                    $this->dfsHelper($neighbor, $visited);
                }
            }
        }
    }

    $g = new Graph();
    $g->addEdge(1, 2);
    $g->addEdge(1, 3);
    $g->addEdge(2, 4);
    $g->addEdge(3, 5);
    echo "Поиск в глубину начиная с 1:\n";
    $g->dfs(1);
    echo "\n";
    ?>`,
    description: "Программа, реализующая алгоритм поиска в глубину для обхода графа.",
    next: 25
},

// Задача 25. Поиск в ширину (BFS)
{
    code: `<?php
    class Graph {
        private $adjList;

        public function __construct() {
            $this->adjList = [];
        }

        public function addEdge($v, $w) {
            if (!isset($this->adjList[$v])) {
                $this->adjList[$v] = [];
            }
            $this->adjList[$v][] = $w;
        }

        public function bfs($start) {
            $visited = [];
            $queue = [];
            $visited[$start] = true;
            array_push($queue, $start);

            while (!empty($queue)) {
                $v = array_shift($queue);
                echo "$v ";
                foreach ($this->adjList[$v] as $neighbor) {
                    if (!isset($visited[$neighbor])) {
                        $visited[$neighbor] = true;
                        array_push($queue, $neighbor);
                    }
                }
            }
        }
    }

    $g = new Graph();
    $g->addEdge(1, 2);
    $g->addEdge(1, 3);
    $g->addEdge(2, 4);
    $g->addEdge(3, 5);
    echo "Поиск в ширину начиная с 1:\n";
    $g->bfs(1);
    echo "\n";
    ?>`,
    description: "Программа, реализующая алгоритм поиска в ширину для обхода графа.",
    next: 26
},

// Задача 26. Алгоритм Дейкстры
{
    code: `<?php
    class Graph {
        private $edges;
        private $numVertices;

        public function __construct($numVertices) {
            $this->numVertices = $numVertices;
            $this->edges = array_fill(0, $numVertices, []);
        }

        public function addEdge($source, $destination, $weight) {
            $this->edges[$source][] = ['destination' => $destination, 'weight' => $weight];
        }

        public function dijkstra($start) {
            $distances = array_fill(0, $this->numVertices, INF);
            $distances[$start] = 0;
            $isVisited = array_fill(0, $this->numVertices, false);

            for ($i = 0; $i < $this->numVertices; $i++) {
                $minDistance = INF;
                $minIndex = -1;
                for ($j = 0; $j < $this->numVertices; $j++) {
                    if (!$isVisited[$j] && $distances[$j] < $minDistance) {
                        $minDistance = $distances[$j];
                        $minIndex = $j;
                    }
                }
                $isVisited[$minIndex] = true;

                foreach ($this->edges[$minIndex] as $edge) {
                    $neighbor = $edge['destination'];
                    $weight = $edge['weight'];
                    if ($distances[$minIndex] + $weight < $distances[$neighbor]) {
                        $distances[$neighbor] = $distances[$minIndex] + $weight;
                    }
                }
            }

            echo "Расстояния от начальной вершины $start:\n";
            for ($i = 0; $i < $this->numVertices; $i++) {
                echo "Vertex $i: $distances[$i]\n";
            }
        }
    }

    $g = new Graph(4);
    $g->addEdge(0, 1, 1);
    $g->addEdge(0, 2, 4);
    $g->addEdge(1, 2, 2);
    $g->addEdge(1, 3, 6);
    $g->addEdge(2, 3, 3);
    echo "Алгоритм Дейкстры:\n";
    $g->dijkstra(0);
    ?>`,
    description: "Программа, реализующая алгоритм Дейкстры для поиска кратчайшего пути в графе.",
    next: 27
},

// Задача 27. Сортировка слиянием (Merge Sort)
{
    code: `<?php
    function merge($array, $left, $mid, $right) {
        $n1 = $mid - $left + 1;
        $n2 = $right - $mid;

        $L = array_slice($array, $left, $n1);
        $R = array_slice($array, $mid + 1, $n2);

        $i = $j = 0;
        $k = $left;

        while ($i < $n1 && $j < $n2) {
            if ($L[$i] <= $R[$j]) {
                $array[$k] = $L[$i];
                $i++;
            } else {
                $array[$k] = $R[$j];
                $j++;
            }
            $k++;
        }
        while ($i < $n1) {
            $array[$k] = $L[$i];
            $i++;
            $k++;
        }
        while ($j < $n2) {
            $array[$k] = $R[$j];
            $j++;
            $k++;
        }

        return $array;
    }

    function mergeSort($array, $left, $right) {
        if ($left < $right) {
            $mid = $left + intdiv(($right - $left), 2);
            $array = mergeSort($array, $left, $mid);
            $array = mergeSort($array, $mid + 1, $right);
            $array = merge($array, $left, $mid, $right);
        }
        return $array;
    }

    $array = [12, 11, 13, 5, 6, 7];
    echo "Несортированный массив: " . implode(" ", $array) . "\n";
    $array = mergeSort($array, 0, count($array) - 1);
    echo "Отсортированный массив: " . implode(" ", $array) . "\n";
    ?>`,
    description: "Программа, реализующая алгоритм сортировки слиянием.",
    next: 28
},

// Задача 28. Быстрая сортировка (Quick Sort)
{
    code: `<?php
    function partition(&$array, $low, $high) {
        $pivot = $array[$high];
        $i = $low - 1;
        for ($j = $low; $j < $high; $j++) {
            if ($array[$j] < $pivot) {
                $i++;
                list($array[$i], $array[$j]) = array($array[$j], $array[$i]); // меняем местами
            }
        }
        list($array[$i + 1], $array[$high]) = array($array[$high], $array[$i + 1]); // меняем местами
        return $i + 1;
    }

    function quickSort(&$array, $low, $high) {
        if ($low < $high) {
            $pi = partition($array, $low, $high);
            quickSort($array, $low, $pi - 1);
            quickSort($array, $pi + 1, $high);
        }
    }

    $array = [12, 11, 13, 5, 6, 7];
    echo "Несортированный массив: " . implode(" ", $array) . "\n";
    quickSort($array, 0, count($array) - 1);
    echo "Отсортированный массив: " . implode(" ", $array) . "\n";
    ?>`,
    description: "Программа, реализующая алгоритм быстрой сортировки.",
    next: 29
},

// Задача 29. Ханойские башни
{
    code: `<?php
    function solveHanoi($n, $from, $to, $aux) {
        if ($n == 1) {
            echo "Переместить диск 1 с $from на $to\n";
            return;
        }
        solveHanoi($n - 1, $from, $aux, $to);
        echo "Переместить диск $n с $from на $to\n";
        solveHanoi($n - 1, $aux, $to, $from);
    }

    $n = 3; // количество дисков
    solveHanoi($n, 'A', 'C', 'B'); // A, C, B - имена стержней
    ?>`,
    description: "Программа, которая решает задачу 'Ханойские башни' с использованием рекурсии.",
    next: 30
},

// Задача 30. Поиск подстроки (алгоритм Кнута-Морриса-Пратта)
{
    code: `<?php
    function computeLPSArray($pattern, &$lps) {
        $len = 0;
        $lps[0] = 0;
        $i = 1;
        while ($i < strlen($pattern)) {
            if ($pattern[$i] === $pattern[$len]) {
                $len++;
                $lps[$i] = $len;
                $i++;
            } else {
                if ($len != 0) {
                    $len = $lps[$len - 1];
                } else {
                    $lps[$i] = 0;
                    $i++;
                }
            }
        }
    }

    function KMPSearch($pattern, $text) {
        $M = strlen($pattern);
        $N = strlen($text);
        $lps = array_fill(0, $M, 0);
        computeLPSArray($pattern, $lps);
        $i = 0; // индекс для текст
        $j = 0; // индекс для паттерна
        while ($i < $N) {
            if ($pattern[$j] === $text[$i]) {
                $i++;
                $j++;
            }
            if ($j === $M) {
                echo "Найдено в индексе " . ($i - $j) . "\n";
                $j = $lps[$j - 1];
            } elseif ($i < $N && $pattern[$j] !== $text[$i]) {
                if ($j != 0) {
                    $j = $lps[$j - 1];
                } else {
                    $i++;
                }
            }
        }
    }

    $text = "ABABDABACDABABCABAB";
    $pattern = "ABAB";
    KMPSearch($pattern, $text);
    ?>`,
    description: "Программа, реализующая алгоритм Кнута-Морриса-Пратта для поиска подстроки в строке.",
    next: 31
},

// Задача 31. Чтение и запись файла
{
    code: `<?php
    $content = "Hello, World!";
    file_put_contents("output.txt", $content);
    echo "Данные записаны в файл.\n";

    $readContent = file_get_contents("output.txt");
    echo "Содержимое файла: $readContent\n";
    ?>`,
    description: "Программа, которая читает данные из файла и записывает их в другой файл.",
    next: 32
},

// Задача 32. Подсчет слов в файле
{
    code: `<?php
    $lineCount = 0;
    $wordCount = 0;
    $file = fopen("input.txt", "r");
    while ($line = fgets($file)) {
        $lineCount++;
        $words = preg_split('/\s+/', trim($line));
        $wordCount += count($words);
    }
    fclose($file);
    echo "Количество слов: $wordCount\n";
    ?>`,
    description: "Программа, которая подсчитывает количество слов в текстовом файле.",
    next: 33
},

// Задача 33. Поиск самого длинного слова в файле
{
    code: `<?php
    $longestWord = "";
    $file = fopen("input.txt", "r");
    while ($line = fgets($file)) {
        foreach (preg_split('/\s+/', trim($line)) as $word) {
            if (strlen($word) > strlen($longestWord)) {
                $longestWord = $word;
            }
        }
    }
    fclose($file);
    echo "Самое длинное слово: $longestWord\n";
    ?>`,
    description: "Программа, которая находит самое длинное слово в текстовом файле.",
    next: 34
},

// Задача 34. HTTP-запрос
{
    code: `<?php
    $url = "http://www.example.com";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    echo "Response Code: " . (int)curl_getinfo($ch, CURLINFO_HTTP_CODE) . "\n";
    echo "Response: $response\n";
    ?>`,
    description: "Программа, которая отправляет HTTP-запрос на сервер и выводит ответ.",
    next: 35
},

// Задача 35. Парсинг JSON
{
    code: `<?php
    $json = file_get_contents("data.json");
    $jsonObject = json_decode($json, true);
    $name = $jsonObject["name"];
    $age = $jsonObject["age"];
    echo "Имя: $name\n";
    echo "Возраст: $age\n";
    ?>`,
    description: "Программа, которая читает JSON-файл и извлекает из него данные.",
    next: 36
},

// Задача 36. Реализация хэш-таблицы
{
    code: `<?php
    $map = [];
    $map["Alice"] = 25;
    $map["Bob"] = 30;
    echo "Alice: " . $map["Alice"] . "\n";
    unset($map["Bob"]);
    echo "Содержимое таблицы:\n";
    foreach ($map as $key => $value) {
        echo "$key: $value\n";
    }
    ?>`,
    description: "Программа, реализующая хэш-таблицу с методами Add, Get и Remove.",
    next: 37
},

// Задача 37. Реализация бинарного дерева
{
    code: `<?php
    class TreeNode {
        public $value;
        public $left;
        public $right;

        public function __construct($item) {
            $this->value = $item;
            $this->left = null;
            $this->right = null;
        }
    }

    class BinaryTree {
        public $root;

        public function __construct() {
            $this->root = null;
        }

        public function insert($value) {
            $this->root = $this->insertRec($this->root, $value);
        }

        private function insertRec($root, $value) {
            if ($root === null) {
                return new TreeNode($value);
            }
            if ($value < $root->value) {
                $root->left = $this->insertRec($root->left, $value);
            } else if ($value > $root->value) {
                $root->right = $this->insertRec($root->right, $value);
            }
            return $root;
        }

        public function inorder() {
            $this->inorderRec($this->root);
            echo "\n";
        }

        private function inorderRec($root) {
            if ($root !== null) {
                $this->inorderRec($root->left);
                echo $root->value . " ";
                $this->inorderRec($root->right);
            }
        }
    };

    $tree = new BinaryTree();
    $tree->insert(50);
    $tree->insert(30);
    $tree->insert(20);
    $tree->insert(40);
    $tree->insert(70);
    $tree->insert(60);
    $tree->insert(80);
    echo "Индерный обход дерева: ";
    $tree->inorder();
    ?>`,
    description: "Программа, реализующая бинарное дерево с методами Insert и Inorder.",
    next: 38
},

// Задача 38. Обход дерева (in-order, pre-order, post-order)
{
    code: `<?php
    class TreeNode {
        public $value;
        public $left;
        public $right;

        public function __construct($item) {
            $this->value = $item;
            $this->left = null;
            $this->right = null;
        }
    }

    class BinaryTree {
        public $root;

        public function __construct() {
            $this->root = null;
        }

        public function insert($value) {
            $this->root = $this->insertRec($this->root, $value);
        }

        private function insertRec($root, $value) {
            if ($root === null) {
                return new TreeNode($value);
            }
            if ($value < $root->value) {
                $root->left = $this->insertRec($root->left, $value);
            } else if ($value > $root->value) {
                $root->right = $this->insertRec($root->right, $value);
            }
            return $root;
        }

        public function inorder() {
            $this->inorderRec($this->root);
            echo "\n";
        }

        public function preorder() {
            $this->preorderRec($this->root);
            echo "\n";
        }

        public function postorder() {
            $this->postorderRec($this->root);
            echo "\n";
        }

        private function inorderRec($root) {
            if ($root !== null) {
                $this->inorderRec($root->left);
                echo $root->value . " ";
                $this->inorderRec($root->right);
            }
        }

        private function preorderRec($root) {
            if ($root !== null) {
                echo $root->value . " ";
                $this->preorderRec($root->left);
                $this->preorderRec($root->right);
            }
        }

        private function postorderRec($root) {
            if ($root !== null) {
                $this->postorderRec($root->left);
                $this->postorderRec($root->right);
                echo $root->value . " ";
            }
        }
    }

    $tree = new BinaryTree();
    $tree->insert(50);
    $tree->insert(30);
    $tree->insert(20);
    $tree->insert(40);
    $tree->insert(70);
    $tree->insert(60);
    $tree->insert(80);
    echo "Индредный обход:\n";
    $tree->inorder();
    echo "Предварительный обход:\n";
    $tree->preorder();
    echo "Постоянный обход:\n";
    $tree->postorder();
    ?>`,
    description: "Программа, реализующая три способа обхода бинарного дерева.",
    next: 39
},

// Задача 39. Алгоритм Флойда-Уоршелла
{
    code: `<?php
    class FloydWarshall {
        private $INF;

        public function __construct() {
            $this->INF = PHP_INT_MAX;
        }

        public function FloydWarshallAlgorithm($graph, $V) {
            $dist = $graph;

            for ($k = 0; $k < $V; $k++) {
                for ($i = 0; $i < $V; $i++) {
                    for ($j = 0; $j < $V; $j++) {
                        if ($dist[$i][$k] + $dist[$k][$j] < $dist[$i][$j]) {
                            $dist[$i][$j] = $dist[$i][$k] + $dist[$k][$j];
                        }
                    }
                }
            }
            $this->PrintSolution($dist, $V);
        }

        public function PrintSolution($dist, $V) {
            echo "Кратчайший путь между двумя вершинами:\n";
            for ($i = 0; $i < $V; $i++) {
                for ($j = 0; $j < $V; $j++) {
                    if ($dist[$i][$j] == $this->INF) {
                        echo "INF ";
                    } else {
                        echo $dist[$i][$j] . " ";
                    }
                }
                echo "\n";
            }
        }
    }

    $graph = [
        [0, 5, PHP_INT_MAX, 10],
        [PHP_INT_MAX, 0, 3, PHP_INT_MAX],
        [PHP_INT_MAX, PHP_INT_MAX, 0, 1],
        [PHP_INT_MAX, PHP_INT_MAX, PHP_INT_MAX, 0]
    ];
    $fw = new FloydWarshall();
    $fw->FloydWarshallAlgorithm($graph, 4);
    ?>`,
    description: "Программа, реализующая алгоритм Флойда-Уоршелла для поиска кратчайших путей в графе.",
    next: 40
},

// Задача 40. Алгоритм Краскала
{
    code: `<?php
    class Edge {
        public $source, $destination, $weight;

        public function __construct($s, $d, $w) {
            $this->source = $s;
            $this->destination = $d;
            $this->weight = $w;
        }
    }

    class Kruskal {
        private $edges = [];
        private $parent;
        private $rank;

        public function __construct($numVertices) {
            $this->parent = array_fill(0, $numVertices, 0);
            $this->rank = array_fill(0, $numVertices, 0);
            for ($i = 0; $i < $numVertices; $i++) {
                $this->parent[$i] = $i;
            }
        }

        public function addEdge($s, $d, $w) {
            $this->edges[] = new Edge($s, $d, $w);
        }

        private function find($vertex) {
            if ($this->parent[$vertex] != $vertex) {
                $this->parent[$vertex] = $this->find($this->parent[$vertex]);
            }
            return $this->parent[$vertex];
        }

        private function union($source, $destination) {
            $rootSource = $this->find($source);
            $rootDestination = $this->find($destination);
            if ($this->rank[$rootSource] > $this->rank[$rootDestination]) {
                $this->parent[$rootDestination] = $rootSource;
            } else if ($this->rank[$rootSource] < $this->rank[$rootDestination]) {
                $this->parent[$rootSource] = $rootDestination;
            } else {
                $this->parent[$rootDestination] = $rootSource;
                $this->rank[$rootSource]++;
            }
        }

        public function kruskalMST($numVertices) {
            usort($this->edges, function($a, $b) {
                return $a->weight <=> $b->weight;
            });
            $result = [];

            foreach ($this->edges as $edge) {
                $rootSource = $this->find($edge->source);
                $rootDestination = $this->find($edge->destination);
                if ($rootSource !== $rootDestination) {
                    $result[] = $edge;
                    $this->union($rootSource, $rootDestination);
                }
            }

            echo "Ребра в минимальном остовном дереве:\n";
            foreach ($result as $edge) {
                echo "{$edge->source} - {$edge->destination}: {$edge->weight}\n";
            }
        }
    }

    $g = new Kruskal(4);
    $g->addEdge(0, 1, 10);
    $g->addEdge(0, 2, 6);
    $g->addEdge(0, 3, 5);
    $g->addEdge(1, 3, 15);
    $g->addEdge(2, 3, 4);
    echo "Алгоритм Краскала:\n";
    $g->kruskalMST(4);
    ?>`,
    description: "Программа, реализующая алгоритм Краскала для поиска минимального остовного дерева.",
    next: 41
},

// Задача 41. Создание потоков
{
    code: `<?php
    function threadFunction() {
        echo "Поток " . getmypid() . " запущен.\n";
    }

    for ($i = 0; $i < 5; $i++) {
        $pid = pcntl_fork();
        if ($pid === -1) {
            die("Не удалось создать поток.\n");
        } elseif ($pid === 0) {
            threadFunction();
            exit(0);
        }
        pcntl_wait($status); // ждёт завершения потока
    }
    ?>`,
    description: "Программа, которая создаёт несколько потоков и выполняет в них различные задачи.",
    next: 42
},

// Задача 42. Синхронизация потоков
{
    code: `<?php
    class Counter {
        private $count = 0;
        private $mutex;

        public function __construct() {
            $this->mutex = new Mutex();
        }

        public function increment() {
            $this->mutex->lock();
            $this->count++;
            $this->mutex->unlock();
        }

        public function getCount() {
            return $this->count;
        }
    }

    $counter = new Counter();
    $threads = [];

    for ($i = 0; $i < 2; $i++) {
        $threads[$i] = new Thread(function() use ($counter) {
            for ($j = 0; $j < 1000; $j++) {
                $counter->increment();
            }
        });
        $threads[$i]->start();
    }

    foreach ($threads as $thread) {
        $thread->join();
    }

    echo "Итоговое значение счетчика: " . $counter->getCount() . "\n";
    ?>
    `,
    description: "Программа, которая демонстрирует синхронизацию потоков с использованием мьютексов.",
    next: 43
},

// Задача 43. Пул потоков
{
    code: `<?php
    function taskFunction($task) {
        echo "Задача $task выполняется в потоке " . getmypid() . "\n";
    }

    for ($i = 0; $i < 10; $i++) {
        $pid = pcntl_fork();
        if ($pid === -1) {
            die("Не удалось создать поток.\n");
        } elseif ($pid === 0) {
            taskFunction($i);
            exit(0);
        }
    }

    for ($i = 0; $i < 10; $i++) {
        pcntl_wait($status);
    }
    ?>`,
    description: "Программа, которая использует пул потоков для выполнения задач.",
    next: 44
},

// Задача 44. Производитель-потребитель
{
    code: `<?php
    class ProducerConsumer {
        private $queue;
        private $limit;
        private $lock;

        public function __construct($limit) {
            $this->queue = [];
            $this->limit = $limit;
            $this->lock = new Semaphore(1);
        }

        public function producer() {
            for ($i = 0; $i < 10; $i++) {
                $this->lock->wait();
                while (count($this->queue) >= $this->limit) {
                    $this->lock->release(); // ждем, пока не будет место
                    usleep(50000);
                    $this->lock->wait();
                }
                $this->queue[] = $i;
                echo "Производитель добавил: $i\n";
                $this->lock->release();
                usleep(50000);
            }
        }

        public function consumer() {
            for ($i = 0; $i < 10; $i++) {
                $this->lock->wait();
                while (empty($this->queue)) {
                    $this->lock->release(); // ждем, пока не будет элемент
                    usleep(50000);
                    $this->lock->wait();
                }
                $value = array_shift($this->queue);
                echo "Потребитель забрал: $value\n";
                $this->lock->release();
                usleep(50000);
            }
        }
    }

    $pc = new ProducerConsumer(5);
    $producerThread = new Thread(function() use ($pc) {
        $pc->producer();
    });

    $consumerThread = new Thread(function() use ($pc) {
        $pc->consumer();
    });

    $producerThread->start();
    $consumerThread->start();

    $producerThread->join();
    $consumerThread->join();
    ?>`,
    description: "Программа, которая реализует паттерн 'производитель-потребитель' с использованием многопоточности.",
    next: 45
},

// Задача 45. Deadlock
{
    code: `<?php
    class DeadlockExample {
        private $lock1;
        private $lock2;

        public function __construct() {
            $this->lock1 = new Mutex();
            $this->lock2 = new Mutex();
        }

        public function thread1() {
            $this->lock1->lock();
            echo "Thread 1: Holding lock 1...\n";
            usleep(50000);
            $this->lock2->lock();
            echo "Thread 1: Acquired lock 2!\n";
            $this->lock2->unlock();
            $this->lock1->unlock();
        }

        public function thread2() {
            $this->lock2->lock();
            echo "Thread 2: Holding lock 2...\n";
            usleep(50000);
            $this->lock1->lock();
            echo "Thread 2: Acquired lock 1!\n";
            $this->lock1->unlock();
            $this->lock2->unlock();
        }
    }

    $example = new DeadlockExample();
    $t1 = new Thread([$example, 'thread1']);
    $t2 = new Thread([$example, 'thread2']);
    $t1->start();
    $t2->start();
    $t1->join();
    $t2->join();
    ?>`,
    description: "Программа, которая демонстрирует ситуацию deadlock (взаимной блокировки).",
    next: 46
},

// Задача 46. Класс "Счет"
{
    code: `<?php
    class Account {
        private $balance;

        public function __construct($initialBalance) {
            $this->balance = $initialBalance;
        }

        public function deposit($amount) {
            $this->balance += $amount;
        }

        public function withdraw($amount) {
            $this->balance -= $amount;
        }

        public function getBalance() {
            return $this->balance;
        }
    }

    $account = new Account(1000);
    $account->deposit(500);
    $account->withdraw(300);
    echo "Баланс: " . $account->getBalance() . "\n";
    ?>`,
    description: "Класс `Account`, который имеет методы `Deposit`, `Withdraw` и `GetBalance`.",
    next: 47
},

// Задача 47. Наследование
{
    code: `<?php
    class Animal {
        public function makeSound() {
            echo "Животное издает звук.\n";
        }
    }

    class Dog extends Animal {
        public function makeSound() {
            echo "Гав!\n";
        }
    }

    class Cat extends Animal {
        public function makeSound() {
            echo "Мяу!\n";
        }
    }

    $dog = new Dog();
    $cat = new Cat();
    $dog->makeSound();
    $cat->makeSound();
    ?>`,
    description: "Программа, демонстрирующая наследование и переопределение метода `MakeSound`.",
    next: 48
},

// Задача 48. Интерфейсы
{
    code: `<?php
    interface IDrawable {
        public function draw();
    }

    class Circle implements IDrawable {
        public function draw() {
            echo "Рисуем круг.\n";
        }
    }

    class Rectangle implements IDrawable {
        public function draw() {
            echo "Рисуем прямоугольник.\n";
        }
    }

    $circle = new Circle();
    $rectangle = new Rectangle();
    $circle->draw();
    $rectangle->draw();
    ?>`,
    description: "Программа, которая создает интерфейс `IDrawable` с методом `Draw` и реализует его в классах `Circle` и `Rectangle`.",
    next: 49
},

// Задача 49. Полиморфизм
{
    code: `<?php
    class Animal {
        public function makeSound() {
            echo "Животное издает звук.\n";
        }
    }

    class Dog extends Animal {
        public function makeSound() {
            echo "Гав!\n";
        }
    }

    class Cat extends Animal {
        public function makeSound() {
            echo "Мяу!\n";
        }
    }

    $myDog = new Dog();
    $myCat = new Cat();
    $myDog->makeSound();
    $myCat->makeSound();
    ?>`,
    description: "Программа, демонстрирующая полиморфизм через переопределение методов.",
    next: 50
},

// Задача 50. Шаблон проектирования "Синглтон"
{
    code: `<?php
    class Database {
        private static $instance;

        private function __construct() {}

        public static function getInstance() {
            if (self::$instance == null) {
                self::$instance = new Database();
            }
            return self::$instance;
        }

        public function connect() {
            echo "Подключение к базе данных.\n";
        }
    }

    $db1 = Database::getInstance();
    $db2 = Database::getInstance();
    $db1->connect();
    echo ($db1 === $db2 ? "Это один и тот же экземпляр.\n" : "Это разные экземпляры.\n");
    ?>`,
    description: "Программа, реализующая шаблон проектирования 'Синглтон' для класса `Database`.",
    next: null
}
];