function calcularFibonacci(n) {
    if (n <= 1) return n;
    return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
}

const n = parseInt(prompt("Introduce un número para calcular su serie de Fibonacci: "));

if (n < 0) {
    console.log("La serie de Fibonacci no está definida para números negativos.");
} else {
    console.log(`Serie de Fibonacci para ${n} términos:`);
    for (let i = 0; i < n; i++) {
        console.log(calcularFibonacci(i), ' ');
    }
}
