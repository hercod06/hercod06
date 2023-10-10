<?php
$correo = "usuario@example.com";

if (filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    echo "El correo electrónico es válido.";
} else {
    echo "El correo electrónico no es válido.";
}
?>
