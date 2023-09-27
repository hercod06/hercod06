function busquedaBinaria(arr, objetivo) {
    let izquierda = 0;
    let derecha = arr.length - 1;
    
    while (izquierda <= derecha) {
        const medio = Math.floor((izquierda + derecha) / 2);
        
        if (arr[medio] === objetivo) return medio;
        
        if (arr[medio] < objetivo) izquierda = medio + 1;
        else derecha = medio - 1;
    }
    
    return -1;
}

const n = parseInt(prompt("Introduce el número de elementos en el arreglo: "));
console.log("Introduce los elementos del arreglo en orden ascendente:");
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Elemento ${i + 1}: `)));
}
const objetivo = parseInt(prompt("Introduce el número que deseas buscar: "));

const resultado = busquedaBinaria(arr, objetivo);

if (resultado !== -1) {
    console.log(`El elemento ${objetivo} se encuentra en la posición ${resultado}`);
} else {
    console.log(`El elemento ${objetivo} no se encuentra en el arreglo.`);
}
