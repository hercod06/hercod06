# Este es un programa en R para crear un gráfico de dispersión con la librería ggplot2.

# Instalar y cargar la librería ggplot2
install.packages("ggplot2")
library(ggplot2)

# Crear un dataframe de ejemplo
data <- data.frame(
  X = c(1, 2, 3, 4, 5),
  Y = c(2, 3, 4, 4, 5)
)

# Crear un gráfico de dispersión
grafico <- ggplot(data, aes(x = X, y = Y)) +
  geom_point() +
  labs(title = "Gráfico de Dispersión", x = "Eje X", y = "Eje Y")

# Mostrar el gráfico
print(grafico)
