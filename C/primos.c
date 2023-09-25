#include <iostream>
using namespace std;

bool esPrimo(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;

    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }

    return true;
}

int main() {
    int limite;
    cout << "Introduce un número límite para encontrar números primos: ";
    cin >> limite;

    cout << "Números primos hasta " << limite << ":" << endl;
    for (int i = 2; i <= limite; i++) {
        if (esPrimo(i)) {
            cout << i << " ";
        }
    }
    cout << endl;

    return 0;
}
