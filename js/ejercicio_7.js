//Declarar un array denominado nombres con al menos 6 nombres.
// Obtener el nombre más largo del array nombres. Las cadenas de textos
// (String) son listas de caracteres y las listas tienen un largo (length) que indica su tamaño.

let nombres =["maria"," marcos","juan","pablo","ana","carlos","josefina","alejandra"];

let suma=0 ;
let numero =0;

let nombreMasLargo;
for(let i=0; i< nombres.length ;i++){

    if (nombres[i].length > numero){

        numero = nombres[i].length;
        nombreMasLargo = nombres[i];

    }

}

console.log("El nombre con mayor caracteres es: " + nombreMasLargo);