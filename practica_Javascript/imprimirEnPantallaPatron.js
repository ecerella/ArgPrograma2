//quiero hacer barrido de pantalla y escribir caracteres

//*
//**
//***
//****
//*****
//******

/*
for(let i = 1; i <= 6; ++i) {
    let resultado = "";

    for(let j = 1; j <=i; ++j) {
        resultado += "* ";
    }
    console.log(resultado);
}

*/

//desde numero entero dibujo cuadrado de esa dimension con "+"
//un array de n posiciones que llenamos con un string de n veces n
//todo eso se transforma en string con join. cada elemento se une con un salto de linea
function generateSquare(n) {
    return Array(n)
    .fill("+".repeat(n))
    .join("\n")
}
generateSquare(10)
 