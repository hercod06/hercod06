<?php
// Definición de una clase llamada 'Persona'
class Persona {
    // Propiedades de la clase
    private $nombre;
    private $edad;

    // Constructor de la clase
    public function __construct($nombre, $edad) {
        $this->nombre = $nombre;
        $this->edad = $edad;
    }

    // Método para mostrar información de la persona
    public function mostrarInformacion() {
        echo "Nombre: " . $this->nombre . "\n";
        echo "Edad: " . $this->edad . " años\n";
    }
}

// Crear un objeto de la clase Persona
$persona1 = new Persona("Juan", 30);

// Llamar al método para mostrar información
$persona1->mostrarInformacion();
?>
