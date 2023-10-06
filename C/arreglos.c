#include <iostream>
using namespace std;

int main() {
    // Declarar un arreglo de enteros
    int numeros[] = {1, 2, 3, 4, 5};

    // Calcular la suma de los elementos del arreglo
    int suma = 0;
    for (int i = 0; i < 5; i++) {
        suma += numeros[i];
    }

    // Mostrar la suma
    cout << "Suma de los elementos del arreglo: " << suma << endl;

    return 0;
}
