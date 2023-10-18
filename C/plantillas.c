#include <iostream>
using namespace std;

template <class T>
T suma(T a, T b) {
    return a + b;
}

int main() {
    int num1 = 5, num2 = 10;
    double decimal1 = 3.5, decimal2 = 2.7;

    cout << "Suma de números enteros: " << suma(num1, num2) << endl;
    cout << "Suma de números decimales: " << suma(decimal1, decimal2) << endl;

    return 0;
}
