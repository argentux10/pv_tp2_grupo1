import { mostrarDatos } from './funciones_n19.js';


// Accede a los elementos del DOM
const inputNombre = document.getElementById('Nombre');
const inputApellido = document.getElementById('Apellido');
const inputLibreta = document.getElementById('Libreta');

const inputboton = document.getElementById('mostrarDatos');

// Asigna el evento
inputboton.addEventListener('click', () => {
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const libreta = inputLibreta.value;

    mostrarDatos(nombre, apellido, libreta);
});