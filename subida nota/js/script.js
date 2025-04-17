document.addEventListener("DOMContentLoaded", () => {
  const pantalla = document.querySelector(".body__main__calculadora__pantalla");
  const botones = document.querySelectorAll(".body__main__calculadora__btn");

  let operacion = "";

  botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const valor = boton.textContent;

            if (valor == "C") {
                operacion = "";
                return pantalla.value = operacion;
            }


            function calcularOperacion(numeros) {
                return eval(numeros) + "";
            }

            if (valor == "=") {
                const resultado = calcularOperacion(operacion);
                operacion = resultado;
                return pantalla.value = resultado;
            }
            
            operacion = operacion + valor;
            pantalla.value = operacion;
        });
    });
});