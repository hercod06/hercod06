# Este es un programa en R para manipular y visualizar datos con la librería ggplot2.

# Instalar y cargar la librería ggplot2
install.packages("ggplot2")
library(ggplot2)

# Crear un dataframe de ejemplo
data <- data.frame(
  Producto = c("A", "B", "C"),
  Enero = c(100, 150, 200),
  Febrero = c(120, 160, 220),
  Marzo = c(130, 170, 240)
)

# Calcular el total de ventas por producto
data$Total <- rowSums(data[, 2:4])

# Crear un gráfico de barras apiladas utilizando ggplot2
grafico <- ggplot(data, aes(x = Producto, y = Total)) +
  geom_bar(stat = "identity", fill = "blue") +
  labs(title = "Ventas Totales por Producto", x = "Producto", y = "Ventas")

# Mostrar el gráfico
print(grafico)
