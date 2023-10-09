#include <iostream>
using namespace std;

// Definición de una clase base
class Figura {
public:
    virtual void area() {
        cout << "Área de la figura base." << endl;
    }
};

// Clase derivada que hereda de Figura
class Rectangulo : public Figura {
public:
    void area() override {
        cout << "Área del rectángulo." << endl;
    }
};

int main() {
    Figura* figura = new Rectangulo();
    figura->area();

    delete figura;
    return 0;
}
