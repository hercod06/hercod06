def busqueda_binaria(arr, objetivo):
    izquierda, derecha = 0, len(arr) - 1
    
    while izquierda <= derecha:
        medio = izquierda + (derecha - izquierda) // 2
        
        if arr[medio] == objetivo:
            return medio
        
        if arr[medio] < objetivo:
            izquierda = medio + 1
        else:
            derecha = medio - 1
            
    return -1

n = int(input("Introduce el número de elementos en el arreglo: "))
print("Introduce los elementos del arreglo en orden ascendente:")
arr = list(map(int, input().split()))
objetivo = int(input("Introduce el número que deseas buscar: "))

resultado = busqueda_binaria(arr, objetivo)

if resultado != -1:
    print(f"El elemento {objetivo} se encuentra en la posición {resultado}")
else:
    print(f"El elemento {objetivo} no se encuentra en el arreglo.")
