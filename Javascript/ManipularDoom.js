<!DOCTYPE html>
<html>
<head>
    <title>Ejemplo de JavaScript</title>
</head>
<body>
    <h1 id="titulo">Hola, Mundo</h1>
    <button id="cambiarTexto">Cambiar Texto</button>

    <script>
        const titulo = document.getElementById('titulo');
        const boton = document.getElementById('cambiarTexto');

        boton.addEventListener('click', function () {
            titulo.innerHTML = '¡Hola, JavaScript!';
        });
    </script>
</body>
</html>
