const examples = [
// Задача 1. Hello, World!
{
    code: `
    console.log("Hello, World!");
    `,
    description: "Простейший пример программы, выводящей 'Hello, World!' на консоль.",
    next: 1
},

// Задача 2. Сумма двух чисел
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите первое число: ", (num1) => {
        readline.question("Введите второе число: ", (num2) => {
            console.log("Сумма: " + (parseInt(num1) + parseInt(num2)));
            readline.close();
        });
    });
    `,
    description: "Программа, которая принимает два числа и выводит их сумму.",
    next: 2
},

// Задача 3. Четное или нечетное
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите число: ", (num) => {
        if (num % 2 === 0) {
            console.log(num + " - четное число.");
        } else {
            console.log(num + " - нечетное число.");
        }
        readline.close();
    });
    `,
    description: "Программа, которая проверяет, является ли число четным или нечетным.",
    next: 3
},

// Задача 4. Факториал числа
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите число: ", (num) => {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        console.log("Факториал " + num + " = " + factorial);
        readline.close();
    });
    `,
    description: "Программа, которая вычисляет факториал числа.",
    next: 4
},

// Задача 5. Таблица умножения
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите число для таблицы умножения: ", (num) => {
        for (let i = 1; i <= 10; i++) {
            console.log(num + " x " + i + " = " + (num * i));
        }
        readline.close();
    });
    `,
    description: "Программа, которая выводит таблицу умножения для числа, введенного пользователем.",
    next: 5
},

// Задача 6. Проверка палиндрома
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите строку: ", (input) => {
        const reversed = input.split('').reverse().join('');
        if (input === reversed) {
            console.log(input + " - палиндром.");
        } else {
            console.log(input + " - не палиндром.");
        }
        readline.close();
    });
    `,
    description: "Программа, которая проверяет, является ли строка палиндромом.",
    next: 6
},

// Задача 7. Наибольший общий делитель (НОД)
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите первое число: ", (a) => {
        readline.question("Введите второе число: ", (b) => {
            a = parseInt(a);
            b = parseInt(b);
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            console.log("Наибольший общий делитель: " + a);
            readline.close();
        });
    });
    `,
    description: "Программа, которая находит наибольший общий делитель двух чисел.",
    next: 7
},

// Задача 8. Простые числа
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите число: ", (num) => {
        let isPrime = true;
        num = parseInt(num);
        if (num <= 1) isPrime = false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num + " - простое число.");
        } else {
            console.log(num + " - не простое число.");
        }
        readline.close();
    });
    `,
    description: "Программа, которая проверяет, является ли число простым.",
    next: 8
},

// Задача 9. Сумма цифр числа
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите число: ", (num) => {
        num = parseInt(num);
        let sum = 0;
        while (num !== 0) {
            sum += num % 10; // добавляем последнюю цифру к сумме
            num = Math.floor(num / 10); // убираем последнюю цифру
        }
        console.log("Сумма цифр: " + sum);
        readline.close();
    });
    `,
    description: "Программа, которая вычисляет сумму цифр числа.",
    next: 9
},

// Задача 10. Переворот строки
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите строку: ", (input) => {
        const reversed = input.split('').reverse().join('');
        console.log("Перевернутая строка: " + reversed);
        readline.close();
    });
    `,
    description: "Программа, которая переворачивает строку.",
    next: 11
},

// Задача 11. Поиск минимального и максимального элемента в массиве
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите размер массива: ", (n) => {
        const array = [];
        let count = 0;
        function readArray() {
            if (count < n) {
                readline.question("Введите элемент массива: ", (elem) => {
                    array.push(parseInt(elem));
                    count++;
                    readArray();
                });
            } else {
                let min = array[0];
                let max = array[0];
                for (let i = 1; i < n; i++) {
                    if (array[i] < min) {
                        min = array[i];
                    }
                    if (array[i] > max) {
                        max = array[i];
                    }
                }
                console.log("Минимальный элемент: " + min);
                console.log("Максимальный элемент: " + max);
                readline.close();
            }
        }
        readArray();
    });
    `,
    description: "Программа, которая находит минимальный и максимальный элементы в массиве.",
    next: 12
},

// Задача 12. Сортировка массива
{
    code: `
    const array = [64, 34, 25, 12, 22, 11, 90];
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // меняем элементы местами
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log("Отсортированный массив: " + array.join(" "));
    `,
    description: "Программа, которая сортирует массив чисел (пузырьковая сортировка).",
    next: 13
},

// Задача 13. Бинарный поиск
{
    code: `
    function binarySearch(array, left, right, key) {
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (array[mid] === key) {
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

    const array = [2, 3, 4, 10, 40];
    const key = 10;
    const result = binarySearch(array, 0, array.length - 1, key);
    if (result === -1) {
        console.log("Элемент не найден.");
    } else {
        console.log("Элемент найден на индексе: " + result);
    }
    `,
    description: "Программа, которая реализует бинарный поиск в отсортированном массиве.",
    next: 14
},

// Задача 14. Числа Фибоначчи
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите количество чисел Фибоначчи: ", (n) => {
        let a = 0, b = 1;
        let output = "Числа Фибоначчи: " + a + " " + b;
        for (let i = 2; i < n; i++) {
            let next = a + b;
            output += " " + next;
            a = b;
            b = next;
        }
        console.log(output);
        readline.close();
    });
    `,
    description: "Программа, которая выводит первые `n` чисел Фибоначчи.",
    next: 15
},

// Задача 15. Проверка на анаграмму
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите первое слово: ", (str1) => {
        readline.question("Введите второе слово: ", (str2) => {
            const sortedStr1 = str1.split('').sort().join('');
            const sortedStr2 = str2.split('').sort().join('');
            
            if (sortedStr1 === sortedStr2) {
                console.log("Слова являются анаграммами.");
            } else {
                console.log("Слова не являются анаграммами.");
            }
            readline.close();
        });
    });
    `,
    description: "Программа, которая проверяет, являются ли две строки анаграммами.",
    next: 16
},

// Задача 16. Подсчет гласных и согласных
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите строку: ", (input) => {
        let vowels = 0, consonants = 0;
        for (let ch of input) {
            if (/^[a-zA-Z]$/.test(ch)) {
                if ('AEIOUaeiou'.includes(ch)) {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }
        console.log("Количество гласных: " + vowels);
        console.log("Количество согласных: " + consonants);
        readline.close();
    });
    `,
    description: "Программа, которая подсчитывает количество гласных и согласных в строке.",
    next: 17
},

// Задача 17. Удаление дубликатов из массива
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите количество элементов: ", (n) => {
        const array = [];
        let count = 0;
        
        function readArray() {
            if (count < n) {
                readline.question("Введите элемент массива: ", (elem) => {
                    array.push(parseInt(elem));
                    count++;
                    readArray();
                });
            } else {
                const unique = [...new Set(array)];
                console.log("Массив без дубликатов: " + unique.join(" "));
                readline.close();
            }
        }
        readArray();
    });
    `,
    description: "Программа, которая удаляет дубликаты из массива.",
    next: 18
},

// Задача 18. Поиск второго по величине элемента
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите количество элементов: ", (n) => {
        const array = [];
        let count = 0;

        function readArray() {
            if (count < n) {
                readline.question("Введите элемент массива: ", (elem) => {
                    array.push(parseInt(elem));
                    count++;
                    readArray();
                });
            } else {
                let largest = null; 
                let secondLargest = null;

                for (let num of array) {
                    if (largest === null || num > largest) {
                        secondLargest = largest;
                        largest = num;
                    } else if (secondLargest === null || (num > secondLargest && num < largest)) {
                        secondLargest = num;
                    }
                }

                if (secondLargest === null) {
                    console.log("Нет второго по величине элемента.");
                } else {
                    console.log("Второй по величине элемент: " + secondLargest);
                }
                readline.close();
            }
        }
        readArray();
    });
    `,
    description: "Программа, которая находит второй по величине элемент в массиве.",
    next: 19
},

// Задача 19. Проверка на простое число (оптимизация)
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите число: ", (num) => {
        let isPrime = true;
        num = parseInt(num);
        if (num <= 1) isPrime = false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num + " - простое число.");
        } else {
            console.log(num + " - не простое число.");
        }
        readline.close();
    });
    `,
    description: "Оптимизированная программа для проверки простого числа.",
    next: 20
},

// Задача 20. Шифр Цезаря
{
    code: `
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Введите текст: ", (text) => {
        readline.question("Введите сдвиг: ", (shift) => {
            let cipherText = "";
            for (let ch of text) {
                if (/[a-zA-Z]/.test(ch)) {
                    const base = ch === ch.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
                    cipherText += String.fromCharCode(((ch.charCodeAt(0) + parseInt(shift) - base) % 26) + base);
                } else {
                    cipherText += ch;
                }
            }
            console.log("Шифрованный текст: " + cipherText);
            readline.close();
        });
    });
    `,
    description: "Программа, которая шифрует текст с помощью шифра Цезаря.",
    next: 21
},

// Задача 21. Реализация стека
{
    code: `
    class Stack {
        constructor() {
            this.stack = [];
            this.top = -1;
        }

        push(value) {
            this.stack.push(value);
            this.top++;
        }

        pop() {
            if (this.top < 0) return null;
            this.top--;
            return this.stack.pop();
        }

        getTop() {
            if (this.top < 0) return null;
            return this.stack[this.top];
        }
    }

    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log("Элемент на вершине стека: " + stack.getTop());
    console.log("Удаляем элемент: " + stack.pop());
    console.log("Элемент на вершине стека после удаления: " + stack.getTop());
    `,
    description: "Программа, реализующая структуру данных 'стек' с методами push, pop и top.",
    next: 22
},

// Задача 22. Реализация очереди
{
    code: `
    class Queue {
        constructor() {
            this.queue = [];
        }

        enqueue(value) {
            this.queue.push(value);
        }

        dequeue() {
            if (this.queue.length === 0) return null;
            return this.queue.shift();
        }

        front() {
            if (this.queue.length === 0) return null;
            return this.queue[0];
        }
    }

    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log("Первый элемент в очереди: " + queue.front());
    console.log("Удаляем элемент: " + queue.dequeue());
    console.log("Первый элемент в очереди после удаления: " + queue.front());
    `,
    description: "Программа, реализующая структуру данных 'очередь' с методами enqueue, dequeue и front.",
    next: 23
},

// Задача 23. Реализация связного списка
{
    code: `
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }

    class LinkedList {
        constructor() {
            this.head = null;
        }

        add(data) {
            const newNode = new Node(data);
            if (this.head === null) {
                this.head = newNode;
                return;
            }
            let last = this.head;
            while (last.next !== null) {
                last = last.next;
            }
            last.next = newNode;
        }

        print() {
            let current = this.head;
            while (current !== null) {
                process.stdout.write(current.data + " ");
                current = current.next;
            }
            console.log();
        }
    }

    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.print();
    `,
    description: "Программа, реализующая односвязный список с методами Add и Print.",
    next: 24
},

// Задача 24. Поиск в глубину (DFS)
{
    code: `
    class Graph {
        constructor() {
            this.adjList = {};
        }

        addEdge(v, w) {
            if (!this.adjList[v]) {
                this.adjList[v] = [];
            }
            this.adjList[v].push(w);
        }

        dfs(start) {
            const visited = {};
            this.dfsHelper(start, visited);
        }

        dfsHelper(v, visited) {
            visited[v] = true;
            process.stdout.write(v + " ");
            const neighbors = this.adjList[v] || [];
            for (const neighbor of neighbors) {
                if (!visited[neighbor]) {
                    this.dfsHelper(neighbor, visited);
                }
            }
        }
    }

    const g = new Graph();
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    g.addEdge(3, 5);
    console.log("Поиск в глубину начиная с 1:");
    g.dfs(1);
    console.log();
    `,
    description: "Программа, реализующая алгоритм поиска в глубину для обхода графа.",
    next: 25
},

// Задача 25. Поиск в ширину (BFS)
{
    code: `
    class Graph {
        constructor() {
            this.adjList = {};
        }

        addEdge(v, w) {
            if (!this.adjList[v]) {
                this.adjList[v] = [];
            }
            this.adjList[v].push(w);
        }

        bfs(start) {
            const visited = {};
            const queue = [];
            visited[start] = true;
            queue.push(start);

            while (queue.length > 0) {
                const v = queue.shift();
                process.stdout.write(v + " ");
                const neighbors = this.adjList[v] || [];
                for (const neighbor of neighbors) {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        queue.push(neighbor);
                    }
                }
            }
        }
    }

    const g = new Graph();
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    g.addEdge(3, 5);
    console.log("Поиск в ширину начиная с 1:");
    g.bfs(1);
    console.log();
    `,
    description: "Программа, реализующая алгоритм поиска в ширину для обхода графа.",
    next: 26
},

// Задача 26. Алгоритм Дейкстры
{
    code: `
    class Graph {
        constructor(numVertices) {
            this.numVertices = numVertices;
            this.edges = Array.from({ length: numVertices }, () => []);
        }

        addEdge(source, destination, weight) {
            this.edges[source].push({ destination, weight });
        }

        dijkstra(start) {
            const distances = Array(this.numVertices).fill(Infinity);
            distances[start] = 0;
            const visited = new Set();

            for (let i = 0; i < this.numVertices; i++) {
                const minIndex = this.getMinIndex(distances, visited);
                visited.add(minIndex);

                for (const neighbor of this.edges[minIndex]) {
                    if (!visited.has(neighbor.destination)) {
                        const newDist = distances[minIndex] + neighbor.weight;
                        if (newDist < distances[neighbor.destination]) {
                            distances[neighbor.destination] = newDist;
                        }
                    }
                }
            }

            console.log("Расстояния от начальной вершины " + start + ":");
            for (let i = 0; i < this.numVertices; i++) {
                console.log('Vertex \${i}: \${distances[i]}');
            }
        }

        getMinIndex(distances, visited) {
            let min = Infinity;
            let minIndex = -1;
            for (let i = 0; i < distances.length; i++) {
                if (!visited.has(i) && distances[i] < min) {
                    min = distances[i];
                    minIndex = i;
                }
            }
            return minIndex;
        }
    }

    const g = new Graph(4);
    g.addEdge(0, 1, 1);
    g.addEdge(0, 2, 4);
    g.addEdge(1, 2, 2);
    g.addEdge(1, 3, 6);
    g.addEdge(2, 3, 3);
    console.log("Алгоритм Дейкстры:");
    g.dijkstra(0);


    `,
    description: "Программа, реализующая алгоритм Дейкстры для поиска кратчайшего пути в графе.",
    next: 27
},

// Задача 27. Сортировка слиянием (Merge Sort)
{
    code: `
    function merge(array, left, mid, right) {
        const n1 = mid - left + 1;
        const n2 = right - mid;

        const L = array.slice(left, mid + 1);
        const R = array.slice(mid + 1, right + 1);

        let i = 0, j = 0, k = left;

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

    function mergeSort(array, left, right) {
        if (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            mergeSort(array, left, mid);
            mergeSort(array, mid + 1, right);
            merge(array, left, mid, right);
        }
        return array;
    }

    const array = [12, 11, 13, 5, 6, 7];
    console.log("Несортированный массив: " + array.join(" "));
    mergeSort(array, 0, array.length - 1);
    console.log("Отсортированный массив: " + array.join(" "));
    `,
    description: "Программа, реализующая алгоритм сортировки слиянием.",
    next: 28
},

// Задача 28. Быстрая сортировка (Quick Sort)
{
    code: `
    function partition(array, low, high) {
        const pivot = array[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]]; // меняем местами
            }
        }
        [array[i + 1], array[high]] = [array[high], array[i + 1]]; // меняем местами
        return i + 1;
    }

    function quickSort(array, low, high) {
        if (low < high) {
            const pi = partition(array, low, high);
            quickSort(array, low, pi - 1);
            quickSort(array, pi + 1, high);
        }
    }

    const array = [12, 11, 13, 5, 6, 7];
    console.log("Несортированный массив: " + array.join(" "));
    quickSort(array, 0, array.length - 1);
    console.log("Отсортированный массив: " + array.join(" "));
    `,
    description: "Программа, реализующая алгоритм быстрой сортировки.",
    next: 29
},

// Задача 29. Ханойские башни
{
    code: `
    function solveHanoi(n, from, to, aux) {
        if (n === 1) {
            console.log("Переместить диск 1 с " + from + " на " + to);
            return;
        }
        solveHanoi(n - 1, from, aux, to);
        console.log("Переместить диск " + n + " с " + from + " на " + to);
        solveHanoi(n - 1, aux, to, from);
    }

    const n = 3; // количество дисков
    solveHanoi(n, 'A', 'C', 'B'); // A, C, B - имена стержней
    `,
    description: "Программа, которая решает задачу 'Ханойские башни' с использованием рекурсии.",
    next: 30
},

// Задача 30. Поиск подстроки (алгоритм Кнута-Морриса-Пратта)
{
    code: `
    function computeLPSArray(pattern) {
        const lps = Array(pattern.length).fill(0);
        let len = 0;
        let i = 1;
        while (i < pattern.length) {
            if (pattern[i] === pattern[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len !== 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }

    function KMPSearch(pattern, text) {
        const M = pattern.length;
        const N = text.length;
        const lps = computeLPSArray(pattern);
        let i = 0; // индекс для текст
        let j = 0; // индекс для паттерна
        while (i < N) {
            if (pattern[j] === text[i]) {
                i++;
                j++;
            }
            if (j === M) {
                console.log("Найдено в индексе " + (i - j));
                j = lps[j - 1];
            } else if (i < N && pattern[j] !== text[i]) {
                if (j !== 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
    }

    const text = "ABABDABACDABABCABAB";
    const pattern = "ABAB";
    KMPSearch(pattern, text);
    `,
    description: "Программа, реализующая алгоритм Кнута-Морриса-Пратта для поиска подстроки в строке.",
    next: 31
},

// Задача 31. Чтение и запись файла
{
    code: `
    const fs = require('fs');

    const content = "Hello, World!";
    fs.writeFileSync("output.txt", content);
    console.log("Данные записаны в файл.");

    const readContent = fs.readFileSync("output.txt", 'utf8');
    console.log("Содержимое файла: " + readContent);
    `,
    description: "Программа, которая читает данные из файла и записывает их в другой файл.",
    next: 32
},

// Задача 32. Подсчет слов в файле
{
    code: `
    const fs = require('fs');

    const data = fs.readFileSync("input.txt", 'utf8');
    const words = data.split(/\s+/);
    const wordCount = words.length;
    console.log("Количество слов: " + wordCount);
    `,
    description: "Программа, которая подсчитывает количество слов в текстовом файле.",
    next: 33
},

// Задача 33. Поиск самого длинного слова в файле
{
    code: `
    const fs = require('fs');

    const data = fs.readFileSync("input.txt", 'utf8');
    const words = data.split(/\s+/);
    let longestWord = "";
    
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    console.log("Самое длинное слово: " + longestWord);
    `,
    description: "Программа, которая находит самое длинное слово в текстовом файле.",
    next: 34
},

// Задача 34. HTTP-запрос
{
    code: `
    const axios = require('axios');

    async function makeRequest() {
        try {
            const response = await axios.get('http://www.example.com');
            console.log("Response Code: " + response.status);
            console.log("Response: " + response.data);
        } catch (error) {
            console.error(error);
        }
    }

    makeRequest();
    `,
    description: "Программа, которая отправляет HTTP-запрос на сервер и выводит ответ.",
    next: 35
},

// Задача 35. Парсинг JSON
{
    code: `
    const fs = require('fs');

    const data = fs.readFileSync("data.json", 'utf8');
    const jsonObject = JSON.parse(data);
    const name = jsonObject.name;
    const age = jsonObject.age;
    console.log("Имя: " + name);
    console.log("Возраст: " + age);
    `,
    description: "Программа, которая читает JSON-файл и извлекает из него данные.",
    next: 36
},

// Задача 36. Реализация хэш-таблицы
{
    code: `
    let map = new Map();
    map.set("Alice", 25);
    map.set("Bob", 30);
    console.log("Alice: " + map.get("Alice"));
    map.delete("Bob");

    console.log("Содержимое таблицы:");
    for (let [key, value] of map) {
        console.log(key + ": " + value);
    }
    `,
    description: "Программа, реализующая хэш-таблицу с методами Add, Get и Remove.",
    next: 37
},

// Задача 37. Реализация бинарного дерева
{
    code: `
    class TreeNode {
        constructor(item) {
            this.value = item;
            this.left = null;
            this.right = null;
        }
    }

    class BinaryTree {
        constructor() {
            this.root = null;
        }

        insert(value) {
            this.root = this.insertRec(this.root, value);
        }

        insertRec(root, value) {
            if (root === null) {
                return new TreeNode(value);
            }
            if (value < root.value) {
                root.left = this.insertRec(root.left, value);
            } else if (value > root.value) {
                root.right = this.insertRec(root.right, value);
            }
            return root;
        }

        inorder() {
            this.inorderRec(this.root);
            console.log();
        }

        inorderRec(root) {
            if (root !== null) {
                this.inorderRec(root.left);
                process.stdout.write(root.value + " ");
                this.inorderRec(root.right);
            }
        }
    }

    const tree = new BinaryTree();
    tree.insert(50);
    tree.insert(30);
    tree.insert(20);
    tree.insert(40);
    tree.insert(70);
    tree.insert(60);
    tree.insert(80);
    console.log("Индредный обход дерева: ");
    tree.inorder();
    `,
    description: "Программа, реализующая бинарное дерево с методами Insert и Inorder.",
    next: 38
},

// Задача 38. Обход дерева (in-order, pre-order, post-order)
{
    code: `
    class TreeNode {
        constructor(item) {
            this.value = item;
            this.left = null;
            this.right = null;
        }
    }

    class BinaryTree {
        constructor() {
            this.root = null;
        }

        insert(value) {
            this.root = this.insertRec(this.root, value);
        }

        insertRec(root, value) {
            if (root === null) {
                return new TreeNode(value);
            }
            if (value < root.value) {
                root.left = this.insertRec(root.left, value);
            } else if (value > root.value) {
                root.right = this.insertRec(root.right, value);
            }
            return root;
        }

        inorder() {
            this.inorderRec(this.root);
            console.log();
        }

        preorder() {
            this.preorderRec(this.root);
            console.log();
        }

        postorder() {
            this.postorderRec(this.root);
            console.log();
        }

        inorderRec(root) {
            if (root !== null) {
                this.inorderRec(root.left);
                process.stdout.write(root.value + " ");
                this.inorderRec(root.right);
            }
        }

        preorderRec(root) {
            if (root !== null) {
                process.stdout.write(root.value + " ");
                this.preorderRec(root.left);
                this.preorderRec(root.right);
            }
        }

        postorderRec(root) {
            if (root !== null) {
                this.postorderRec(root.left);
                this.postorderRec(root.right);
                process.stdout.write(root.value + " ");
            }
        }
    }

    const tree = new BinaryTree();
    tree.insert(50);
    tree.insert(30);
    tree.insert(20);
    tree.insert(40);
    tree.insert(70);
    tree.insert(60);
    tree.insert(80);
    console.log("Индредный обход:\n");
    tree.inorder();
    console.log("Предварительный обход:\n");
    tree.preorder();
    console.log("Постоянный обход:\n");
    tree.postorder();
    `,
    description: "Программа, реализующая три способа обхода бинарного дерева.",
    next: 39
},

// Задача 39. Алгоритм Флойда-Уоршелла
{
    code: `
    class FloydWarshall {
        constructor() {
            this.INF = Number.MAX_VALUE;
        }

        floydWarshallAlgorithm(graph, V) {
            let dist = JSON.parse(JSON.stringify(graph));

            for (let k = 0; k < V; k++) {
                for (let i = 0; i < V; i++) {
                    for (let j = 0; j < V; j++) {
                        if (dist[i][k] + dist[k][j] < dist[i][j]) {
                            dist[i][j] = dist[i][k] + dist[k][j];
                        }
                    }
                }
            }
            this.printSolution(dist, V);
        }

        printSolution(dist, V) {
            console.log("Кратчайший путь между двумя вершинами:");
            for (let i = 0; i < V; i++) {
                for (let j = 0; j < V; j++) {
                    if (dist[i][j] === this.INF) {
                        process.stdout.write("INF ");
                    } else {
                        process.stdout.write(dist[i][j] + " ");
                    }
                }
                console.log();
            }
        }
    }

    const graph = [
        [0, 5, Number.MAX_VALUE, 10],
        [Number.MAX_VALUE, 0, 3, Number.MAX_VALUE],
        [Number.MAX_VALUE, Number.MAX_VALUE, 0, 1],
        [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, 0]
    ];
    const fw = new FloydWarshall();
    fw.floydWarshallAlgorithm(graph, 4);
    `,
    description: "Программа, реализующая алгоритм Флойда-Уоршелла для поиска кратчайших путей в графе.",
    next: 40
},

// Задача 40. Алгоритм Краскала
{
    code: `
    class Edge {
        constructor(s, d, w) {
            this.source = s;
            this.destination = d;
            this.weight = w;
        }
    }

    class Kruskal {
        constructor(numVertices) {
            this.edges = [];
            this.parent = Array.from({ length: numVertices }, (_, i) => i);
            this.rank = Array(numVertices).fill(0);
        }

        addEdge(s, d, w) {
            this.edges.push(new Edge(s, d, w));
        }

        find(vertex) {
            if (this.parent[vertex] !== vertex) {
                this.parent[vertex] = this.find(this.parent[vertex]);
            }
            return this.parent[vertex];
        }

        union(source, destination) {
            const rootSource = this.find(source);
            const rootDestination = this.find(destination);
            if (this.rank[rootSource] > this.rank[rootDestination]) {
                this.parent[rootDestination] = rootSource;
            } else if (this.rank[rootSource] < this.rank[rootDestination]) {
                this.parent[rootSource] = rootDestination;
            } else {
                this.parent[rootDestination] = rootSource;
                this.rank[rootSource]++;
            }
        }

        kruskalMST(numVertices) {
            this.edges.sort((a, b) => a.weight - b.weight);
            const result = [];

            for (const edge of this.edges) {
                const rootSource = this.find(edge.source);
                const rootDestination = this.find(edge.destination);
                if (rootSource !== rootDestination) {
                    result.push(edge);
                    this.union(rootSource, rootDestination);
                }
            }

            console.log("Ребра в минимальном остовном дереве:");
            for (const edge of result) {
                console.log(\`\${edge.source} - \${edge.destination}: \${edge.weight}\`);
            }
        }
    }

    const g = new Kruskal(4);
    g.addEdge(0, 1, 10);
    g.addEdge(0, 2, 6);
    g.addEdge(0, 3, 5);
    g.addEdge(1, 3, 15);
    g.addEdge(2, 3, 4);
    console.log("Алгоритм Краскала:");
    g.kruskalMST(4);
    `,
    description: "Программа, реализующая алгоритм Краскала для поиска минимального остовного дерева.",
    next: 41
},

// Задача 41. Создание потоков
{
    code: `
    const { Worker, isMainThread, parentPort } = require('worker_threads');

    function threadFunction() {
        console.log("Поток " + process.pid + " запущен.");
    }

    if (isMainThread) {
        for (let i = 0; i < 5; i++) {
            const worker = new Worker(__filename);
            worker.on('exit', threadFunction);
            worker.on('message', (msg) => console.log(msg));
        }
    } else {
        threadFunction();
    }
    `,
    description: "Программа, которая создаёт несколько потоков и выполняет в них различные задачи.",
    next: 42
},

// Задача 42. Синхронизация потоков
{
    code: `
    const { Worker, isMainThread, parentPort } = require('worker_threads');
    const { Mutex } = require('async-mutex');

    class Counter {
        constructor() {
            this.count = 0;
            this.mutex = new Mutex();
        }

        async increment() {
            const release = await this.mutex.acquire();
            this.count++;
            release();
        }

        getCount() {
            return this.count;
        }
    }

    if (isMainThread) {
        const counter = new Counter();
        const promises = [];

        for (let i = 0; i < 2; i++) {
            promises.push(new Promise((resolve) => {
                const worker = new Worker(__filename);
                worker.on('message', async () => {
                    for (let j = 0; j < 1000; j++) {
                        await counter.increment();
                    }
                    resolve();
                });
            }));
        }

        Promise.all(promises).then(() => {
            console.log("Итоговое значение счетчика: " + counter.getCount());
        });
    } else {
        parentPort.postMessage('start');
    }
    `,
    description: "Программа, которая демонстрирует синхронизацию потоков с использованием мьютексов.",
    next: 43
},

// Задача 43. Пул потоков
{
    code: `
    const { Worker } = require('worker_threads');

    function taskFunction(task) {
        console.log("Задача " + task + " выполняется в потоке " + process.pid);
    }

    for (let i = 0; i < 10; i++) {
        const worker = new Worker(__filename);
        worker.on("message", (msg) => taskFunction(i));
    }
    `,
    description: "Программа, которая использует пул потоков для выполнения задач.",
    next: 44
},

// Задача 44. Производитель-потребитель
{
    code: `
    const { Worker, isMainThread, parentPort } = require('worker_threads');

    class ProducerConsumer {
        constructor(limit) {
            this.queue = [];
            this.limit = limit;
        }

        producer() {
            for (let i = 0; i < 10; i++) {
                while (this.queue.length >= this.limit) {}
                this.queue.push(i);
                console.log("Производитель добавил: " + i);
            }
        }

        consumer() {
            for (let i = 0; i < 10; i++) {
                while (this.queue.length === 0) {}
                let value = this.queue.shift();
                console.log("Потребитель забрал: " + value);
            }
        }
    }

    if (isMainThread) {
        const pc = new ProducerConsumer(5);
        const producerThread = new Worker(__filename);
        const consumerThread = new Worker(__filename);
        
        producerThread.on('message', () => pc.producer());
        consumerThread.on('message', () => pc.consumer());

        producerThread.postMessage('start');
        consumerThread.postMessage('start');
    } else {
        parentPort.on('message', (msg) => {
            if (msg === 'start') {
                if (parentPort.threadId % 2 === 0) {
                    pc.producer();
                } else {
                    pc.consumer();
                }
            }
        });
    }
    `,
    description: "Программа, которая реализует паттерн 'производитель-потребитель' с использованием многопоточности.",
    next: 45
},

// Задача 45. Deadlock
{
    code: `
    const { Worker, isMainThread, parentPort } = require('worker_threads');

    class DeadlockExample {
        constructor() {
            this.lock1 = false;
            this.lock2 = false;
        }

        thread1() {
            this.lock1 = true;
            console.log("Thread 1: Holding lock 1...");
            setTimeout(() => {
                if (this.lock2) {
                    console.log("Thread 1: Acquired lock 2!\n");
                    this.lock2 = false;
                }
            }, 100);
        }

        thread2() {
            this.lock2 = true;
            console.log("Thread 2: Holding lock 2...");
            setTimeout(() => {
                if (this.lock1) {
                    console.log("Thread 2: Acquired lock 1!\n");
                    this.lock1 = false;
                }
            }, 100);
        }
    }

    if (isMainThread) {
        const example = new DeadlockExample();
        const t1 = new Worker(__filename);
        const t2 = new Worker(__filename);
        example.thread1();
        example.thread2();
    } else {
        parentPort.postMessage('start');
    }
    `,
    description: "Программа, которая демонстрирует ситуацию deadlock (взаимной блокировки).",
    next: 46
},

// Задача 46. Класс "Счет"
{
    code: `
    class Account {
        constructor(initialBalance) {
            this.balance = initialBalance;
        }

        deposit(amount) {
            this.balance += amount;
        }

        withdraw(amount) {
            this.balance -= amount;
        }

        getBalance() {
            return this.balance;
        }
    }

    const account = new Account(1000);
    account.deposit(500);
    account.withdraw(300);
    console.log("Баланс: " + account.getBalance());
    `,
    description: "Класс `Account`, который имеет методы `Deposit`, `Withdraw` и `GetBalance`.",
    next: 47
},

// Задача 47. Наследование
{
    code: `
    class Animal {
        makeSound() {
            console.log("Животное издает звук.");
        }
    }

    class Dog extends Animal {
        makeSound() {
            console.log("Гав!");
        }
    }

    class Cat extends Animal {
        makeSound() {
            console.log("Мяу!");
        }
    }

    const dog = new Dog();
    const cat = new Cat();
    dog.makeSound();
    cat.makeSound();
    `,
    description: "Программа, демонстрирующая наследование и переопределение метода `MakeSound`.",
    next: 48
},

// Задача 48. Интерфейсы
{
    code: `
    class IDrawable {
        draw() {
            throw new Error("Метод draw() должен быть реализован.");
        }
    }

    class Circle extends IDrawable {
        draw() {
            console.log("Рисуем круг.");
        }
    }

    class Rectangle extends IDrawable {
        draw() {
            console.log("Рисуем прямоугольник.");
        }
    }

    const circle = new Circle();
    const rectangle = new Rectangle();
    circle.draw();
    rectangle.draw();
    `,
    description: "Программа, которая создает интерфейс `IDrawable` с методом `Draw` и реализует его в классах `Circle` и `Rectangle`.",
    next: 49
},

// Задача 49. Полиморфизм
{
    code: `
    class Animal {
        makeSound() {
            console.log("Животное издает звук.");
        }
    }

    class Dog extends Animal {
        makeSound() {
            console.log("Гав!");
        }
    }

    class Cat extends Animal {
        makeSound() {
            console.log("Мяу!");
        }
    }

    const myDog = new Dog();
    const myCat = new Cat();
    myDog.makeSound();
    myCat.makeSound();
    `,
    description: "Программа, демонстрирующая полиморфизм через переопределение методов.",
    next: 50
},

// Задача 50. Шаблон проектирования "Синглтон"
{
    code: `
    class Database {
        static instance;

        constructor() {
            if (Database.instance) {
                return Database.instance;
            }

            Database.instance = this;
        }

        connect() {
            console.log("Подключение к базе данных.");
        }
    }

    const db1 = new Database();
    const db2 = new Database();
    db1.connect();
    console.log(db1 === db2 ? "Это один и тот же экземпляр." : "Это разные экземпляры.");
    `,
    description: "Программа, реализующая шаблон проектирования 'Синглтон' для класса `Database`.",
    next: null
}

];