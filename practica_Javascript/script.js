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


 /*
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
/*
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
/*
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
            break; //para la ejecucion de switch
        case 2: // si valort es igual a 2 
            respuesta = "beta";
            break;
        case 3: // si valor es igual a 3
            respuesta = "gamma";
            break;
        case 4: // si valor es igual a 4
            respuesta = "delta";
            break;
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
        break;
    case "helado":
        console.log("el helado cuesta $2.8");
        break;
}

//sentencia switch, opcion predeterminada
function seleccionarIdioma(valor){
    var idioma;
    switch (valor){
        case 1:
            idioma = "español";
            break;
        case 2:
            idioma = "frances";
            break;
        case 3:
            idioma = "italiano";
            break;
        default:
            idioma = "ingles";
            break;
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
        case 2: //dos valores cumpliran esa funcion.
        case 3:
            volumen = "intermedio";
            break;
        case 4: //tres de los valores ejecutaran el volumen alto
        case 5:
        case 6:
            volumen = "alto";
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(1)); //volumen bajo (valor 1)
console.log(clasificarVolumen(5)); //volumen alto (valor 5)

//retornar boleanos
function esMenorQue(a, b){
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

//reemplazar un condicional usado para retornar un boleano
function esMenorQue(a, b) {
    return a < b;
}
console.log(esMenorQue(3, 3));

//patron de retorno anticipado util para detener funcion en accion especifica
function miFuncion() {
    console.log("hola");
    return "mundo"; //lo que este despues de un return no se ejecuta
    console.log("adios"); //esta linea no se ejecuta! (error codigo inaccesible)
}

console.log(miFuncion()); // entrega hola mundo

function calcularRaizCuadrada(num) {
    if (num < 0) { //si la condicion es true el codigo para en undefined
        return undefined;
    }
    return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(25)); // la condicion es falsa se resuelve la raiz cuadrada
console.log(calcularRaizCuadrada(-5)); // la condicion es true se termina en undefined


//contar cartas de black jack
var conteo = 0;
function contarCartas(carta) {
    var decision;
    switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        conteo++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        conteo--;
        break;
    }
    if (conteo > 0){
        decision = "apostar";
    } else {
        decision = "esperar";
    }
    return conteo + " " + decision;
}

console.log(contarCartas(2)) // la decision es apostar
console.log(contarCartas(K)) // la decision es apostar descuenta 1
console.log(contarCartas(A)) // la decision es esperar el valor es 0


//objetos en javascript
var miPerro = { //definimos un objeto en una variable
    "nombre": "mancha", //entre llaves definimos una secuencia de pares de propiedades y valores
    "edad": 5, 
    "peso": 6,
    "raza": "beagle"
}; //siempre termina en el cierre de llave con ;

//acceder a propiedades de un objeto. notacion de punto
//queremos trabajar con el nombre del ejemplo anterior

miPerro.nombre; //le dice a java que quiero la propiedad nombre de objeto miPerro
console,log(miPerro.raza); //devuelve beagle

//acceder a propiedades: Notacion de corchetes
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numero de hojas": 100
};

console.log(miCuaderno["color"]); //nos permite acceder a propiedades con espacios
console.log(miCuaderno["numero de hojas"]);//nombre de propiedad entre comillas con espacios interiores

//acceder a propiedades de objetos con variables
var resultados = {
    1: "hector567",
    2: "jose342",
    3: "maria756",
    4: "alberto734"
};

var posicion = 4;
console.log(resultados[posicion]); // alberto734

//actualizar propiedades
var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color); //azul
mochila.color = "verde"; //actualizo valor de propiedad color a verde
console.log(mochila.color); //verde

console.log(mochila.contenido); //botella de agua, cuaderno
mochila.contenido.push("lapiz") //push agrega item al final de lista
console.log(mochila.contenido); //botella de agua, cuaderno, lapiz

//agregar propiedades
var curso = {
    "titulo": "aprende javascript",
    "idioma": "español",
    "duracion": 30
};

curso.vistas = 34500;
//curso["vistas"] = 34500; funcionaria igual
console.log(curso.vistas);

//eliminar propiedades de objeto en javascript (delete)

var curso = {
    "titulo": "aprende javascript",
    "idioma": "español",
    "duracion": 30
};

console.log(curso.duracion); //devuelve 30
delete curso.duracion; 
console.log(curso.duracion); //devuelve undefined (se borro)

//objetos para busquedas (reemplazar switch)

function buscarElementoQuimico(simbolo){
    //var elementoQuimico = ""; (ya no se usaria)
    //objetos permiten asociar una propiedad con un valor
    //crear un objeto que asocie un valor a su elemento quimico correspondiente
    var simbolosQuimicos = {
        "Al": "aluminio",
        "S": "azufre",
        "Cl": "cloro",
        "He": "helio",
        "B": "boro",
        "Li": "litio"
    };
return  simbolosQuimicos[simbolos];
}
/* esto fue reemplazado por el objeto arriba
    switch (simbolo) {
        case "Al":
            elementoQuimico = "aluminio";
            break;
        case "S":
            elementoQuimico = "azufre";
            break;
        case "Cl":
            elementoQuimico = "cloro";
            break;
        case "He":
            elementoQuimico = "helio";
            break;
        case "B":
            elementoQuimico = "boro";
            break;
        case "Li":
            elementoQuimico = "litio";
            break;
    }
}


//verificar propiedades (tiene o no?)
var miCuaderno = {
    "color" : "verde",
    "categoria": 3,
    "precio" : 4.56
};

miCuaderno.hasOwnProperty("color"); //hasOwnProperty significa tiene esta propiedad, y nos devuelve un true. esta funcion nos sirve para un condicional.

function verificarPropiedad(obj, propiedad){
    if (obj.hasOwnProperty(propiedad)) {
        return "propiedad: " + obj[propiedad];
    } else {
        return "el objeto no tiene esa propiedad";
    }
}

console.log(verificarPropiedad(miCuaderno, "origen")); //devuelve "el objeto no tiene esa propiedad"
console.log(verificarPropiedad(miCuaderno, "color")); // devuelve "verde"

//objetos complejos
var ordenesDePizzas = [ //objeto1 como parte de un arreglo
    {
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champignones",
            "anana"
        ],  
        "para llevar": true
    },         //arreglos se separan con comas como (a, b)
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimenton"
        ],
        "para llevar": false
    }
]

console.log(ordenesDePizzas[0]); //retorna el primer objeto [0]
console.log(ordenesDePizzas[1]); //retorna el segundo objeto [0]
console.log(ordenesDePizzas[0].tipo); //retorna propiedad"margarita" corchetes funcionan igual con comillas console.log(ordenesDePizzas[0].["tipo"]

 //objetos anidados
 var miReceta = { //objeto principal con 3 propiedades (descripcion, costo e ingredientes)
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": { //a partir de aca hay un objeto anidado masa y cobertura
        "masa": {  //otro objeto como propiedad
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        "cobertura": {  //otro objeto como propiedad
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "manteca": "200 grs"
        }
    }
 };

 console.log(miReceta.descripcion);//mi postre favorito
 console.log(miReceta.costo);//15.6
 console.log(miReceta.ingredientes);/* un objeto como propiedad  {masa: {harina: "100 grs", sal: "1 cucharadita", agua: "1 taza"}, cobertura: {azucar: "120 grs", chocolate: "4 cucharadas", manteca: "200 grs}}*/


 //supongamos que queremos entrar a los ingredientes de la maza
// console.log(miReceta.ingredientes.masa);//si quiero adentrarme mas console.log(miReceta.ingredientes.masa.sal),etc

//corchetes funcionan igual (recordar que son obligatorios solo si hay espacios) console.log(miReceta.ingredientes.masa["harina"]);*/

//arreglos anidados
/*
var misPlantas = [  //definimos un arreglo con dos objetos
    {   //indice 0
        tipo: "flores", //a esta propiedad no le ponemos comillas por que es una sola palabra y javascript lo resuelve
        lista: [ //arreglo anidado
            "rosas",
            "tulipanes",
            "dientes de leon"
        ]
    },
    {   //indice 1
        tipo: "arboles", //2do objeto mismas propiedades
        lista: [  //arreglo anidado
            "abeto",
            "pino",
            "abedul"
        ]
    }


]


//si queremos entrar a "rosas"
var primeraFlor = misPlantas [0].lista[0];
console.log(primeraFlor);  //rosas
//si queremos acceder al segundo arbol
var segundoArbol = misPlantas[1].lista[1]; //pino

//coleccion de discos (mini proyecto)
var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "bee gees greatest",
        artista: "bee gees",
        canciones: ["stayin alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA gold",
    }
};

//eliminar propiedad vacia
function actualizarDiscos(discos, id, propiedad, valor) {  //4 parametros a revisar
    if (valor ==="") {   //si el valor es una cadena de caracteres vacia
        delete discos[id][propiedad];  //borra la propiedad del album
    } else if (propiedad === "canciones") {
        discos[id][propiedad] = discos[id][propiedad] || []; //OR nos da la posibilidad de un respaldo, si es undefined, accedo al objeto, la propiedad canciones y asigno arreglo vacio
        discos[id][propiedad].push(valor);  //para agregar el valñor al arreglo vacio llamo al metodo push
    } else {
        discos[id][propiedad] = valor; //tomamos el valor y lo asignamos al album especifico
    }
}

//prueba
console.log(coleccionDeDiscos[7853].tituloDelAlbum); //accedemos a tituloDelAlbum de la coleccionDeDiscos. entrega bee gees greatest
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");//llamada a funcion con datos
console.log(coleccionDeDiscos[7853].tituloDelAlbum);  // entrega undefined por que borramos la propiedad (tituloDelAlbum);

//prueba2
console.log(coleccionDeDiscos[5439].tituloDelAlbum); //accedemos a tituloDelAlbum de la coleccionDeDiscos. entrega undefined canciones no existe
actualizarDiscos(coleccionDeDiscos, 7853, "canciones", "mamma mia");//llamada a funcion con datos
console.log(coleccionDeDiscos[5439].tituloDelAlbum);  // entrega arreglo con cancion [mamma mia]

//prueba3
console.log(coleccionDeDiscos[5439].artista); //entrega undefined artista no existe
actualizarDiscos(coleccionDeDiscos, 7853, "artista", "ABBA");//llamada a funcion con datos
console.log(coleccionDeDiscos[5439].artista);  // entrega arreglo ABBA agregado con el respaldo OR

//ciclo while (bucles)

var i = 0;
while (i <= 3) {  //mientras ( condicion verdadera ) repite. si falso se detiene
    console.log("hola mundo"); //imprime 4 veces hasta detenerse
    i++;  //suma 1 a la variable
}

//otro ejemplo bucle
var miArreglo = [];  //definimos variable
var i = 0;  //declaramos variable
console.log(miArreglo);  //mostramos valor inicial
while (i < 10) {   // ciclo while
    miArreglo.push(i);  //agregamos elemento al arreglo
    i++;
}

console.log(miArreglo);  //despues del ciclo entrega [0,1,2,3,4,5,6,7,8,9]

//otro ejemplo bucle
var numeros = [2, 3, 4, 5, 6, 8, 9, 34];  //arreglo de numeros
while (numeros.lenght > 4) {  //ciclo mientras longitud sea mayor a 4
    numeros.pop();  //se va a remover el ultimo numero
}

console.log(numeros);  // entrega [2, 3, 4, 5]


//ciclo FOR (sabemos cuantas interaciones son necesarias)
var miArreglo = [];
for (var i = 0; i < 10; i++) { //se inicia una variable, establecemos condicion, y actualizamos la variable
    miArreglo.push(i);
}

console.log(miArreglo); //entrega [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


//ciclo FOR (guardando impares)
var miArreglo = [];
for (var i = 1; i < 20; i += 2) {
    miArreglo.push(i);
}

console.log(miArreglo); //entrega [1, 3, 5,... 19]


//iterar con un ciclo for
var miArreglo = [4, 6, 8, 2]; //valores que se sumaran en un ciclo de 4 interaciones
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {
    total += miArreglo[i]; //suma valor en indice i del arreglo 
}

console.log(total);


var lenguajes = ["javaScript", "python", "java", "c++"]; //array lenguajes para mostrar en mayusculas

for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase()); //accedo al elemento entre [indice] y metodo toUpperCase() para mayusculas
}


function contarNumerosPares(arreglo) {
    var total = 0;
    for (var i = 0; i < arreglo.lenght; i++) {  //iniciamos y a 0 y mantenemos el bucle mientras i sea menor que la longitud del array
        if (arreglo[i] % 2 == 0) {  //si el elemento del array %2 entrega de resto 0 es par
            total++;
        }
    }
    return total
}
console.log(contarNumerosPares([5, 2, 6, 3, 7, 5, 6, 3]); //console (3) nros pares


//ciclos for anidados
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // indice [0], [1], [2] en arrays recordar
for (var i = 0; i < miArreglo.lenght; i++) {
    console.log(miArreglo[i]);  //entrega indice 0[1, 2, 3] indice 1[4, 5, 6] indice2[7, 8, 9]
}

// ahora que pasa si queremos interar con cada elemento interno del array
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
for (var i = 0; i < miArreglo.lenght; i++) {
    var arregloAnidado = miArreglo[i]; //asignar el arreglo a una variable e interar con los elementos
    for (var j = 0; j < arregloAnidado.length; j++) {
        console.log(arregloAnidado[j]);  //elementos individuales
    }
}

//ciclos do while (hacer mientras una condicion es verdadera)
var x;
x = 5;
while (x < 10) {
    console.log(x); //entrega nros desde 5 hasta 9
    x++;
}

//en ciclo do while el codigo entre funciones se ejecuta al menos 1vez 

var x;
x = 5;
do {
    console.log(x);
    x++;
}while (x < 10);
*/

var contactos = [ //tres contactos (como objetos) pero elementos de array
    { //indice 0
        "nombre": "nora",
        "apellido": "perez",
        "numero": "045634345",
        "gustos": ["pizza", "programacion"]
    },
    {  //indice 1
        "nombre": "diego",
        "apellido": "lopez",
        "numero": "043456345",
        "gustos": ["cafe", "magia"]
    },
    {  //indice 2
        "nombre": "susana",
        "apellido": "rodriguez",
        "numero": "049345345",
        "gustos": ["ropa", "guitarra"]
    }
]

function buscarPerfil(nombre, propiedad) {
    for (var i = 0; i < contactos.lenght; i++) {  //i como indice, continua proceso mientras sea menor ala lista de contactos
        if (contactos[i].nombre === nombre) {  //accedo a cada contacto en array en base a nombre comparado connombre a conseguir
            return contactos [i][propiedad] || "la propiedad no existe";  //uso corchetes por que es variable. si existe se retorna uso OR si no existe la propiedad
        }
    }
    return "el contacto no esta en la lista de conrtactos";
}

//console.log(buscarPerfil("nora", "gustos")); //devuelve pizza y programacion
//console.log(buscarPerfil("diego", "gustos")); //devuelve cafe y magia
console.log(buscarPerfil("Bob", "numero")); //devuelve el contacto no esta en la lista
