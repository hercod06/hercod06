# Cargar la librería plotly
library(plotly)

# Crear un dataframe de ejemplo
data <- data.frame(
  Producto = c("A", "B", "C"),
  Enero = c(100, 150, 200),
  Febrero = c(120, 160, 220),
  Marzo = c(130, 170, 240)
)

# Crear un gráfico de barras interactivo con plotly
grafico <- plot_ly(data, x = ~Producto, y = ~Enero, type = "bar", name = "Enero") %>%
  add_trace(x = ~Producto, y = ~Febrero, type = "bar", name = "Febrero") %>%
  add_trace(x = ~Producto, y = ~Marzo, type = "bar", name = "Marzo") %>%
  layout(title = "Ventas por Producto por Mes",
         xaxis = list(title = "Producto"),
         yaxis = list(title = "Ventas"),
         barmode = "group")

# Mostrar el gráfico interactivo
grafico
