# Este es un programa en R para realizar análisis de datos con la librería Tidyverse.

# Instalar y cargar la librería Tidyverse
install.packages("tidyverse")
library(tidyverse)

# Crear un dataframe de ejemplo
data <- data.frame(
  Mes = c("Enero", "Febrero", "Marzo", "Abril"),
  Ventas = c(15000, 18000, 22000, 19000)
)

# Realizar un análisis exploratorio de datos utilizando ggplot2 y dplyr
data %>%
  ggplot(aes(x = Mes, y = Ventas)) +
  geom_bar(stat = "identity", fill = "blue") +
  labs(title = "Ventas por Mes", x = "Mes", y = "Ventas")

# Calcular estadísticas resumidas utilizando dplyr
data %>%
  summarise(Promedio_Ventas = mean(Ventas), Total_Ventas = sum(Ventas))
