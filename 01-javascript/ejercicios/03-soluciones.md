# 📝 Ejercicios de Módulos en JavaScript

### 1. Exportar e importar constantes
Crea un archivo `constantes.js` que contenga varias constantes como el nombre de la app, la versión y el autor.  
Importa esas constantes en `app.js` y muéstralas en consola.
```js
export const NOMBRE = "miApp";
export const VERSION = "1.2";
export const AUTOR = "Elio";
```

```js
import {NOMBRE, VERSION, AUTOR} from "./constantes.js";
console.log(NOMBRE);
console.log(VERSION);
console.log(AUTOR);
```

---

### 2. Funciones matemáticas
En `operaciones.js` crea y exporta funciones para sumar, restar, multiplicar y dividir.  
En `main.js` importa esas funciones y prueba varias operaciones.
```js
export function sumar(a, b){
    return a + b;
}

export function restar(a, b){
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function dividir(a, b) {
    if (b === 0){
        throw new error("No se puede dividir entre 0");
    }
    return a / b;
}
```

```js
import {sumar, restar, multiplicar, dividir} from "./operaciones.js";

const a = 10;
const b = 5;

console.log(`${a} + ${b} = ${sumar(a, b)}`);
console.log(`${a} - ${b} = ${restar(a, b)}`);
console.log(`${a} * ${b} = ${multiplicar(a, b)}`);
console.log(`${a} / ${b} = ${dividir(a, b)}`);
```

---

### 3. Exportación por defecto  
Crea un archivo `saludos.js` que tenga una exportación por defecto con una función `saludar(nombre)`.  
Importa esa función en `index.js` y úsala con tu nombre.

```js
export default function saludar(nombre) {
    return `Hola, ${nombre}`;
}
```
```js
import saludar from './saludos.js';

const mensaje = saludar("Elio");
console.log(mensaje);
```

---

### 4. Combinar exportaciones  
En `utils.js` exporta:
- Una constante llamada `APP_NAME`.  
- Una función `mayusculas(texto)` que convierta un string a mayúsculas.  
Haz una exportación por defecto con una función que reciba un array de strings y devuelva el primero.  
En `app.js` importa todo y pruébalo.

```js
export const APP_NAME = "miApp";

export function mayusculas(texto) {
    return texto.toUpperCase();
}

export default function devolverPrimero(array) {
    return array[0];
}
```
```js
import devolverPrimero, {APP_NAME, mayusculas} from "./utils.js";
console.log("Nombre de la aplicación:", APP_NAME);
console.log("Texto en mayúsculas:", mayusculas("hola mundo"));
console.log("Primer elemento del array:", devolverPrimero(["uno", "dos", "tres"]));
```

---

### 5. Importar con alias  
En `matematicas.js` exporta dos funciones: `areaCirculo(radio)` y `areaCuadrado(lado)`.  
En `main.js` importa esas funciones con alias (`circulo`, `cuadrado`) y calcula las áreas de un círculo de radio 5 y un cuadrado de lado 4.

```js
export function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

export function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}
```
```js
import { areaCirculo as circulo, areaCuadrado as cuadrado} from "./matematicas.js";
const radio = 3;
const lado = 3;
console.log(`Área de círculo con radio ${radio}: ${circulo(radio)}`);
console.log(`Área cuadrado con lado ${lado}: ${cuadrado(lado)}`);
```

---

### 6. Importar todo con `* as`
En `personas.js` exporta varias constantes con nombres de personas.  
En `main.js` impórtalas todas bajo un objeto:  

```js
export const nom1 = "Luis";
export const nom2 = "Ana";
export const nom3 = "Roberto";
export const nom4 = "Ángela";
export const nom5 = "Jandro";
```

```js
import * as personas from "./personas.js";
console.log(personas);
```