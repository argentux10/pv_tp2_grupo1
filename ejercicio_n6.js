/* Crear un array denominado edades con al menos 8 edades distintas.
Recorrer el array y obtener el promedio de las edades del array.*/

let edades = [25,18,21,26,19,3,43,12,9,55];
let suma = 0;

for (let i = 0; i < edades.length; i++) {

    console.log(edades[i]);
    suma = suma + edades[i];

  }
  const cantidad = edades.length;
  const promedio = suma / cantidad;
  console.log("El promedio de las edades es: " + promedio);