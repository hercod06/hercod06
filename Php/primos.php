<?php
function esPrimo($n) {
    if ($n <= 1) return false;
    if ($n <= 3) return true;
    if ($n % 2 == 0 || $n % 3 == 0) return false;

    $i = 5;
    while ($i * $i <= $n) {
        if ($n % $i == 0 || $n % ($i + 2) == 0) return false;
        $i += 6;
    }

    return true;
}

$limite = readline("Introduce un número límite para encontrar números primos: ");

echo "Números primos hasta $limite:\n";
for ($i = 2; $i <= $limite; $i++) {
    if (esPrimo($i)) {
        echo $i . ' ';
    }
}
echo "\n";
?>
