#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> pila;

    // Insertar elementos en la pila
    pila.push(1);
    pila.push(2);
    pila.push(3);

    // Mostrar el elemento superior de la pila
    cout << "Elemento superior de la pila: " << pila.top() << endl;

    // Eliminar el elemento superior de la pila
    pila.pop();

    // Mostrar el elemento superior de la pila después de la eliminación
    cout << "Elemento superior de la pila después de la eliminación: " << pila.top() << endl;

    // Comprobar si la pila está vacía
    if (pila.empty()) {
        cout << "La pila está vacía." << endl;
    } else {
        cout << "La pila no está vacía." << endl;
    }

    return 0;
}
