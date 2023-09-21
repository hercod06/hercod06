def calcular_factorial(n):
    if n == 0:
        return 1
    return n * calcular_factorial(n - 1)

numero = int(input("Introduce un número para calcular su factorial: "))

if numero < 0:
    print("El factorial no está definido para números negativos.")
else:
    factorial = calcular_factorial(numero)
    print(f"El factorial de {numero} es {factorial}")
