#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sonido() {
        cout << "Sonido de un animal desconocido." << endl;
    }
};

class Perro : public Animal {
public:
    void sonido() override {
        cout << "Guau guau" << endl;
    }
};

class Gato : public Animal {
public:
    void sonido() override {
        cout << "Miau miau" << endl;
    }
};

int main() {
    Animal* miMascota = new Perro();
    Animal* otroAnimal = new Gato();

    miMascota->sonido();
    otroAnimal->sonido();

    delete miMascota;
    delete otroAnimal;

    return 0;
}
