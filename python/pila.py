# Implementación de una pila (stack) en Python usando una lista
class Pila:
    def __init__(self):
        self.items = []

    def esta_vacia(self):
        return len(self.items) == 0

    def apilar(self, item):
        self.items.append(item)

    def desapilar(self):
        if not self.esta_vacia():
            return self.items.pop()

    def cima(self):
        if not self.esta_vacia():
            return self.items[-1]

# Crear una pila
pila = Pila()

# Insertar elementos en la pila
pila.apilar(1)
pila.apilar(2)
pila.apilar(3)

# Mostrar el elemento superior de la pila
print("Elemento superior de la pila:", pila.cima())

# Eliminar el elemento superior de la pila
pila.desapilar()

# Mostrar el elemento superior de la pila después de la eliminación
print("Elemento superior de la pila después de la eliminación:", pila.cima())

# Comprobar si la pila está vacía
if pila.esta_vacia():
    print("La pila está vacía.")
else:
    print("La pila no está vacía.")
