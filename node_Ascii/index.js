/*
const figlet = require("figlet")

figlet("ecerella", (err, result) => {
    console.log(err || result)
});
*/

const figlet = require("figlet")

figlet("run! martin", {
    font: "Ghost"

},(err, result) => {
    console.log(err || result)
});