const texto = document.querySelector(".body__main__form__cuadrotext");
const btn = document.querySelector(".body__main__form__boton");
const lista = document.querySelector(".body__main__lista");

// Agregar una tarea
function addTask(event) {

    const tarea = texto.value; 

    if (tarea != ""){ // Entra si no esté vacia

        // Crea un nuevo elemento de lista
        const li = document.createElement("li");
        li.textContent = tarea;

        // Crea el boton de eliminar
        const btn_borrar = document.createElement("button");
        btn_borrar.textContent = "X";

        // Evento para eliminar
        btn_borrar.addEventListener("click", function() {
            li.remove();
        }); 

        // Agregar el botón de eliminar al li
        li.appendChild(btn_borrar);
        
        // Agregar la tarea a la lista
        lista.appendChild(li);
        
        // Limpiar el campo de entrada
        texto.value = "";
    }
}

// Evento para el botón para llamar a la funcion
btn.addEventListener("click", addTask);
