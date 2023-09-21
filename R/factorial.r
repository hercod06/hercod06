# Este es un programa en R para calcular el factorial de un número.
# El usuario debe ingresar el número.

# Función para calcular el factorial
calcular_factorial <- function(n) {
  if (n == 0) return(1)
  return(n * calcular_factorial(n - 1))
}

# Solicitar al usuario un número
numero <- as.integer(readline("Introduce un número para calcular su factorial: "))

if (numero < 0) {
  cat("El factorial no está definido para números negativos.\n")
} else {
  factorial <- calcular_factorial(numero)
  cat("El factorial de", numero, "es", factorial, "\n")
}
