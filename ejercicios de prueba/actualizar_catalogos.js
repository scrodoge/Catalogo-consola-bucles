// Secciion de importaciones y setup
// En esta seccion vamos a dejar todas las importaciones de codigo de terceros y luego importaciones de modulos propios
const prompt = require("prompt-sync")()
//Seccion de declaraciones
// En esta seccion vamos a definir todas las variables globales, 1ro inicializadas 2d0 declaradas
// Despues vamos a hacer las definicioens de todas las funciones
let respuesta
let r2
let r3

let contiuar = true;
let catalogoInicial = [
  {
    referencia: "H0001",
    cantidad: "29",
    valor: 250000
  },
  {
    referencia: "H0002",
    cantidad: "5",
    valor: 40000
  }
]
function validarItem() {
    console.log("Digite los siguientes valores");
    let referencia=prompt("digite la referencia : ");
    let cantidad=prompt("digite la cantidad como real : ");
    let precio=prompt("digite el precio. $ "); //codigo para poner comillas entre numeros
const numb=precio;

function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}
//codigo para poner comillas entre numeros
console.log(separator(numb))
console.log("\n\n >Los Valores Digitados Son: ");    
console.log("Referencia: " +referencia);
console.log("cantidad: " +cantidad);
console.log("precio: $",separator(precio));
   
}

//-----------------------Este es el programa principal----------------------------------//
function programa() {
 // validacion por parte del usuario
 //
 //
  while(contiuar){
    console.log("ACTUALIZAR CATALOGOS");
    console.log("\n\n");
  }
  return;
}
// Seccion de ejecucion
programa(); 
{
function preguntaSiNo() {
    console.log("\n");
    let respuesta = prompt('¿Desea Abrir Excel? (si / no) ');
    while (respuesta !== "si" && respuesta !== "no") {
      respuesta = prompt('Respuesta inválida. Por favor, ingrese "si" o "no"');
    }
    if (respuesta === "si") {
      console.log("\nContinuando...");
    } else if (respuesta === "no") {
      console.log("\nVolviendo a preguntar...");
      preguntaSiNo();
    }
  }
  
  preguntaSiNo();
}
{
   
    function preguntaSiNo() {
        

        console.log("Archivo/Abrir");
        console.log("Catalogos.xlms");
        console.log("abrir primera hoja");
        console.log("copiar datos de estado de inventarios");
        let respuesta = prompt('¿Funciona? (si / no) ');
       
        while (respuesta !== "si" && respuesta !== "no") {
          respuesta = prompt('Respuesta inválida. Por favor, ingrese "si" o "no"');
        }
        if (respuesta === "si") {
          console.log("Continuando...");
        } else if (respuesta === "no") {
          console.log("\nVolviendo a preguntar...");
          preguntaSiNo();
        }
      }
      
      preguntaSiNo();

}

console.log("\nlistado con cantidades a borrar");


validarItem();
{  function preguntaSiNo() {
    let respuesta = prompt('¿Abrir canvas? (si / no)');
    while (respuesta !== "si" && respuesta !== "no") {
      respuesta = prompt('Respuesta inválida. Por favor, ingrese "si" o "no"');
    }
    if (respuesta === "si") {
      console.log("Continuando...");
    } else if (respuesta === "no") {
      console.log("Volviendo a preguntar...");
      preguntaSiNo();
    }
  }
  
  preguntaSiNo();
  
} 
{  function preguntaSiNo() {
console.log("catalogo");
console.log("Eliminar referencias");
console.log("Organizer espacios en blanco");
console.log("Exportar catalogos en pdf");
  let respuesta = prompt('¿funciono? (si / no)');
  while (respuesta !== "si" && respuesta !== "no") {
    respuesta = prompt('Respuesta inválida. Por favor, ingrese "si" o "no"');
  }
  if (respuesta === "si") {
    console.log("Continuando...");
  } else if (respuesta === "no") {
    console.log("Volviendo a preguntar...");
    preguntaSiNo();
  }
}

preguntaSiNo();

} 
{
  console.log("Fin de proceso :) ");
}