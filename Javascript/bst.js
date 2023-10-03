class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    // Insertar un valor en el árbol
    insertar(valor) {
        this.raiz = this._insertarRec(this.raiz, valor);
    }

    // Función auxiliar para la inserción recursiva
    _insertarRec(nodo, valor) {
        if (nodo === null) {
            return new Nodo(valor);
        }

        if (valor < nodo.valor) {
            nodo.izquierda = this._insertarRec(nodo.izquierda, valor);
        } else if (valor > nodo.valor) {
            nodo.derecha = this._insertarRec(nodo.derecha, valor);
        }

        return nodo;
    }

    // Buscar un valor en el árbol
    buscar(valor) {
        return this._buscarRec(this.raiz, valor);
    }

    // Función auxiliar para la búsqueda recursiva
    _buscarRec(nodo, valor) {
        if (nodo === null) {
            return false;
        }

        if (valor === nodo.valor) {
            return true;
        }

        if (valor < nodo.valor) {
            return this._buscarRec(nodo.izquierda, valor);
        }

        return this._buscarRec(nodo.derecha, valor);
    }
}

// Crear un árbol binario de búsqueda
const arbol = new ArbolBinario();

// Insertar valores en el árbol
arbol.insertar(10);
arbol.insertar(5);
arbol.insertar(15);
arbol.insertar(3);
arbol.insertar(7);

// Buscar valores en el árbol
console.log("Buscar 7:", arbol.buscar(7) ? "Encontrado" : "No encontrado");
console.log("Buscar 8:", arbol.buscar(8) ? "Encontrado" : "No encontrado");
