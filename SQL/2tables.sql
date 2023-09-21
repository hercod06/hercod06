-- Esta consulta SQL selecciona los nombres de clientes que han realizado pedidos.
SELECT clientes.nombre
FROM clientes
INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;
