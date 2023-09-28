# Definición de una clase llamada 'Persona'
class Persona:
    # Constructor de la clase
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    # Método para mostrar información de la persona
    def mostrar_informacion(self):
        print(f"Nombre: {self.nombre}")
        print(f"Edad: {self.edad} años")

# Crear un objeto de la clase Persona
persona1 = Persona("Juan", 30)

# Llamar al método para mostrar información
persona1.mostrar_informacion()
