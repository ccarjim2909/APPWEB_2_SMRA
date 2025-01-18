const peso = parseInt(prompt("Introduce su peso en Kilogramos"));

const altura = parseFloat(prompt("Introduce su altura en metros"));

 // Calcular IMC
 let imc = peso / (altura * altura);

 // Determinar la clasificacion
 let clasificacion = "";
 if (imc < 18.5) {
     clasificacion = "Bajo peso";
 } 
 else if (imc >= 18.5 && imc < 25) {
     clasificacion = "Peso normal";
 } 
 else if (imc >= 25 && imc < 30) {
     clasificacion = "Sobrepeso";
 } 
 else {
     clasificacion = "Obesidad";
 }


// Mostramos info al usuario
alert("IMC: " + imc + ", Clasificacion: " + clasificacion);