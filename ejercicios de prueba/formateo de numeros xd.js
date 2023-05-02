const prompt = require("prompt-sync")()


let precio=prompt("digite un numero plox");
const numb=precio;

function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

console.log(separator(numb))