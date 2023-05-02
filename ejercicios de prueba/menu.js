import {leerInventario, guardarInventarioComoJS} from "../controlador.js"
const fs = require('fs');

import { readline } from "readline";


// Crear interfaz de lectura de línea de comandos
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para mostrar el menú de opciones
function mostrarMenu() {
  console.log('--- Menú de Opciones ---');
  console.log('1. Leer Inventario');
  console.log('2. Guardar Inventario');
  console.log('3. Salir');
  rl.question('Selecciona una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        const inventario = leerInventario();
        if (inventario) {
          console.log('Inventario leído:', inventario);
        }
        mostrarMenu();
        break;
      case '2':
        rl.question('Ingresa el nuevo inventario (en formato JSON): ', (nuevoInventario) => {
          try {
            nuevoInventario = JSON.parse(nuevoInventario);
            guardarInventarioComoJS(nuevoInventario);
          } catch (error) {
            console.error('Error al guardar el inventario como inventario.js:', error);
          }
          mostrarMenu();
        });
        break;
      case '3':
        rl.close();
        break;
      default:
        console.log('Opción inválida. Por favor, selecciona una opción válida.');
        mostrarMenu();
        break;
    }
  });
}

// Ejecutar el menú de opciones
mostrarMenu();



