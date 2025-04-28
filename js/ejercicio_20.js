const paisSelect = document.getElementById('pais');
const capitalSelect = document.getElementById('capital');

const paisCapitalMap = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Chile": "Santiago",
    "Colombia": "Bogotá",
    "México": "Ciudad de México",
    "Perú": "Lima"
};

paisSelect.addEventListener('change', function() {
    const paisSeleccionado = paisSelect.value;
    const capitalCorrespondiente = paisCapitalMap[paisSeleccionado];

    // Cambiar la capital seleccionada
    for (let i = 0; i < capitalSelect.options.length; i++) {
        if (capitalSelect.options[i].value === capitalCorrespondiente) {
            capitalSelect.selectedIndex = i;
            break;
        }
    }

    // Mostrar en consola
    console.log(`País seleccionado: ${paisSeleccionado}, Capital: ${capitalCorrespondiente}`);
});

// Disparar evento al cargar para establecer capital inicial
paisSelect.dispatchEvent(new Event('change'));