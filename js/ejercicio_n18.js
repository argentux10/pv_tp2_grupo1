const numeros = [3, 7, 1, 9, 5];

const filtrarMayoresQueCinco = (array) => {
  return array.filter(numero => numero > 5);
};

// Prueba
console.log(filtrarMayoresQueCinco(numeros)); // Deberia mostrar [7, 9]
