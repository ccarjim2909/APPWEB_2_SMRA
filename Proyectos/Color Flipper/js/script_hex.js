
// Declaramos las variables que vamos a usar
const colores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".hex__body__main__btn");

const body = document.querySelector(".hex__body")

const letras = document.querySelector(".hex__body__main__section__color-fondo")


// Función para generar un color hexadecimal aleatorio
function color_fondo() {

    let hex = "#";  // Creamos una variable que empieze con el símbolo '#'

    // Creamos un for para generar 6 caracteres aleatorios para el color hexadecimal
    for (let numero = 0; numero < 6; numero++) {
        const randomColor = colores[Math.floor(Math.random() * colores.length)];/* Variable que elige un numero entre 0 y 1 y 
                                                                            luego se multiplica por el numero que queremos de maximo 
                                                                            y sale uno entre ellos */
        hex += randomColor;  // Concatenamos cada valor a la variable hex
    }

    // Aplicar colores
    body.style.backgroundColor = hex;  // Cambia el color de fondo de la clase hex__body
    btn.style.backgroundColor = hex;  // Cambia el color de fondo de la clase hex__body__main__btn
    letras.textContent = hex;        // Cambia el color de fondo de la clase hex__body__main__section__color-fondo

}

// Añadir evento al botón
btn.addEventListener("click", color_fondo);
