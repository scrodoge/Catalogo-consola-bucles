import * as fs from "fs";

// Función para leer el archivo JSON de inventario
/**
 * Leer Inventario
 * @description Funcion para leer un archivo .json como inventario
 */
export function leerInventario() {
  try {
    const inventarioJSON = fs.readFileSync('inventario.json', 'utf-8');
    return JSON.parse(inventarioJSON);
  } catch (error) {
    console.error('Error al leer el inventario:', error);
    return null;
  }
}

// Función para reguardar el inventario como inventario.json
export function guardarInventarioComoJSON(inventario) {
  try {
    const inventarioJSON = `module.exports = ${JSON.stringify(inventario, null, 2)};`;
    fs.writeFileSync('inventario.json', inventarioJSON, 'utf-8');
    console.log('Inventario guardado exitosamente.');
  } catch (error) {
    console.error('Error al guardar el inventario como inventario.json', error);
  }
}
//Función para Agregar un nuevo Elemento 

export function agregarObjeto(lista) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  try {
    // Crea un nuevo objeto con los datos ingresados por el usuario
    const objeto = {};
    rl.question('Ingrese la referencia: ', (referencia) => {
      objeto.referencia = referencia;
    });
    rl.question('Ingrese el nombre: ', (nombre) => {
      objeto.nombre = nombre;
    });
    rl.question('Ingrese el precio: ', (precio) => {
      objeto.precio = precio;
    });
    rl.question('Ingrese la categoría: ', (categoria) => {
      objeto.categoria = categoria;
    });
    rl.question('Ingrese la cantidad: ', (cantidad) => {
      objeto.cantidad = cantidad;
    });

    // Agrega el nuevo objeto a la lista
    lista.push(objeto);

    // Cierra la interfaz de lectura
    rl.close();
    // Muestra la lista actualizada de objetos
    console.log('La lista actualizada de objetos es: ', lista);


  } catch (error) {
    console.error('Error al guardar el inventario como inventario.json', error);
  }
}