let nombres = ['Carlos', 'Gerardo', 'Carla', 'Jose', 'Alejandro','Yve'];
let mayor = nombres[0];


for(let i =1; i<nombres.length;i++){
    if(nombres[i].length>mayor.length){
        mayor = nombres[i];
    }
}
console.log("Nombre mas largo: "+ mayor);