# Este es un programa en R para realizar análisis de datos con la librería dplyr.

# Instalar y cargar la librería dplyr
install.packages("dplyr")
library(dplyr)

# Crear un dataframe de ejemplo
data <- data.frame(
  Producto = c("A", "B", "C"),
  Enero = c(100, 150, 200),
  Febrero = c(120, 160, 220),
  Marzo = c(130, 170, 240)
)

# Filtrar filas donde las ventas de Enero sean mayores que 100
filtrado <- data %>%
  filter(Enero > 100)

# Mostrar el dataframe resultante
print(filtrado)
