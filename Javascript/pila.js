// Implementación de una pila (stack) en JavaScript usando un array
class Pila {
    constructor() {
        this.items = [];
    }

    estaVacia() {
        return this.items.length === 0;
    }

    apilar(item) {
        this.items.push(item);
    }

    desapilar() {
        if (!this.estaVacia()) {
            return this.items.pop();
        }
    }

    cima() {
        if (!this.estaVacia()) {
            return this.items[this.items.length - 1];
        }
    }
}

// Crear una pila
const pila = new Pila();

// Insertar elementos en la pila
pila.apilar(1);
pila.apilar(2);
pila.apilar(3);

// Mostrar el elemento superior de la pila
console.log("Elemento superior de la pila:", pila.cima());

// Eliminar el elemento superior de la pila
pila.desapilar();

// Mostrar el elemento superior de la pila después de la eliminación
console.log("Elemento superior de la pila después de la eliminación:", pila.cima());

// Comprobar si la pila está vacía
if (pila.estaVacia()) {
    console.log("La pila está vacía.");
} else {
    console.log("La pila no está vacía.");
}
