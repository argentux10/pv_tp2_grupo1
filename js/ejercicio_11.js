export const calcularKilometros =() =>{
    const kilometros = parseFloat(document.getElementById('txtkilometros').value);
    const litros = parseFloat(document.getElementById('txtlitros').value);
    const consumo = litros / kilometros;

    document.getElementById('resultado').innerText = `El consumo de combustible por kilometros: ${consumo.toFixed(2)}`;
};

