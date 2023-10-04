<?php
class Nodo {
    public $valor;
    public $siguiente;

    public function __construct($valor) {
        $this->valor = $valor;
        $this->siguiente = null;
    }
}

class ListaEnlazada {
    private $cabeza;

    public function __construct() {
        $this->cabeza = null;
    }

    // Insertar un valor al final de la lista
    public function insertar($valor) {
        $nuevoNodo = new Nodo($valor);
        if ($this->cabeza === null) {
            $this->cabeza = $nuevoNodo;
        } else {
            $actual = $this->cabeza;
            while ($actual->siguiente !== null) {
                $actual = $actual->siguiente;
            }
            $actual->siguiente = $nuevoNodo;
        }
    }

    // Mostrar la lista
    public function mostrar() {
        $actual = $this->cabeza;
        while ($actual !== null) {
            echo $actual->valor . " ";
            $actual = $actual->siguiente;
        }
        echo "\n";
    }
}

// Crear una lista enlazada
$lista = new ListaEnlazada();

// Insertar valores en la lista
$lista->insertar(1);
$lista->insertar(2);
$lista->insertar(3);

// Mostrar la lista
echo "Lista: ";
$lista->mostrar();
?>
