-- Esta consulta SQL une los datos de las tablas "empleados" y "departamentos" por la columna "id_departamento".
SELECT e.nombre AS empleado, d.nombre AS departamento
FROM empleados e
JOIN departamentos d ON e.id_departamento = d.id_departamento;
