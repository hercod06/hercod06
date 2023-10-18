<!DOCTYPE html>
<html>
<head>
    <title>Lista de Tareas</title>
</head>
<body>
    <h1>Lista de Tareas</h1>
    <ul id="listaTareas"></ul>
    <input type="text" id="nuevaTarea" placeholder="Nueva tarea">
    <button onclick="agregarTarea()">Agregar</button>

    <script>
        function agregarTarea() {
            var nuevaTarea = document.getElementById("nuevaTarea").value;
            var listaTareas = document.getElementById("listaTareas");
            var tareaNueva = document.createElement("li");
            tareaNueva.textContent = nuevaTarea;
            listaTareas.appendChild(tareaNueva);
        }
    </script>
</body>
</html>
