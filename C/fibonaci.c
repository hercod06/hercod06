#include <iostream>
using namespace std;

int calcularFibonacci(int n) {
    if (n <= 1) return n;
    return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
}

int main() {
    int n;
    cout << "Introduce un número para calcular su serie de Fibonacci: ";
    cin >> n;

    if (n < 0) {
        cout << "La serie de Fibonacci no está definida para números negativos." << endl;
    } else {
        cout << "Serie de Fibonacci para " << n << " términos:" << endl;
        for (int i = 0; i < n; i++) {
            cout << calcularFibonacci(i) << " ";
        }
        cout << endl;
    }

    return 0;
}
