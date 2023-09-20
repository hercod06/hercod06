#include <iostream>
using namespace std;

int main() {
    double base, altura;
    
    cout << "Introduce la base del triángulo: ";
    cin >> base;
    
    cout << "Introduce la altura del triángulo: ";
    cin >> altura;
    
    double area = 0.5 * base * altura;
    
    cout << "El área del triángulo es: " << area << endl;
    
    return 0;
}
