const nombre = "gerardo"
const apellido = "garcia"
const nombreCompleto = ` Hola soy ${nombre} ${apellido} ${1+2}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return `Estoy saludando, soy ${nombre}`
}

console.log(`Este es un texto: ${getSaludo(nombre)} ` );
