//Conversor de Temperatura

const tipo = prompt("¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius)");
const temperatura = "";


if (tipo == "1"){
    const temperatura = parseInt(prompt("Dime la temperatura en Celsius que quieres comvertir a Fahrenheit"));
    const cambio = (temperatura * 9/5) + 32;
    console.log(temperatura + " grados Celsius son " + cambio + " grados Fahrenheit");
    alert(temperatura + " grados Celsius son " + cambio + " grados Fahrenheit");
}
else if (tipo == "2"){
    const temperatura = parseInt(prompt("Dime la temperatura en Fahrenheit que quieres comvertir a Celsius"));
    const cambio = (temperatura - 32)* 5/9;
    console.log(temperatura + " grados Fahrenheit son " + cambio + " grados Celsius");
    alert(temperatura + " grados Fahrenheit son " + cambio + " grados Celsius");
}
else {
    console.log("No ha escrito ningun tipo de conversion");
    alert("No ha escrito ningun tipo de conversion");
}