class petShop{
    nombre: string;
    apellido: string;
    mascota: string;
    raza: string;
    direccion: string;
    numero: number;
    
    constructor(nombreUser: string, apellidoUser: string, mascotaUser: string, razaUser: string, direccionUser: string, numeroUser: number){
        this.nombre = nombreUser;
        this.apellido = apellidoUser;
        this.mascota = mascotaUser;
        this.raza = razaUser;
        this.direccion = direccionUser;
        this.numero = numeroUser;
    }
}
let petShopSoftware = new petShop("ezequiel", "cerella", "willy", "beagle", "ceballos", 991);
console.log(petShopSoftware);