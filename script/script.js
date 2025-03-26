let menuNavbar = document.querySelector('#menuNavbar');
let desplegadoMenuNavbar = false;

function mostrarMenuNavbar(){
    menuNavbar.classList.remove('ocultar');
    menuNavbar.classList.add('mostrar');
}

function ocultarMenuNavbar(){
    menuNavbar.classList.remove('mostrar');
    menuNavbar.classList.add('ocultar');
}

function desplegarMenuNavbar(){
    if(!desplegadoMenuNavbar){
        desplegadoMenuNavbar = true;
        mostrarMenuNavbar();
    }else{
        desplegadoMenuNavbar = false;
        ocultarMenuNavbar();
    }
}

function detectarCambioVentana() {
    const anchoVentana = window.innerWidth;
    anchoVentana < 992 ? 
    ocultarMenuNavbar():
    mostrarMenuNavbar()
}
  

let frasePrincipal = document.getElementById('frasePrincipal');

let texto = "Mi determinación para dar una vuelta de 150 km en bicicleta es igual a mi pasión por programar.";
let indice = 0;
let tamañoTexto = texto.length;


function maquinaEscribir(){
    frasePrincipal.innerHTML = ` <h2 style="font-style: italic;"> ${texto.substring(0,indice++)}|</h2>`;
    if(indice <= tamañoTexto){
        setTimeout(maquinaEscribir, 50);
    }else{
        frasePrincipal.innerHTML = ` <h2 style="font-style: italic;"> ${texto.substring(0,indice++)}</h2>`; 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    // Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
    setTimeout(detectarCambioVentana, 1000);
    window.addEventListener('resize', detectarCambioVentana);
    
    setTimeout(maquinaEscribir, 1000);
  });


