const prompt = require("prompt-sync")()
function preguntarProducto() {
  let cantidad = 0;
  let referencia = "";
  let valor = 0;

  while (cantidad !== 0) {
    cantidad = prompt('Ingrese la cantidad: ');
    if (cantidad === 0) break;
    referencia = prompt('Ingrese la referencia: ');
    valor = prompt('Ingrese el valor: ');
    if ((cantidad < 5 && valor < 100000) || cantidad === 0) {
      console.log(`Producto no válido: cantidad=${cantidad}, referencia=${referencia}, valor=${valor}`);
    } else {
      console.log(`Producto válido: cantidad=${cantidad}, referencia=${referencia}, valor=${valor}`);
    }
  }
}

preguntarProducto();
