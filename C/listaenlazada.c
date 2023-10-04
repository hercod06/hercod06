#include <iostream>
using namespace std;

struct Nodo {
    int valor;
    Nodo* siguiente;
    
    Nodo(int val) : valor(val), siguiente(nullptr) {}
};

class ListaEnlazada {
public:
    ListaEnlazada() : cabeza(nullptr) {}

    // Insertar un valor al final de la lista
    void insertar(int valor) {
        Nodo* nuevoNodo = new Nodo(valor);
        if (cabeza == nullptr) {
            cabeza = nuevoNodo;
        } else {
            Nodo* actual = cabeza;
            while (actual->siguiente != nullptr) {
                actual = actual->siguiente;
            }
            actual->siguiente = nuevoNodo;
        }
    }

    // Mostrar la lista
    void mostrar() {
        Nodo* actual = cabeza;
        while (actual != nullptr) {
            cout << actual->valor << " ";
            actual = actual->siguiente;
        }
        cout << endl;
    }

private:
    Nodo* cabeza;
};

int main() {
    ListaEnlazada lista;

    // Insertar valores en la lista
    lista.insertar(1);
    lista.insertar(2);
    lista.insertar(3);

    // Mostrar la lista
    cout << "Lista: ";
    lista.mostrar();

    return 0;
}
