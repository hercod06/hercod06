<?php
function busquedaBinaria($arr, $objetivo) {
    $izquierda = 0;
    $derecha = count($arr) - 1;
    
    while ($izquierda <= $derecha) {
        $medio = floor(($izquierda + $derecha) / 2);
        
        if ($arr[$medio] == $objetivo) return $medio;
        
        if ($arr[$medio] < $objetivo) $izquierda = $medio + 1;
        else $derecha = $medio - 1;
    }
    
    return -1;
}

echo "Introduce el número de elementos en el arreglo: ";
$n = readline();
echo "Introduce los elementos del arreglo en orden ascendente (separados por espacio):\n";
$arr = explode(" ", readline());
echo "Introduce el número que deseas buscar: ";
$objetivo = readline();

$resultado = busquedaBinaria($arr, $objetivo);

if ($resultado != -1) {
    echo "El elemento $objetivo se encuentra en la posición $resultado\n";
} else {
    echo "El elemento $objetivo no se encuentra en el arreglo.\n";
}
?>
