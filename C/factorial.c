#include <iostream>
using namespace std;

int calcularFactorial(int n) {
    if (n == 0) return 1;
    return n * calcularFactorial(n - 1);
}

int main() {
    int numero;
    cout << "Introduce un número para calcular su factorial: ";
    cin >> numero;

    if (numero < 0) {
        cout << "El factorial no está definido para números negativos." << endl;
    } else {
        int factorial = calcularFactorial(numero);
        cout << "El factorial de " << numero << " es " << factorial << endl;
    }

    return 0;
}
