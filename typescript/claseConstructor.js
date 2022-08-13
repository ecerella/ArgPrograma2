var petShop = /** @class */ (function () {
    function petShop(nombreUser, apellidoUser, mascotaUser, razaUser, direccionUser, numeroUser) {
        this.nombre = nombreUser;
        this.apellido = apellidoUser;
        this.mascota = mascotaUser;
        this.raza = razaUser;
        this.direccion = direccionUser;
        this.numero = numeroUser;
    }
    return petShop;
}());
var petShopSoftware = new petShop("ezequiel", "cerella", "willy", "beagle", "ceballos", 991);
console.log(petShopSoftware);
