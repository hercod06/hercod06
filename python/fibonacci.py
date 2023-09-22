def calcular_fibonacci(n):
    if n <= 1:
        return n
    return calcular_fibonacci(n - 1) + calcular_fibonacci(n - 2)

n = int(input("Introduce un número para calcular su serie de Fibonacci: "))

if n < 0:
    print("La serie de Fibonacci no está definida para números negativos.")
else:
    print(f"Serie de Fibonacci para {n} términos:")
    for i in range(n):
        print(calcular_fibonacci(i), end=" ")
    print()
