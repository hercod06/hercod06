import time

def calcular_tiempo(func):
    def wrapper(*args, **kwargs):
        inicio = time.time()
        resultado = func(*args, **kwargs)
        fin = time.time()
        print(f"Tiempo de ejecución de {func.__name__}: {fin - inicio} segundos")
        return resultado
    return wrapper

@calcular_tiempo
def operacion_larga():
    total = 0
    for i in range(1000000):
        total += i
    return total

resultado = operacion_larga()
print("Resultado de la operación larga:", resultado)
