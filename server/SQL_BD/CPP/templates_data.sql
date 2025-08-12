INSERT INTO CPP_templates (example_id, codeP) VALUES
(1, 'std::cout << "{0}" << std::endl;'),
(2, 'int {2}(int {3} = {0}, int {4} = {1}) {
    return {3} + {4};
}'),
(3, 'void {2}(int {3} = {0}) {
    for (int {4} = 1; {4} <= {3}; {4}++) {
        std::cout << {4} << std::endl;
    }
}'),
(4, 'void {5}() {
    std::string {6} = "{2}";
    std::string {8} = {6};
    std::transform({8}.begin(), {8}.end(), {8}.begin(), ::toupper);
    std::string {9} = {6};
    std::transform({9}.begin(), {9}.end(), {9}.begin(), ::tolower);
    std::cout << "{0}" << {8} << std::endl;
    std::cout << "{1}" << {9} << std::endl;
}'),
(5, 'std::string {2} = "{4}";
int {7} = {6};
std::cout << "{0} " + {2} + ", Возраст: " + std::to_string({7}) << std::endl;
std::cout << "{0}" << {2} << ", Возраст: " << {7} << std::endl;'),
(6, 'double {4} = {2};
double {6} = {3};
double {8} = {4} * {6};
std::cout << "{0}" << {8} << std::endl;'),
(7, 'int {7} = {4};
if ({7} % 2 == 0) {
    std::cout << "{0}" << {7} << std::endl;
} else {
    std::cout << "{1}" << {7} << std::endl;
}'),
(8, 'int {4} = {0};
for (int {5} = 1; {5} <= {4}; {5}++) {
    if ({5} % 3 == 0) {
        std::cout << {5} << std::endl;
    }
}'),
(9, 'int {4}(int {5}, int {6}) {
    return ({5} > {6}) ? {5} : {6};
}
int {7} = {4}({2}, {3});
std::cout << "{0}" << {7} << std::endl;'),
(10, 'int {8}[] = { {2}, {3}, {4}, {5}, {6} };
int {9} = {7};
for (int {10} : {8}) {
    {9} += {10};
}
std::cout << "{0}" << {9} << std::endl;'),
(11, 'int {10}[3][3] = { { {0}, {1}, {2} }, { {3}, {4}, {5} }, { {6}, {7}, {8} } };
for (int {11} = 0; {11} < 3; {11}++) {
    for (int {12} = 0; {12} < 3; {12}++) {
        std::cout << {10}[{11}][{12}] << " ";
    }
    std::cout << std::endl;
}'),
(12, 'int {11}[2][2][2] = { { { {2}, {3} }, { {4}, {5} } }, { { {6}, {7} }, { {8}, {9} } } };
int {12} = {11}[0][0][0];
for (int {14} = 0; {14} < 2; {14}++) {
    for (int {15} = 0; {15} < 2; {15}++) {
        for (int {16} = 0; {16} < 2; {16}++) {
            if ({11}[{14}][{15}][{16}] > {12}) {
                {12} = {11}[{14}][{15}][{16}];
            }
        }
    }
}
std::cout << "{0}" << {12} << std::endl;');
