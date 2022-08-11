fetch("http://127.0.0.1:5500/pasajeros.json")
.then((response) => response.json())
.then((pasajeros) => {
    const nombresDePasajeros = pasajeros.map
    ((pasajero) => pasajero.nombre);
    console.log(nombresDePasajeros);
});