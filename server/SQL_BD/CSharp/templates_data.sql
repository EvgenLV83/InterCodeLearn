INSERT INTO CSharp_templates (example_id, codeP) VALUES
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