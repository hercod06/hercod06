import csv

# Crear un archivo CSV
with open('datos.csv', 'w', newline='') as archivo:
    escritor = csv.writer(archivo)
    escritor.writerow(['Nombre', 'Edad'])
    escritor.writerow(['Juan', 30])
    escritor.writerow(['Ana', 25])

# Leer un archivo CSV
with open('datos.csv', 'r') as archivo:
    lector = csv.reader(archivo)
    for fila in lector:
        print(fila)
