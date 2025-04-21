// Espera a que todo el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll('input[name="lenguaje"]');
  const resultado = document.getElementById("resultado");

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      resultado.textContent = `Seleccionaste: ${radio.value}`;
      console.log(`Seleccionaste: ${radio.value}`);
    });
  });
});
