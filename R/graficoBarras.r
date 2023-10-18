# Este es un programa en R para crear un gráfico de barras con la librería "ggplot2".

# Instalar y cargar la librería "ggplot2"
install.packages("ggplot2")
library(ggplot2)

# Crear un dataframe de ejemplo
data <- data.frame(
  Ciudad = c("Nueva York", "Los Ángeles", "Chicago", "Houston"),
  Poblacion = c(8537673, 39776830, 2716000, 2303482)
)

# Crear un gráfico de barras
grafico <- ggplot(data, aes(x = Ciudad, y = Poblacion)) +
  geom_bar(stat = "identity", fill = "blue") +
  labs(title = "Población por Ciudad", x = "Ciudad", y = "Población")

# Mostrar el gráfico
print(grafico)
