

const caja = document.querySelector(".header__cuadrado");
const btn = document.querySelector(".main__btn--open");

btn.addEventListener("click", function () {
    if (caja.style.display == "none") {
        caja.style.display = "block";
        btn.textContent = "Ocultar caja";
    } else {
        caja.style.display = "none";
        btn.textContent = "Mostrar caja";
    }
});




