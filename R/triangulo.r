# Este es un programa en R para calcular el área de un triángulo.
# El usuario debe ingresar la base y la altura del triángulo.

# Solicitar al usuario la base del triángulo
base <- as.numeric(readline("Introduce la base del triángulo: "))

# Solicitar al usuario la altura del triángulo
altura <- as.numeric(readline("Introduce la altura del triángulo: "))

# Calcular el área del triángulo
area <- 0.5 * base * altura

# Mostrar el resultado
cat("El área del triángulo es:", area, "\n")
