#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> cola;

    // Insertar elementos en la cola
    cola.push(1);
    cola.push(2);
    cola.push(3);

    // Mostrar el elemento frontal de la cola
    cout << "Elemento frontal de la cola: " << cola.front() << endl;

    // Eliminar el elemento frontal de la cola
    cola.pop();

    // Mostrar el elemento frontal de la cola después de la eliminación
    cout << "Elemento frontal de la cola después de la eliminación: " << cola.front() << endl;

    // Comprobar si la cola está vacía
    if (cola.empty()) {
        cout << "La cola está vacía." << endl;
    } else {
        cout << "La cola no está vacía." << endl;
    }

    return 0;
}
