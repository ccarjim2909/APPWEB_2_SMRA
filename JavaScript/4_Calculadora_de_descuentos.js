const precio_original = parseFloat(prompt("Inserta el precio original del producto:"));

const descuento = parseInt(prompt("Inserta el porcentaje de descuento a aplicar:"));

const descuento_aplicado = (precio_original * descuento) / 100;

const precio_final = precio_original - descuento_aplicado

alert("El precio final del producto después de aplicar un descuento del " + descuento + "% es: "+ precio_final + " euros.");