const prompt = require("prompt-sync")()

let numero = prompt("digite uno");

if (numero > 0) {
  console.log("El número es positivo.");
} else {
  console.log("El número es cero.");
}