<?php
$numeros = [];
echo "Introduce la cantidad de números que deseas ordenar: ";
$n = readline();

echo "Introduce los números separados por espacios:\n";
$numeros = explode(" ", readline());

sort($numeros);

echo "Números ordenados: " . implode(" ", $numeros) . "\n";
?>
