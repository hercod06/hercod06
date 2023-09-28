#include <iostream>
using namespace std;

// Definición de una clase llamada 'Persona'
class Persona {
public:
    // Constructor de la clase
    Persona(string nombre, int edad) {
        this->nombre = nombre;
        this->edad = edad;
    }

    // Método para mostrar información de la persona
    void mostrarInformacion() {
        cout << "Nombre: " << nombre << endl;
        cout << "Edad: " << edad << " años" << endl;
    }

private:
    string nombre;
    int edad;
};

int main() {
    // Crear un objeto de la clase Persona
    Persona persona1("Juan", 30);

    // Llamar al método para mostrar información
    persona1.mostrarInformacion();

    return 0;
}
