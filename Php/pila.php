<?php
// Implementación de una pila (stack) en PHP usando un array
class Pila {
    private $items = [];

    public function estaVacia() {
        return empty($this->items);
    }

    public function apilar($item) {
        array_push($this->items, $item);
    }

    public function desapilar() {
        if (!$this->estaVacia()) {
            return array_pop($this->items);
        }
    }

    public function cima() {
        if (!$this->estaVacia()) {
            return end($this->items);
        }
    }
}

// Crear una pila
$pila = new Pila();

// Insertar elementos en la pila
$pila->apilar(1);
$pila->apilar(2);
$pila->apilar(3);

// Mostrar el elemento superior de la pila
echo "Elemento superior de la pila: " . $pila->cima() . "\n";

// Eliminar el elemento superior de la pila
$pila->desapilar();

// Mostrar el elemento superior de la pila después de la eliminación
echo "Elemento superior de la pila después de la eliminación: " . $pila->cima() . "\n";

// Comprobar si la pila está vacía
if ($pila->estaVacia()) {
    echo "La pila está vacía.\n";
} else {
    echo "La pila no está vacía.\n";
}
?>
