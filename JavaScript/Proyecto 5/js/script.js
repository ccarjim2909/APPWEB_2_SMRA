
const texto = document.querySelector(".body__main__form__cuadrotext");
const btn = document.querySelector(".body__main__form__boton");
const lista = document.querySelector(".body__main__lista");
const array = [];
const btn_r = document.querySelector(".body__main__boton-r");


// Agregar una tarea
function addTask() {
    const tarea = texto.value;

    if (tarea != "") { // Entra si no está vacía
        const li = document.createElement("li");
        li.textContent = tarea;
        li.classList.add("cajaX");


        // Agregar la tarea al array
        array.push(tarea);
        console.log(array);

        // Crea el botón de eliminar
        const btn_borrar = document.createElement("button");
        btn_borrar.textContent = "X";
        btn_borrar.classList.add("botonX");

        // Evento para eliminar
        btn_borrar.addEventListener("click", function() {

           for (let i = 0; i < array.length; i++) {
                if (array[i] == tarea){
                    array.splice(i,1); // Elimina del array
                    console.log(array);
                }
            }
            li.remove();
        });

        // Agregar el botón de eliminar al li
        li.appendChild(btn_borrar);
        lista.appendChild(li);

        texto.value = "";
    }
    




}

btn_r.addEventListener("click", function () {

    // Generar un numero aleatorio para elegir una posicion de nuestra lista
    const tarea_iluminada = array[Math.floor(Math.random() * array.length)]; /* Variable que elige un numero entre 0 y 1 y 
                                                                            luego se multiplica por el numero que queremos de maximo 
                                                                            y sale uno entre ellos */
    tarea_iluminada.style.backgroundColor = "yellow"
})





// Evento para el botón para llamar a la función
btn.addEventListener("click", addTask);

