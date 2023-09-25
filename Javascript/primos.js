function esPrimo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

const limite = parseInt(prompt("Introduce un número límite para encontrar números primos: "));

console.log(`Números primos hasta ${limite}:`);
for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) {
        console.log(i, ' ');
    }
}
