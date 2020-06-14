//ESTRUCTURA DE UNA PROMESA
//ECAMASCRIPT 6
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//enlace api
const API = "https://rickandmortyapi.com/api/character/";
//id 
const PERSONAJE = ":id";

const personaje_rick = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", API + PERSONAJE.replace(":id", 2), true); // recoje INFORMACION DE API cambia la id por el numero
    xhttp.send(); //envia la informacion
    xhttp.onreadystatechange = function() {
        return new Promise((resolve, reject) => {
                if (xhttp.status === 200) { 
            //muestra la informacion de las apis
                    resolve(JSON.parse(xhttp.responseText));
                } else { //EN CASO DE ERROR SE IMPRIMIRA LA SIGUIENTE INFORMACION
                    const ERROR = console.error("Error : " + API + PERSONAJE.replace(":id", 2));
                    return reject(ERROR);
                }
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
}
}
   //IMPRIME EN TERMINAL LOS RESULTADOS
Promise.all([personaje_rick()])
    .then((response) => {
        //si son correctos saldra la siguiente
        console.log('Resultados', response);
    })
    .catch((err) => {
        console.error(err);
    });