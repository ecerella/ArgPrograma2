// comentario de una linea
/* comentario de
varias lineas
*/
// alert("hola mundo");

 /*
 tipos de datos:
 undefined: sin valor asignado
 null: nulo, objeto que no existe
 boolean: true y false
 string: cadenas de caracteres
 symbol: 
 number: numero
 object: objetos (estructura que relaciona propiedades y funciones en un objeto)
 */

//variables
 var miVariable="aprendo_java";
 miVariable="Ezequiel";
 console.log(miVariable)

 var a;
 var b=2;

 console.log(a); //undefined, es una variable no inicializada
 console.log(b); //2

 var a=5;
 var b=a; 
 
 console.log(a)//5
 console.log(b)//5

/*suma, resta, multiplicacion y division de variables es positiva o negativa como cualquier operacion matematica tanto de enteros como decimales */

//resto
var resto = 5 % 3;
console.log(resto); //2 seria lo que queda de la division 

//incrementar una variable
var librosLeidos = 10; 
console.log(librosLeidos);

//opcion 1 para incrementar variable
librosLeidos = librosLeidos + 1;

//opcion 2 para incrementar variable
librosLeidos++; //se usa para incrementar de a 1 (para restar 1 uso --)

var totalVentas = 13576.34;
totalVentas = totalVentas + 345,67; //igual a decir (totalVentas += 345.676)
console.log(totalVentas);
//las 4 operaciones funcionan igual con asignacion compuesta

//cadena de caracteres

/*secuencias de escapes
    codigo  resultado
    \'      comilla simple. ej: var miVariable= 'estoy aprendiendo \'java\'';
    \"      comilla doble. ej: var miVariable= "estoy aprendiendo \"java\"";
    \\      barra invertida ej: var miVariable= "estoy aprendiendo \\java";
    \n      linea nueva ej: console.log("estoy aprendiendo \njava");
    \r      retorno de carro ej:
    \t      tabulacion ej:
    \b      retroceso ej:
    \f      salto de pagina ej:
*/

//concatenar
var mensajeCompleto = "estoy aprendiendo";
var final = " a programar"
console.log(mensajeCompleto); //entrega estoy aprendiendo

mensajeCompleto += final;
console.log(mensajeCompleto); //entrega estoy aprendiendo a programar

//longitud de cadenas
var cadena;
cadena = "JavaScript";
console.log(cadena.length); //entrega 10 (caraceres)

//acceder a caracteres de cadena
var lenguaje = "javaScript";
/*cadena:  JavaScript
  indices: 0123456789
*/
console.log(lenguaje[0]); //entrega la letra J

//inmutabilidad (no se pueden cambiar)
var miCadena = "Jola mundo";
miCadena[0] = "H"; //type error, lo que si podemos es cambiar cadena completa

var lenguaje = "javaScript";
//cadena:  JavaScript
//indices: 0123456789

console.log(lenguaje[0]); //entrega la letra J
console.log(lenguaje[3]); //entrega la letra a
console.log(lenguaje[6]); //entrega la letra r
console.log(lenguaje[9]); //entrega la letra t

//ultimo caracter
var miCadena;
/*el ultimo indice siempre es longitud -1 (por que comenzamos en 0)
miCadena.length para JavaScript es 10 (tiene 10 caracteres).
el ultimo indice es 9.

cadena:  JavaScript
indices: 0123456789
*/
miCadena = "javaScript";
console.log(miCadena[miCadena.length - 1]);

//notacion de corchetes de derecha a izquierda
var miCadena;
/* el penultimo indice es longitud -2 (por que comenzamos en 0)
miCadena = "JavaScript";
n=2;
console.log(miCadena[miCadena.length - n]); //entrega la letra p
*/

//juego historias locas
/*
var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrio";
var miAdverbio = "rapidamente";

/*concatena las cadenas para crear una que muestre un mensaje. puedes variar los valores de las variables.

ej: el perro negro corrio rapidamente a la tienda.

var palabrasEnBlanco = "el " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + " a la tienda."; //reemplazar comillas para armar concatenando
console.log(palabrasEnBlanco);
*/

var miSustantivo = "bicicleta";
var miAdjetivo = "pequeña";
var miVerbo = "volo";
var miAdverbio = "lentamente";

//ej: la bicicleta pequeña volo a la tienda lentamente.

var palabrasEnBlanco = "la " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " a la tienda " + miAdverbio + "."; //reemplazar comillas para armar concatenando
console.log(palabrasEnBlanco);

//arreglos
var miArreglo = ["jose", 24]
console.log(miArreglo); //devuelve "jose", 24

var estudiantes = ["pepe", "hector", "nora", "juan"];
console.log(estudiantes); //devuelve "pepe", "hector", "nora", "juan"

var notas = [95, 67, 89, 56];
console.log(notas); //devuelve 95, 67, 89, 56

//arreglos anidados
var listaDeEstudiantes = [["nora", 97],["pepe", 78]];

var listaDeProductos = [["camisa", 4.56, "cod134"], ["celular", 212, "cod32"]];

var datos = [[3.5, 4.5, 2.1], [6.5, 2.3, 3.8], [6.2, 4.9, 6.0]];

//acceder a elementos
var miArreglo = [10, 20, 30];

/*
arreglo: [10, 20, 30]
indices:   0   1   2
*/

console.log(miArreglo[0]); //10
console.log(miArreglo[1]); //20
console.log(miArreglo[2]); //30 

//modificar un elemento en un arreglo
var miArreglo = [10, 20, 30];

miArreglo[0] = 40;
console.log(miArreglo); //muestra 40, 20, 30

//acceder a arreglo multidimensional
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/*
arreglo:        [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
indice:              0          1          2
indice interno:   0  1  2    0  1  2    0  1  2
*/
console.log(miArreglo[0]); //muestra [1, 2, 3]
console.log(miArreglo[1]); //muestra [4, 5, 6]

//ahora supongamos que queremos acceder al arreglo 6
console.log(miArreglo[1][2]); //muestra 6

//.push (añade elemento al final de un elemento)
var estaciones = ["invierno", "otoño", "primavera"];
estaciones.push("verano");

//.POP() remueve ultimo elemento
var estaciones;
estaciones = ["invierno", "otoño", "primavera", "verano"];
estacion = estaciones.pop(); //elimina ultimo elemento y lo asigna a estaciones

//.shift() remueve primer elemento
estaciones = ["invierno", "otoño", "primavera", "verano"];
estaciones.shift(); //elimina primer elemento

//.unshift agrega al inicio
estaciones = ["invierno", "otoño", "primavera"];
estaciones.unshift("verano"); //agregar al principio

var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["panes", 5], ["gaseosas", 6], ["pollo", 7]];

//cereal
console.log("voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0] + ".");

//leche
console.log("voy a comprar " + miListaDeCompras[1][1] + " unidades de " + miListaDeCompras[1][0] + ".");

//galletas
console.log("voy a comprar " + miListaDeCompras[2][1] + " unidades de " + miListaDeCompras[2][0] + ".");

//pollo
console.log("voy a comprar " + miListaDeCompras[5][1] + " unidades de " + miListaDeCompras[5][0] + ".");

//definir funciones
function mostrarMensaje() {
    console.log("hola mundo");
}

mostrarMensaje(); //llamamos a la funcion!

function sumar(a,b) { //a y b son parametros
    var suma = a + b;
    console.log("el resultado de " + a + " + " + b + " es: " + suma);
}

sumar(5, 3); //entrega e l resultado de 5 + 3 es 8

var x = 5;
var y = 3;

sumar(x, y); //paso las variables como argumento y el resultado es el mismo

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
concatenarTresCadenas("estoy", "aprendiendo", "javascript");

//variables globales, se puede usar en cualquier parte del programa
/*
var miVariableGlobal = 5;
console.log(miVariableGlobal); //devuelve 5

function miFuncion() {
    console.log(miVariableGlobal);
}
miFuncion(); //devuelve 5
*/

//variable local solo se usa dentro de la funcion donde se creo
function miFuncion() {
    var miVariableLocal = 4;
    console.log(miVariableLocal);
}

miFuncion(); //devuelve 4

console.log(miVariableLocal); //devuelve is not defined. declaro en la funcion

//otro ejemplo
var miNombre = "ezequiel";

function mostrarMiNombre() {
    var miNombre = "felipe";
    console.log(miNombre);
}

mostrarMiNombre(); //devuelve felipe por que la variable local tiene prioridad

console.log(miNombre); //devuelve ezequiel valor de la variable local

//retornar funcion
function sumar (a, b) {
    return a + b;
}

sumar (5, 3); //no va a mostrar resultado, solo va a retornar un valor
console.log(sumar(5, 3)); //valor 8 en consola

//asignar un return
function crearCadenaConMeta(lenguajeDeProgramacion){
    return "mi meta es aprender " + lenguajeDeProgramacion;
}
var miMeta = crearCadenaConMeta("javascript");
console.log(miMeta); //ahora si se muestra "mi meta es aprender javascript"

//permanece en fila
function proximoEnLaFila(arreglo, elemento) {
    arreglo.push(elemento); //agregar al final del arreglo
    return arreglo.shift(); //remover el primer elemento
}
var miArreglo = [1, 2, 3, 4, 5];
console.log("antes: " + JSON.stringify(miArreglo)); //antes: [1, 2, 3, 4, 5]
console.log(proximoEnLaFila(miArreglo, 6)); //muestra 1
console.log("desp: " + JSON.stringify(miArreglo)); //desp: [2, 3, 4, 5, 6]

//Boleanos true y false
console.log(9 == 9); //true
console.log(9 == "9"); //true representan el mismo numero
// si queremos comparar los tipos de datos usamos igualdad estricta
console.log(9 === 9); //true
console.log(9 === "9"); //false no se convierten a dato comun

//ejemplo
var a;
var b;

a = 5;
b = 5;

console.log(a == b); //true
console.log(a === b); //true

b = 8;
console.log (a == b); //false
console.log (a === b); //false

b = "5";
console.log (a == b); //true
console.log (a === b); //false

//comparador d3esigualdad
console.log(9 != 6); //true
console.log(9 != 9); //false

//comparador desigualdad estricta
console.log(1 != "1"); //false
console.log(1 !== "1"); //true esta comparando los tipos de dato

//comparador mayor y menor
console.log(6 > 5); //true
console.log(3 > 10); //false

console.log("b" > "a"); true//orden alfabetico
console.log("acb"> "abc"); true//orden alfabetico 1ero y 2do caracter

//comparador mayor o igual que
console.log(5 > 5); //false
console.log(5 >= 5); //true

//opereadores logicos (condiciones elaboradas)
/*
tabla de verdad del operador AND
para x && y (la operacion es true solo cuando los operandos son true)

tabla de verdad del operador OR
para x II y (si uno de los operandos es true el resultado es verdadero)

tabla de verdad del operador NOT
para x cambia la expresion
var = 8;
!(a > 5) --> !true --> false // la expresion a>5 es true pero NOT la cambia a false
console.log(!(a > 5));
*/

//condicionales
var x = 5;
if (x > 2) {
    console.log("la condicion es verdadera"); //se ejecuta solo si la condicion if es true
}


var x = 5;
if (x < 2) {
    console.log("la condicion es verdadera"); //no se ejecuta por la condicion falsa
} else {
    console.log("la condicion es falsa"); // se ejecuta
}


function clasificarValor(valor) {
    if (valor % 2 == 0) { // si el valor dividido 2 tiene resto cero. se ejecuta
        console.log("divisible entre 2");
    } else if (valor % 3 == 0) {  //si el valor es divisible por 3 sin resto. se ejecuta
        console.log("divisible entre 3");
    } else {
        console.log("no es divisible entre las opciones "); // si ninguna de las anteriores es true. se ejecuta
    }
}

clasificarValor(2); //entrega divisible entre 2
clasificarValor(15); // entrega divisible entre 3
clasificarValor(7); // entrega no es divisible entre la opciones


//interpretar indice de masa corporal
function interpretarIMC(indiceDeMasaCorporal){
    if (indiceDeMasaCorporal < 18.5){
        console.log("bajo peso);")
    } else if (indiceDeMasaCorporal <= 24.9) {
        console.log("normal");
    } else if (indiceDeMasaCorporal <= 29.9) {
        console.log("sobrepeso");
    } else {
        console.log("obeso");
    }
}

interpretarIMC(22.2); // entrega Normal

//codigo de golf

function codigoDeGolf(par, golpes) {
    if (golpes == 1) {
        return "hole-in-one!";
    } else if (golpes <= par -2) {
        return "eagle";
    } else if (golpes == par -1) {
        return "birdie";
    } else if (golpes == par) {
        return "par"; 
    } else if (golpes == par + 1) {
        return "bogey";
    } else if (golpes == par + 2) {
        return "double bogey";
    } else if (golpes >= par + 3) {
        return "go home!";
    }
}

console.log(codigoDeGolf(4, 2)); //devuelve eagle
console.log(codigoDeGolf(4, 4)); //devuelve par
console.log(codigoDeGolf(4, 7)); //devuelve go home


//sentencia switch a partir de un valor que va a pasar
//es un condicional mas especifico, el valor de switch determina
function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1: // si valor es igual a 1 pasara esto
            respuesta = "alpha"; 
            breack; //para la ejecucion de switch
        case 2: // si valort es igual a 2 
            respuesta = "beta";
            breack;
        case 3: // si valor es igual a 3
            respuesta = "gamma";
            breack;
        case 4: // si valor es igual a 4
            respuesta = "delta";
            breack;
    }
    return respuesta;
}

console.log(clasificarValor (1)); //retorna alpha
console.log(clasificarValor (4)); //retorna delta

//suitch con cadenas de texto
var producto = "hamburguesa";
switch (producto){
    case "pizza":
        console.log("la pizza basica cuesta $10.55");
        break;
    case "hamburguesa":
        console.log("las hamburguesas cuestan $6.78"); //se muestra en consola
        breack;
    case "helado":
        console.log("el helado cuesta $2.8");
        breack;
}

//sentencia switch, opcion predeterminada
function seleccionarIdioma(valor){
    var idioma;
    switch (valor){
        case 1:
            idioma = "español";
            breack;
        case 2:
            idioma = "frances";
            breack;
        case 3:
            idioma = "italiano";
            break;
        default
            idioma = "ingles";
            breack;
    }
    return idioma;
}

console.log(seleccionarIdioma(1)); // español
console.log(seleccionarIdioma(4)); // ingles ningun case tiene valor 4

//sentencia switch, multiples casos
function clasificarVolumen(valor) {
    var volumen;
    switch (valor){
        case 1:
            volumen = "bajo";
            breack;
        case 2:
        case 3:
            volumen = "intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "alto";
            break;
    }
    return volumen;
}