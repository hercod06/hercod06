const numeros = [];
const n = parseInt(prompt("Introduce la cantidad de números que deseas ordenar: "));
console.log("Introduce los números separados por espacios:");

for (let i = 0; i < n; i++) {
    const numero = parseInt(prompt(`Número ${i + 1}: `));
    numeros.push(numero);
}

numeros.sort((a, b) => a - b);

console.log("Números ordenados:", numeros.join(" "));
