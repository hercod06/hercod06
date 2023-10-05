#include <iostream>
using namespace std;

class Persona {
public:
    string nombre;
    int edad;

    Persona(string n, int e) : nombre(n), edad(e) {}

    void presentarse() {
        cout << "Hola, soy " << nombre << " y tengo " << edad << " años." << endl;
    }
};

int main() {
    Persona persona("Juan", 30);
    persona.presentarse();
    return 0;
}
