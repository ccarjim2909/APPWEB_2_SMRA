// Objetivo: Calcular a partir de los datos introducidos por el usuario

const gastos_alojamiento = parseFloat(prompt("Introduce los gastos de alojamiento de tus viajes"));

const gastos_alimentacion = parseFloat(prompt("Introduce los gastos de alimentacion de tus viajes"));

const gastos_entretenimiento = parseFloat(prompt("Introduce los gastos de entretenimiento de tus viajes"));


//calculamos la suma de los gastos
const suma = gastos_alimentacion + gastos_alojamiento + gastos_entretenimiento;

//mostramos info al usuario
alert("El coste total del viaje es: " + suma);