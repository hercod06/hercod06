// Implementación de una cola (queue) en JavaScript usando un array
class Cola {
    constructor() {
        this.items = [];
    }

    estaVacia() {
        return this.items.length === 0;
    }

    encolar(item) {
        this.items.push(item);
    }

    desencolar() {
        if (!this.estaVacia()) {
            return this.items.shift();
        }
    }

    frente() {
        if (!this.estaVacia()) {
            return this.items[0];
        }
    }
}

// Crear una cola
const cola = new Cola();

// Insertar elementos en la cola
cola.encolar(1);
cola.encolar(2);
cola.encolar(3);

// Mostrar el elemento frontal de la cola
console.log("Elemento frontal de la cola:", cola.frente());

// Eliminar el elemento frontal de la cola
cola.desencolar();

// Mostrar el elemento frontal de la cola después de la eliminación
console.log("Elemento frontal de la cola después de la eliminación:", cola.frente());

// Comprobar si la cola está vacía
if (cola.estaVacia()) {
    console.log("La cola está vacía.");
} else {
    console.log("La cola no está vacía.");
}
