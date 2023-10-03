# Este es un programa en R para realizar análisis de datos con la librería Tidyr.

# Instalar y cargar la librería Tidyr
install.packages("tidyr")
library(tidyr)

# Crear un dataframe de ejemplo
data <- data.frame(
  Producto = c("A", "B", "C"),
  Enero = c(100, 150, 200),
  Febrero = c(120, 160, 220),
  Marzo = c(130, 170, 240)
)

# Aplicar la función gather para convertir datos anchos en datos largos
data_largo <- gather(data, Mes, Ventas, -Producto)

# Mostrar el dataframe resultante
print(data_largo)
