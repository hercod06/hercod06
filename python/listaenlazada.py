class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.siguiente = None

class ListaEnlazada:
    def __init__(self):
        self.cabeza = None

    # Insertar un valor al final de la lista
    def insertar(self, valor):
        nuevo_nodo = Nodo(valor)
        if not self.cabeza:
            self.cabeza = nuevo_nodo
        else:
            actual = self.cabeza
            while actual.siguiente:
                actual = actual.siguiente
            actual.siguiente = nuevo_nodo

    # Mostrar la lista
    def mostrar(self):
        actual = self.cabeza
        while actual:
            print(actual.valor, end=" ")
            actual = actual.siguiente
        print()

# Crear una lista enlazada
lista = ListaEnlazada()

# Insertar valores en la lista
lista.insertar(1)
lista.insertar(2)
lista.insertar(3)

# Mostrar la lista
print("Lista:", end=" ")
lista.mostrar()
