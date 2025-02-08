// Declaramos las variables que vamos a usar

const colores = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown",
    "Black", "White", "Gray", "Cyan", "Magenta", "Lime", "Indigo",
    "Violet", "Teal", "Turquoise", "Gold", "Silver"];

const btn = document.querySelector(".body__main__btn");

const body = document.querySelector(".body")

const letras = document.querySelector(".body__main__section__color-fondo")


// Función para cambiar el color de fondo
function color_fondo() {

    // Generar un numero aleatorio para elegir una posicion de nuestra lista
    const randomColor = colores[Math.floor(Math.random() * colores.length)];
    
    // Aplicar colores
    body.style.backgroundColor = randomColor; // Cambia el color de fondo de la clase hex__body__main__btn
    btn.style.backgroundColor = randomColor; // Cambia el color de fondo de la clase hex__body__main__btn
    letras.textContent = randomColor;       // Cambia el color de fondo de la clase hex__body__main__btn
    /*letras.style.color = randomColor;
    Esto no se si pedia, cambia el color de las letras del nombre del color*/
}

// Añadir evento al botón
btn.addEventListener('click', color_fondo);