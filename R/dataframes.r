# Crear un dataframe de ejemplo
data <- data.frame(
  Alumno = c("Juan", "Ana", "Carlos", "María"),
  Puntuacion = c(85, 92, 78, 88)
)

# Calcular el promedio de puntuaciones
promedio <- mean(data$Puntuacion)

# Mostrar el promedio
cat("El promedio de puntuaciones es:", promedio, "\n")

# Crear un gráfico de barras de puntuaciones
barplot(data$Puntuacion, names.arg = data$Alumno, col = "blue",
        main = "Puntuaciones de Alumnos", xlab = "Alumnos", ylab = "Puntuación")
