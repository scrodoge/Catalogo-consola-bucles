const prompt = require("prompt-sync")()

console.log("¡Bienvenido!");
let N = prompt ('¿Cual es tu nombre?  ');

console.log(`Bienvenid@ ${N} a MarkoRegalos`);
/**
 * Hola
 * 
 * Neider
 */
function seleccion () {
    let ct = prompt ('¿que catalogo deseas consultar?  ');r//preguntar,ct=catalogo
    let confirm = prompt (`deseas catalogo de ${ct} es correcto?`) ;
    if (confirm == "Si") {
        console.log(`El catalogo seleccionado fue: ${ct}`)
        return;
    } else {
        seleccion()
    }
}

seleccion();

console.log()




