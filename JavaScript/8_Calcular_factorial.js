// Calcular factorial

document.addEventListener("DOMContentLoaded", function(){

function calculateFactorial (numero) {
    let resultado = 1;
    for (let n = 1; n <= numero; n++) {
        resultado = resultado * n;
    }
    return resultado;
}

const numero_usuario = prompt ("Ingrese un número entero no negativo");
const numero_usuario_Int = parseInt(numero_usuario);

if (numero_usuario_Int < 0) {
    console.log("Ha introducido un numero negativo");
    alert("Ha introducido un numero negativo");
}

else {
    const factorial = calculateFactorial (numero_usuario_Int);
    alert("Ha ingresado el numero " + numero_usuario_Int + " y su factorial es " + factorial);
}

});