const art= require("ascii-art")

art.font("hola mundo", "Doom", (err, renderer) =>{
    console.log(err || renderer);
})
