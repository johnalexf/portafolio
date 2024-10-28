let frasePrincipal = document.getElementById('frasePrincipal');

let texto = "Mi determinación para dar una vuelta de 150 km en bicicleta es igual a mi pasión por programar.";
let indice = 0;
let tamañoTexto = texto.length;


function maquinaEscribir(){
    console.log("hola");
    frasePrincipal.innerHTML = ` <h2> ${texto.substring(0,indice++)}|</h2>`;
    if(indice <= tamañoTexto){
        setTimeout(maquinaEscribir, 70);
    }else{
        frasePrincipal.innerHTML = ` <h2> ${texto.substring(0,indice++)}</h2>`; 
    }
}


maquinaEscribir();
