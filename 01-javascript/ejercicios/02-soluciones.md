# EJERCICIOS

## Arrays y métodos básicos
1. Declara un array con al menos 5 nombres de personas.
    - Añade un nombre al final.
    - Elimina el primero.
    - Busca si existe un nombre concreto con includes().

```js
const nombres = ["Javier", "Marta", "Luis", "Carmen", "Alberto"];
console.log(nombres);
nombres.push("Lorena");
console.log(nombres);
nombres.shift();
console.log(nombres);
console.log(nombres.includes("Luis")); //true
```

2. Declara un array con al menos 5 nombres de personas.
    - Añade un nombre al final.
    - Elimina el primero.
    - Busca si existe un nombre concreto con includes().

```js
const nombres = ["Pablo", "Naira", "Marcos", "Lucía", "Carlos"];
console.log(nombres);
nombres.push("María");
console.log(nombres);
nombres.shift();
console.log(nombres);
console.log(nombres.includes("Susana")); //false
```

3. Ordena el array [4, 1, 9, 3, 7] de forma ascendente y descendente.

```js
const numeros = [4, 1, 9, 3, 7];
numeros.sort((a,b) => a - b);
console.log(numeros); //orden ascendente
numeros.reverse(); //orden descendente
console.log(numeros);
```

## Desestructuración de arrays
1. Dado el array ["manzana", "pera", "plátano", "naranja"]:
    - Extrae en variables fruta1 y fruta2 los dos primeros.
    - Usa el operador rest para guardar el resto en un nuevo array.

```js
const frutas = ["manzana", "pera", "plátano", "naranja"];
const [fruta1, fruta2, ...rest] = frutas;
console.log("Fruta 1:",fruta1);
console.log("Fruta 2:",fruta2);
console.log("Otras frutas", rest);
```

2. Intercambia los valores de dos variables usando desestructuración
```js
let a = 100;
let b = 200;
[a,b] = [b,a];
console.log("a es igual a",a);
console.log("b es igual a",b);
```
3. Extrae el color azul del array anidado:
```js
let colores = ["rojo", ["verde", "azul", "amarillo"]];
let [,[, color3]] = colores;
console.log(color3); //azul
```


## Recorrido de arrays con for

1. Crea un array con los números del 1 al 5 y muéstralos en consola con:
    - Un for clásico.
    - Un for...of.
    - Un for...in.

```js
const numeros = [1,2,3,4,5];
console.log("For clásico");
for(let i = 0; i<numeros.length; i++) {
    console.log(`Índice ${i}: Valor ${numeros[i]}`);
}
console.log("For... of");
for(let num of numeros) {
    console.log(num);
}
console.log("For... in")
for(let i in numeros) {
    console.log(`Índice ${i} -> Valor ${numeros[i]}`);
}
```

2. Recorre el array ["HTML", "CSS", "JavaScript", "React"] con un for clásico e imprime "Posición X: Valor Y"

```js
let tecnologias = ["HTML", "CSS", "JavaScript", "React"];
for(let i = 0; i<tecnologias.length; i++) {
    console.log(`Posición ${i}: Valor ${tecnologias[i]}`);
}
```

3. Recorre un array al revés (for con decremento).

```js
let numeros = [1,2,3,4,5];
for(let i = numeros.length - 1; i>=0; i--) {
    console.log(numeros[i]);
}
```

## Recorridos con forEach, filter y map

1. Dado el array ["Ana", "Luis", "Marta", "Pedro"], recórrelo con forEach e imprime un saludo para cada nombre.

```js
const nombres = ["Ana", "Luis", "Marta", "Pedro"];
nombres.forEach(n => console.log("Hola,",n));
```

2. Crea un array de números [2, 4, 6, 8] y usa forEach para mostrar el doble de cada número.

```js
const numeros = [2,4,6,8];
numeros.forEach(n => console.log(n*2));
```

3. Dado el array [5, 12, 8, 130, 44], usa filter para obtener solo los números mayores que 10.

```js
const numeros = [5,12,8,130,44];
const numMayores10 = numeros.filter(n => n> 10);
console.log(numMayores10);
```

4. Crea un array con nombres ["Ana", "Alberto", "Bea", "Carlos"] y filtra los que empiecen por la letra A.

```js
const nombres = ["Ana", "Alberto", "Bea", "Carlos"];
const nombresConA = nombres.filter(n => n.startsWith("A"));
console.log(nombresConA);
```

5. Dado un array de edades [15, 18, 21, 12, 30], usa filter para obtener solo las que representen mayores de edad (≥18).

```js
const edades = [15, 18, 21, 12, 30];
const mayorDeEdad = edades.filter(e => e >= 18);
console.log(mayorDeEdad);
```

6. Dado el array [1, 2, 3, 4, 5], usa map para obtener un nuevo array con los números elevados al cuadrado

```js
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(n => n ** 2);
console.log(cuadrados);
```

7. Crea un array con precios [10, 20, 30] y usa map para calcular el precio con IVA (21%) incluido

```js
const precios = [10,20,30];
const preciosIVA = precios.map(precio => precio * 1.21);
console.log(preciosIVA);
```

8. Dado el array ["html", "css", "javascript"], usa map para poner en mayúsculas cada palabra.

```js
const tecnologias = ["html", "css", "javascript"];
const mayusculas = tecnologias.map(tec => tec.toUpperCase());
console.log(mayusculas);
```

9. Dado el array [3, 8, 12, 5, 7, 20]:
    - Usa filter para quedarte con los pares.
    - Luego, usa map para multiplicarlos por 10

```js
const numeros = [3, 8, 12, 5, 7, 20];
const numerosTransformados = numeros
    .filter(n => n % 2 === 0)
    .map(n => n * 10);
console.log(numerosTransformados);
```

10. Dado el array de objetos:
```js
let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];
```
- Filtra solo los alumnos con nota ≥ 5.
- Usa map para obtener un array solo con sus nombres.
-   Recorre el resultado con forEach e imprime: "Alumno aprobado: NOMBRE"

```js
let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];

let aprobados = alumnos
    .filter(alumno => alumno.nota >= 5)
    .map(alumno => alumno.nombre);
aprobados.forEach(nombre => {
    console.log("Alumno aprobado:", nombre);
});
```