class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    // Insertar un valor al final de la lista
    insertar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    // Mostrar la lista
    mostrar() {
        let actual = this.cabeza;
        while (actual) {
            console.log(actual.valor, end=" ");
            actual = actual.siguiente;
        }
        console.log();
    }
}

// Crear una lista enlazada
const lista = new ListaEnlazada();

// Insertar valores en la lista
lista.insertar(1);
lista.insertar(2);
lista.insertar(3);

// Mostrar la lista
console.log("Lista:", end=" ");
lista.mostrar();
