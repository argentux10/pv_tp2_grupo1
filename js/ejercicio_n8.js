const calcularMayor = (numero1, numero2) => {
  if (numero1 > numero2) {
    alert(`${numero1} es mayor que ${numero2}`);
  } else if (numero2 > numero1) {
    alert(`${numero2} es mayor que ${numero1}`);
  } else {
    alert(`Ambos números son iguales: ${numero1}`);
  }
};

// Pruebas
calcularMayor(5, 8);
calcularMayor(10, 3);
calcularMayor(7, 7);
