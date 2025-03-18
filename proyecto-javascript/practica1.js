// Ejercicio 1

console.log("Hola Mundo");


// Ejercicio 2

let edad = 25;
const nombre = "Javier";

console.log("Mi nombre es " + nombre + " y tengo " + edad + " años");


// Ejercicio 3

console.log(typeof 42);
console.log(typeof "Javascript");
console.log(typeof true);


// Ejercicio 4

console.log((15 + 3) / (8 / 2));


// Ejercicio 5

function suma(a, b) {
  return a + b;
}

console.log(suma(3, 8));


// Ejercicio 6

let numero = 0;

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es igual a 0");
}


// Ejercicio 7

for (let counter = 1; counter < 6; counter++) {
  console.log(counter);
}


// Ejercicio 8

let hola = "Hola mundo";
let javascript = "desde JavaScript";
let frase = hola + " " + javascript;

console.log(frase);


// Ejercicio 9

let cadena = ["manzana", "pera", "banana"];

console.log(cadena[1]);


// Ejercicio 10

let fruits = ["manzana"];
fruits.push("naranja");

console.log(fruits);

fruits.pop();

console.log(fruits);


// Ejercicio 11 y 12

let usuario = {
  nombre: "Juan",
  edad: 25,
  saludar: function () {
    console.log("Hola " + this.nombre);
  },
};

console.log(usuario);
usuario.saludar();


// Ejercicio 13

let año = new Date();
console.log(año.getFullYear());


// Ejercicio 14

let numeroRandom = Math.random();
console.log(numeroRandom);

let otroNumero = Math.floor(2.5);
console.log(otroNumero);


// Ejercicio 15

let diaSemana = 3;

switch (diaSemana) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  default:
    console.log(error);
    break;
}


// Ejercicio 16

let contador = 5
while (contador > 0 ){
    console.log(contador);
    contador--;
}


// Ejercicio 17

function retorno(numero){
    return numero % 2 === 0;
}

console.log(retorno(553));

// Ejercicio 18

let name = 'Juan';
let age = 18;
console.log(`Hola, ${name} tiene ${age} años.`);

// Ejercicio 19

let sumar = (a, b) => a + b;

console.log(sumar(3, 9));


// Ejercicio 20

let ejercicio = [1, 2, 3];

ejercicio.forEach (function(elemento){
    console.log(elemento)
})

// Ejercicio 21

let frutas = ["manzana", "pera", "banana"];

console.log(frutas.indexOf('manzana'));

// Ejercicio 22

let orden = [5, 1, 3];

orden.sort((a, b) => a - b);
console.log(orden);

//Ejercicios 23

let filtro = [1, 2, 3, 4];

let pares = filtro.filter((numero) => numero % 2 === 0 );

console.log(pares);

// Ejercicio 24

let mapa = [1, 2, 3];

let calculo = mapa.map((numero) => numero ** 2 );
console.log(calculo);

// Ejercicio 25

function Persona(nombre){
  this.nombre = nombre;
}

let nom = new Persona('Juan');
console.log(nom.nombre);

// Ejercicio 26

let fecha = new Date();

let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

console.log(`Son las ${horas}:${minutos}:${segundos}`);

// Ejercicio 27

let numRedondeo = 3.1415

let redondeo = numRedondeo.toFixed(2);
console.log(redondeo);

// Ejercicio 28 

let include = '¡Hola Mundo!';

console.log(include.includes('Hola'));

// Ejercicio 29

let fru = "manzana,banana,pera";

let palabras = fru.split(" ");

console.log(palabras);

let guiones = palabras.join('-');

console.log(guiones);

// Ejercicio 30

let array = [10, 20, 30];

let [a, b, c] = array

console.log(a);
console.log(b);
console.log(c);

// Ejercicio 31

let persona = { nombreUsuario: "Ana", edadUsuario: 30 };

let { nombreUsuario, edadUsuario } = persona;

console.log(nombreUsuario);
console.log(edadUsuario);  

// Ejercicio 32

function crearContador() {
  let contador = 0;
   
  return function(){
    contador++;
    console.log(contador);
  };
}

const cuenta = crearContador();

cuenta();
cuenta();
cuenta();
cuenta();

// Ejercicio 33

let coche = {
  marca: 'Seat',
  mostrarMarca: function(){
    console.log(this.marca);
  }
}

coche.mostrarMarca();


// Ejercicio 34

class Rectangulo {
  constructor(ancho, alto){
    this.ancho = ancho;
    this.alto = alto;
  }

  area(){
    return this.ancho * this.alto;
  }
}

let miRectangulo = new Rectangulo(10,20);

console.log(miRectangulo.area());


// Ejercicio 35

const person = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Madrid",
};
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson); 

const objetoPerson = JSON.parse(jsonPerson);
console.log(objetoPerson);
