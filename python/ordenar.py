numeros = []
n = int(input("Introduce la cantidad de números que deseas ordenar: "))
print("Introduce los números separados por espacios:")
numeros = list(map(int, input().split()))

numeros.sort()

print("Números ordenados:", end=" ")
for numero in numeros:
    print(numero, end=" ")
print()
