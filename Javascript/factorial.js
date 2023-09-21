function calcularFactorial(n) {
    if (n === 0) return 1;
    return n * calcularFactorial(n - 1);
}

const numero = parseInt(prompt("Introduce un número para calcular su factorial: "));

if (numero < 0) {
    console.log("El factorial no está definido para números negativos.");
} else {
    const factorial = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es ${factorial}`);
}
