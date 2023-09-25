def es_primo(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False

    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6

    return True

limite = int(input("Introduce un número límite para encontrar números primos: "))

print(f"Números primos hasta {limite}:")
for i in range(2, limite + 1):
    if es_primo(i):
        print(i, end=" ")
print()
