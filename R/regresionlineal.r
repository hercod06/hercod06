# Este es un programa en R para realizar una regresión lineal simple.

# Crear datos de ejemplo
x <- c(1, 2, 3, 4, 5)
y <- c(2, 3, 4, 4, 5)

# Realizar la regresión lineal
modelo <- lm(y ~ x)

# Mostrar los resultados
summary(modelo)
