<?php
function calcularFactorial($n) {
    if ($n == 0) return 1;
    return $n * calcularFactorial($n - 1);
}

$numero = readline("Introduce un número para calcular su factorial: ");

if ($numero < 0) {
    echo "El factorial no está definido para números negativos.\n";
} else {
    $factorial = calcularFactorial($numero);
    echo "El factorial de $numero es $factorial\n";
}
?>
