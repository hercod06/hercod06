<?php
// Crear un array de números
$numeros = [1, 2, 3, 4, 5];

// Iterar y mostrar los números
echo "Números: ";
foreach ($numeros as $numero) {
    echo $numero . " ";
}

// Calcular la suma de los números
$suma = array_sum($numeros);
echo "\nSuma de los números: " . $suma . "\n";

// Filtrar números pares
$pares = array_filter($numeros, function ($numero) {
    return $numero % 2 == 0;
});

echo "Números pares: ";
foreach ($pares as $par) {
    echo $par . " ";
}
?>
