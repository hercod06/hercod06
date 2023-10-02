# Implementación de una cola (queue) en Python usando una lista
from collections import deque

cola = deque()

# Insertar elementos en la cola
cola.append(1)
cola.append(2)
cola.append(3)

# Mostrar el elemento frontal de la cola
print("Elemento frontal de la cola:", cola[0])

# Eliminar el elemento frontal de la cola
cola.popleft()

# Mostrar el elemento frontal de la cola después de la eliminación
print("Elemento frontal de la cola después de la eliminación:", cola[0])

# Comprobar si la cola está vacía
if not cola:
    print("La cola está vacía.")
else:
    print("La cola no está vacía.")
