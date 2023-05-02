//Importar funciones de controlador.js 
import * as fs from "fs";
import {leerInventario, guardarInventarioComoJSON, agregarObjeto} from "./controlador.js"
import * as readline from 'readline';

//Generar inventario.js
//const inventario = leerInventario();
//if (inventario) {
//  console.log('Inventario leído:', inventario);

// Guardar el inventario como archivo .js
//  guardarInventarioComoJS(inventario);
//}

//Para la funcion de LeerInventario, recibiremos un archivo de ...........
//leerInventario()
//guardarInventarioComoJS()

//declarar rl para datos de entrada
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// funcion menu 
function mostrarMenu() {
    console.log('--- Menú de Opciones ---');
    console.log('1. Leer Inventario');
    console.log('2. Guardar Inventario');
    console.log('3. Crear Nuevo Elemento');
    console.log('4. Salir');
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
          rl.question('guardar nuevo inventario (en formato JSON): #)SI string)NO' , (nuevoInventario) => {
            try {
              nuevoInventario = JSON.parse(nuevoInventario);
              guardarInventarioComoJSON(nuevoInventario);
            } catch (error) {
              console.error('Error al guardar el inventario', error);
            }
            mostrarMenu();
          });
          break;
        case '3':
        rl.question('Desea agregar un nuevo elemento: ',(nuevoInventario)=>{
             try { 
              const inventario = leerInventario();
              if (inventario) {
                console.log('Inventario leído:', inventario);
                agregarObjeto(lista)
              }
             } catch(error){
             console.error('Error al intentar añadir nuevo elemento a inventario.json', error);
             }
             mostrarMenu();
            break;
            };
          });
        case '4':
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
  

  /**
  1.leer inventario
     1.1 digite las  para una categoria en especifico
     -a. BOTANICA
     -b. BASES-FLOREROS-MATERAS
     -c. MENAJE
     -d. LAMPARAS
     -e. PLATOS BASE

     1.2 
   */
  
     //MENU
//3.Crear nuevo Elemento-ok
// 
// (1)SI o (2)NO
//