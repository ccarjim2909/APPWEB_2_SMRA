document.addEventListener("DOMContentLoaded", () => {
    const pantalla = document.querySelector(".body__main__calculadora__pantalla");
    const botones = document.querySelectorAll(".body__main__calculadora__btn");
  
    let operacion = "";
  
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const valor = boton.textContent;
    
            if (valor == "C") {  /* Si le damos a la C borramos reseteamos el contador y limpiamos la pantalla */
            operacion = "";
            return pantalla.value = operacion;
            }
    
            /* Parte cientifica */
            if (valor == "√") {  /* Si le damos a la raiz cuadrada hace el calculo */
            operacion = Math.sqrt(eval(operacion)).toString();  /* Las formulas matematicas las he tenido que buscar*/
            return pantalla.value = operacion; /* Devuelve en nuestra pantalla el calulo hecho*/
            }
    
            if (valor == "x²") { /*Si le damos al cubo hace el calculo */
            operacion = Math.pow(eval(operacion), 2) + ""; /* Las formulas matematicas las he tenido que buscar*/
            return pantalla.value = operacion; /* Devuelve en nuestra pantalla el calulo hecho*/
            }
    
            if (valor == "sin") { /*Si le damos al seno hace el calculo */
            operacion = Math.sin(eval(operacion)) + "";  /* Las formulas matematicas las he tenido que buscar*/
            return pantalla.value = operacion; /* Devuelve en nuestra pantalla el calulo hecho*/
            }
    
            if (valor == "cos") { /*Si le damos al coseno hace el calculo */
            operacion = Math.cos(eval(operacion)) + "";  /* Las formulas matematicas las he tenido que buscar*/
            return pantalla.value = operacion; /* Devuelve en nuestra pantalla el calulo hecho*/
            }
    
    
            function calcularOperacion(numeros) { /* Funcion que hace el calculo que hemos hecho */
                return eval(numeros) + ""; /* Devuelve en nuestra pantalla el calulo hecho*/
            }

            if (valor == "=") { /*Si le damos al igual hace el calculo con lo que hemos almacenado */
                const resultado = calcularOperacion(operacion);
                operacion = resultado; /* Aqui volvemos a guardar en operacion el resultado por si queremos continuar operando */
                return pantalla.value = resultado; /* Devuelve en nuestra pantalla el calulo hecho*/
            }
    
            operacion = operacion + valor; /* Aqui se va guardando toda nuestra operacion para despues calcularla */
            pantalla.value = operacion; /* Y aqui la mostramos por pantalla */
        });
        });
    });