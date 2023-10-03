<?php
class Nodo {
    public $valor;
    public $izquierda;
    public $derecha;

    public function __construct($valor) {
        $this->valor = $valor;
        $this->izquierda = null;
        $this->derecha = null;
    }
}

class ArbolBinario {
    private $raiz;

    public function __construct() {
        $this->raiz = null;
    }

    // Insertar un valor en el árbol
    public function insertar($valor) {
        $this->raiz = $this->insertarRec($this->raiz, $valor);
    }

    // Función auxiliar para la inserción recursiva
    private function insertarRec($nodo, $valor) {
        if ($nodo === null) {
            return new Nodo($valor);
        }

        if ($valor < $nodo->valor) {
            $nodo->izquierda = $this->insertarRec($nodo->izquierda, $valor);
        } elseif ($valor > $nodo->valor) {
            $nodo->derecha = $this->insertarRec($nodo->derecha, $valor);
        }

        return $nodo;
    }

    // Buscar un valor en el árbol
    public function buscar($valor) {
        return $this->buscarRec($this->raiz, $valor);
    }

    // Función auxiliar para la búsqueda recursiva
    private function buscarRec($nodo, $valor) {
        if ($nodo === null) {
            return false;
        }

        if ($valor === $nodo->valor) {
            return true;
        }

        if ($valor < $nodo->valor) {
            return $this->buscarRec($nodo->izquierda, $valor);
        }

        return $this->buscarRec($nodo->derecha, $valor);
    }
}

// Crear un árbol binario de búsqueda
$arbol = new ArbolBinario();

// Insertar valores en el árbol
$arbol->insertar(10);
$arbol->insertar(5);
$arbol->insertar(15);
$arbol->insertar(3);
$arbol->insertar(7);

// Buscar valores en el árbol
echo "Buscar 7: " . ($arbol->buscar(7) ? "Encontrado" : "No encontrado") . "\n";
echo "Buscar 8: " . ($arbol->buscar(8) ? "Encontrado" : "No encontrado") . "\n";
?>
