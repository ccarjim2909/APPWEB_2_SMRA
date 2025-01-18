// Area y perimetro de un circulo

document.addEventListener("DOMContentLoaded", function(){

    function A_circulo (radio) {
        return 3.1416 * (radio**2);
    }



    function P_circulo (radio) {
        return 2 * 3.1416 * radio;
    }


    const radio = parseInt(prompt("Ingresa el radio de un circulo"));
    
    alert("El area de un circulo de radio " + radio + " es " + A_circulo(radio) + " y el perimetro es " + P_circulo(radio));



});