<?php
// Implementación de una cola (queue) en PHP usando un array
class Cola {
    private $items = [];

    public function estaVacia() {
        return empty($this->items);
    }

    public function encolar($item) {
        array_push($this->items, $item);
    }

    public function desencolar() {
        if (!$this->estaVacia()) {
            return array_shift($this->items);
        }
    }

    public function frente() {
        if (!$this->estaVacia()) {
            return $this->items[0];
        }
    }
}

// Crear una cola
$cola = new Cola();

// Insertar elementos en la cola
$cola->encolar(1);
$cola->encolar(2);
$cola->encolar(3);

// Mostrar el elemento frontal de la cola
echo "Elemento frontal de la cola: " . $cola->frente() . "\n";

// Eliminar el elemento frontal de la cola
$cola->desencolar();

// Mostrar el elemento frontal de la cola después de la eliminación
echo "Elemento frontal de la cola después de la eliminación: " . $cola->frente() . "\n";

// Comprobar si la cola está vacía
if ($cola->estaVacia()) {
    echo "La cola está vacía.\n";
} else {
    echo "La cola no está vacía.\n";
}
?>
