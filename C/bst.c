#include <iostream>
using namespace std;

struct Nodo {
    int valor;
    Nodo* izquierda;
    Nodo* derecha;
    
    Nodo(int val) : valor(val), izquierda(NULL), derecha(NULL) {}
};

class ArbolBinario {
public:
    ArbolBinario() : raiz(NULL) {}

    // Insertar un valor en el árbol
    void insertar(int valor) {
        raiz = insertarRec(raiz, valor);
    }

    // Función auxiliar para la inserción recursiva
    Nodo* insertarRec(Nodo* nodo, int valor) {
        if (nodo == NULL) {
            return new Nodo(valor);
        }
        
        if (valor < nodo->valor) {
            nodo->izquierda
