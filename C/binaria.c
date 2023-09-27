#include <iostream>
using namespace std;

int busquedaBinaria(int arr[], int n, int objetivo) {
    int izquierda = 0;
    int derecha = n - 1;
    
    while (izquierda <= derecha) {
        int medio = izquierda + (derecha - izquierda) / 2;
        
        if (arr[medio] == objetivo) return medio;
        
        if (arr[medio] < objetivo) izquierda = medio + 1;
        else derecha = medio - 1;
    }
    
    return -1;
}

int main() {
    int n, objetivo;
    cout << "Introduce el número de elementos en el arreglo: ";
    cin >> n;

    int arr[n];
    cout << "Introduce los elementos del arreglo en orden ascendente:" << endl;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    cout << "Introduce el número que deseas buscar: ";
    cin >> objetivo;

    int resultado = busquedaBinaria(arr, n, objetivo);

    if (resultado != -1) {
        cout << "El elemento " << objetivo << " se encuentra en la posición " << resultado << endl;
    } else {
        cout << "El elemento " << objetivo << " no se encuentra en el arreglo." << endl;
    }

    return 0;
}
