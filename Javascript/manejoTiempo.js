// Obtener la fecha y hora actual
const fechaActual = new Date();

// Mostrar la fecha y hora actual
console.log("Fecha y hora actual:", fechaActual);

// Obtener el año actual
const añoActual = fechaActual.getFullYear();
console.log("Año actual:", añoActual);

// Obtener el mes actual (0-11, donde 0 = enero, 1 = febrero, ...)
const mesActual = fechaActual.getMonth();
console.log("Mes actual:", mesActual + 1); // Sumar 1 para mostrar el mes correctamente

// Obtener el día de la semana (0-6, donde 0 = domingo, 1 = lunes, ...)
const diaSemana = fechaActual.getDay();
console.log("Día de la semana:", diaSemana);
