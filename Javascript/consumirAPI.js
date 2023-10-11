// URL de una API de ejemplo
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Realizar una solicitud GET a la API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta de la API:');
        console.log(data);
    })
    .catch(error => {
        console.error('Error al consumir la API:', error);
    });
