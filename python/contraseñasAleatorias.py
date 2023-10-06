import random
import string

def generar_contrasena(longitud):
    caracteres = string.ascii_letters + string.digits + string.punctuation
    contrasena = ''.join(random.choice(caracteres) for _ in range(longitud))
    return contrasena

longitud = 12
contrasena_generada = generar_contrasena(longitud)
print("Contraseña generada:", contrasena_generada)
