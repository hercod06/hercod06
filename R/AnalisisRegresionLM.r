# Este es un programa en R para realizar un análisis de regresión lineal simple.

# Crear un dataframe de ejemplo
data <- data.frame(
  X = c(1, 2, 3, 4, 5),
  Y = c(2, 3, 4, 4, 5)
)

# Realizar un análisis de regresión lineal simple
modelo <- lm(Y ~ X, data = data)

# Resumen del modelo
summary(modelo)
