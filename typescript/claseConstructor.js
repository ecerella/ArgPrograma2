var petShop = /** @class */ (function () {
    function petShop(nombreUser, apellidoUser, mascotaUser, razaUser, direccionUser, numeroUser) {
        this.nombre = nombreUser;
        this.apellido = apellidoUser;
        this.mascota = mascotaUser;
        this.raza = razaUser;
        this.direccion = direccionUser;
        this.numero = numeroUser;
    }
    petShop.prototype.obtenerDatos = function () {
        return this.nombre;
    };
    return petShop;
}());
var petSoftware = new petShop("ezequiel", "cerella", "willy", "beagle", "ceballos", 991);
console.log(petSoftware.obtenerDatos());
