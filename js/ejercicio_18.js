document.addEventListener("DOMContentLoaded", () => {

    const parrafo = document.getElementById("Texto principal");
    const boton =document.getElementById("botoon");

     boton.addEventListener("click", () => {
         parrafo.textContent = " !TADAAAA¡ Cambio mi parrafo ";
         boton.textContent = "Cambio Realizado";
     });

});

