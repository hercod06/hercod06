-- Esta consulta SQL actualiza el salario de los empleados que ganan menos de $40,000.
UPDATE empleados
SET salario = salario * 1.1
WHERE salario < 40000;
