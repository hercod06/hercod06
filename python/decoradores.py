def decorador(func):
    def wrapper():
        print("Antes de llamar a la función.")
        func()
        print("Después de llamar a la función.")
    return wrapper

@decorador
def saludar():
    print("¡Hola!")

saludar()
