-- Esta consulta SQL realiza una unión de las tablas 'clientes' y 'pedidos' para obtener información de clientes y sus pedidos.
SELECT clientes.nombre, pedidos.producto
FROM clientes
INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;
