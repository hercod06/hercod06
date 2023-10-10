# Crear una lista de números del 1 al 10 elevados al cuadrado
cuadrados = [x ** 2 for x in range(1, 11)]
print("Cuadrados:", cuadrados)

# Crear una lista de números pares del 2 al 20
pares = [x for x in range(2, 21, 2)]
print("Números pares:", pares)

# Crear una lista de letras en una palabra
palabra = "Python"
letras = [letra for letra in palabra]
print("Letras en la palabra:", letras)
