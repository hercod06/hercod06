class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izquierda = None
        self.derecha = None

class ArbolBinario:
    def __init__(self):
        self.raiz = None

    # Insertar un valor en el árbol
    def insertar(self, valor):
        self.raiz = self._insertar_rec(self.raiz, valor)

    # Función auxiliar para la inserción recursiva
    def _insertar_rec(self, nodo, valor):
        if nodo is None:
            return Nodo(valor)
        
        if valor < nodo.valor:
            nodo.izquierda = self._insertar_rec(nodo.izquierda, valor)
        elif valor > nodo.valor:
            nodo.derecha = self._insertar_rec(nodo.derecha, valor)
        
        return nodo

    # Buscar un valor en el árbol
    def buscar(self, valor):
        return self._buscar_rec(self.raiz, valor)

    # Función auxiliar para la búsqueda recursiva
    def _buscar_rec(self, nodo, valor):
        if nodo is None:
            return False
        
        if valor == nodo.valor:
            return True
        
        if valor < nodo.valor:
            return self._buscar_rec(nodo.izquierda, valor)
        
        return self._buscar_rec(nodo.derecha, valor)

# Crear un árbol binario de búsqueda
arbol = ArbolBinario()

# Insertar valores en el árbol
arbol.insertar(10)
arbol.insertar(5)
arbol.insertar(15)
arbol.insertar(3)
arbol.insertar(7)

# Buscar valores en el árbol
print("Buscar 7:", "Encontrado" if arbol.buscar(7) else "No encontrado")
print("Buscar 8:", "Encontrado" if arbol.buscar(8) else "No encontrado")
