function validarCorreo(correo) {
    const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return expresionRegular.test(correo);
}

const correo1 = "usuario@example.com";
const correo2 = "correo_invalido";

console.log(correo1 + " es un correo válido: " + validarCorreo(correo1));
console.log(correo2 + " es un correo válido: " + validarCorreo(correo2));
