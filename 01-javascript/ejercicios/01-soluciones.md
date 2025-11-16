# EJERCICIOS

## Declaración de variables

1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.

```js
let nombre = "Elio";
console.log(nombre);
```

2. Declara una constante PI con el valor 3.1416. Intenta reasignarla y observa el error.

```js
const PI = 3.1416;
PI = 3.14; //Uncaught TypeError: Assignment to constant variable.
console.log(PI);
```

3. Declara una variable edad sin asignarle valor. Luego asígnale un número y muestra el resultado.

```js
let edad;
edad = 28;
console.log(edad);
```

## Tipos de datos

1. Crea variables de tipo string, number, boolean, null y undefined. Imprime cada una junto con typeof

```js
//String
let nombre = "Elio";
console.log(nombre);
console.log(typeof nombre); //String

//Number
let numero = 17;
console.log(numero);
console.log(typeof numero); //number

//Boolean
let llueve = true;
console.log(llueve);
console.log(typeof llueve); //boolean

//Null
let valor = null;
console.log(valor); //null
console.log(typeof valor); //object

//Undefined
let variable;
console.log(variable); //undefined
console.log(typeof variable); //undefined
```

2. Convierte un número a cadena usando **String()** y una cadena a número usando **Number()**.

```js
let numero = 15;
let cadenaNumero = String(numero);
console.log(cadenaNumero); //15
console.log(typeof cadenaNumero); //String

let cadena = "30";
let numeroCadena = Number(cadena);
console.log(numeroCadena); //30
console.log(typeof numeroCadena); //number
```

## Objetos

1. Crea un objeto persona con propiedades: nombre, edad, ciudad

```js
let persona = {
    nombre: "David", 
    edad: 25, 
    ciudad: "Gijón"
};
console.log(persona);
```

2. Accede a las propiedades usando dot notation (obj.propiedad) y bracket notation (obj["propiedad"]).

```js
let persona = {
    nombre: "David", 
    edad: 25, 
    ciudad: "Gijón"
};
console.log(persona);
console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona.edad);
console.log(persona["edad"])
console.log(persona.ciudad);
console.log(persona["ciudad"]);
```

3. Añade una nueva propiedad profesion al objeto persona

```js
let persona = {
    nombre: "David", 
    edad: 25, 
    ciudad: "Gijón"
};
console.log(persona);
persona.profesion = "Socorrista";
console.log(persona);
```

4. Usa desestructuración para extraer nombre y edad en variables e imprimelas

```js
let persona = {
    nombre: "David", 
    edad: 25, 
    ciudad: "Gijón",
    profesion: "Socorrista"
};
let {nombre, edad} = persona;
console.log("Nombre:", nombre);
console.log("Edad:", edad);
```

## Funciones

1. Crea una función saludar(nombre) que devuelva "Hola, <nombre>".

```js
function saludar(nombre) {
    return  "Hola, "+nombre;
}
console.log(saludar("David"));
```

2. Crea una función sumar(a, b) que devuelva la suma de dos números.

```js
function sumar(a, b) {
    return a + b;
}
console.log(sumar(7, 5));
```

3. Escribe una función flecha que multiplique dos números

```js
const multiplicar = (a, b) => a * b;
console.log(multiplicar(7,3));
```

4. Crea una función esMayorDeEdad(edad) que devuelva true si la edad es mayor o igual a 18, de lo contrario false.

```js
function esMayorDeEdad(edad) {
    return edad >= 18;
}
console.log(esMayorDeEdad(18)); //true
console.log(esMayorDeEdad(15)); //false
```