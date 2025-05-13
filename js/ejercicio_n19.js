import { mostrarDatos } from './funciones_n19.js';

const inputNombre = document.getElementById('Nombre');
const inputApellido = document.getElementById('Apellido');
const inputLibreta = document.getElementById('Libreta');

const inputboton = document.getElementById('mostrarDatos');

inputboton.addEventListener('click', () => {
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const libreta = inputLibreta.value;

    mostrarDatos(nombre, apellido, libreta);
});