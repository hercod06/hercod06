// Definición de una clase llamada 'Persona'
class Persona {
    // Constructor de la clase
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para mostrar información de la persona
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad} años`);
    }
}

// Crear un objeto de la clase Persona
const persona1 = new Persona("Juan", 30);

// Llamar al método para mostrar información
persona1.mostrarInformacion();
