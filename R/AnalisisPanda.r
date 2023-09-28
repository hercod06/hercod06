# Este es un programa en R para realizar análisis de datos con dplyr.

# Instalar y cargar la librería dplyr
install.packages("dplyr")
library(dplyr)

# Crear un dataframe de ejemplo
data <- data.frame(
  Nombre = c("Juan", "María", "Pedro", "Ana"),
  Edad = c(25, 30, 22, 28),
  Puntuación = c(85, 92, 78, 88)
)

# Filtrar datos mayores de 25 años
data_filtrada <- data %>%
  filter(Edad > 25)

# Calcular el promedio de puntuación
promedio_puntuacion <- data %>%
  summarise(Promedio_Puntuacion = mean(Puntuación))

# Mostrar resultados
print("Datos filtrados:")
print(data_filtrada)
print("\nPromedio de puntuación:")
print(promedio_puntuacion)
