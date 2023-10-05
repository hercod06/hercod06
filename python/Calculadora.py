def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return "Error: No se puede dividir por cero."
    return a / b

while True:
    print("Opciones:")
    print("Escribe 'sumar' para sumar dos números")
    print("Escribe 'restar' para restar dos números")
    print("Escribe 'multiplicar' para multiplicar dos números")
    print("Escribe 'dividir' para dividir dos números")
    print("Escribe 'salir' para terminar el programa")
    opcion = input(": ")

    if opcion == "salir":
        break
    elif opcion in ("sumar", "restar", "multiplicar", "dividir"):
        num1 = float(input("Ingresa el primer número: "))
        num2 = float(input("Ingresa el segundo número: "))

        if opcion == "sumar":
            print("Resultado:", sumar(num1, num2))
        elif opcion == "restar":
            print("Resultado:", restar(num1, num2))
        elif opcion == "multiplicar":
            print("Resultado:", multiplicar(num1, num2))
        elif opcion == "dividir":
            print("Resultado:", dividir(num1, num2))
    else:
        print("Opción no válida.")
