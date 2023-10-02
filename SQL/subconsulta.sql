-- Esta consulta SQL utiliza una subconsulta para encontrar el salario máximo en el departamento de "Ventas".
SELECT MAX(salario)
FROM empleados
WHERE departamento = 'Ventas';
