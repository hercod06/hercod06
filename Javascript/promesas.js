function dividirNumeros(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor !== 0) {
            resolve(dividendo / divisor);
        } else {
            reject("Error: No se puede dividir por cero.");
        }
    });
}

dividirNumeros(10, 2)
    .then(resultado => {
        console.log("Resultado de la división:", resultado);
    })
    .catch(error => {
        console.error(error);
    });
