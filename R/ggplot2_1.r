# Este es un programa en R para realizar análisis de datos con ggplot2.

# Instalar y cargar la librería ggplot2
install.packages("ggplot2")
library(ggplot2)

# Crear un dataframe de ejemplo
data <- data.frame(
  Mes = c("Enero", "Febrero", "Marzo", "Abril"),
  Ventas = c(15000, 18000, 22000, 19000)
)

# Crear un gráfico de barras utilizando ggplot2
grafico <- ggplot(data, aes(x = Mes, y = Ventas)) +
  geom_bar(stat = "identity", fill = "blue") +
  labs(title = "Ventas por Mes", x = "Mes", y = "Ventas")

# Mostrar el gráfico
print(grafico)
