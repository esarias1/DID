// import {NOMBRE, VERSION, AUTOR} from "./constantes.js";
// console.log(NOMBRE);
// console.log(VERSION);
// console.log(AUTOR);

import devolverPrimero, {APP_NAME, mayusculas} from "./utils.js";
console.log("Nombre de la aplicación", APP_NAME);
console.log("Texto en mayúsculas", mayusculas("hola mundo"));
console.log("Primer elemento del array:", devolverPrimero(["uno", "dos", "tres"]));
