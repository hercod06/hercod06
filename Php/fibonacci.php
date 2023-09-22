<?php
function calcularFibonacci($n) {
    if ($n <= 1) return $n;
    return calcularFibonacci($n - 1) + calcularFibonacci($n - 2);
}

$n = readline("Introduce un número para calcular su serie de Fibonacci: ");

if ($n < 0) {
    echo "La serie de Fibonacci no está definida para números negativos.\n";
} else {
    echo "Serie de Fibonacci para $n términos:\n";
    for ($i = 0; $i < $n; $i++) {
        echo calcularFibonacci($i) . ' ';
    }
    echo "\n";
}
?>
