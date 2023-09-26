#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cout << "Introduce la cantidad de números que deseas ordenar: ";
    cin >> n;

    int numeros[n];
    cout << "Introduce los números separados por espacios: ";
    for (int i = 0; i < n; i++) {
        cin >> numeros[i];
    }

    sort(numeros, numeros + n);

    cout << "Números ordenados: ";
    for (int i = 0; i < n; i++) {
        cout << numeros[i] << " ";
    }
    cout << endl;

    return 0;
}
