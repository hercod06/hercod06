#include <iostream>
#include <vector>
#include <map>
using namespace std;

int main() {
    // Uso de un vector para almacenar números
    vector<int> numeros = {1, 2, 3, 4, 5};

    // Mostrar los números en el vector
    cout << "Números en el vector: ";
    for (int num : numeros) {
        cout << num << " ";
    }
    cout << endl;

    // Uso de un mapa para almacenar nombres y edades
    map<string, int> edades;
    edades["Juan"] = 30;
    edades["Ana"] = 25;

    // Mostrar las edades en el mapa
    cout << "Edades en el mapa:" << endl;
    for (const auto& par : edades) {
        cout << par.first << ": " << par.second << " años" << endl;
    }

    return 0;
}
