document.getElementById('formularioVoto').addEventListener('submit', function(event) {
    event.preventDefault();

    const seccionSeleccionada = document.getElementById('seccion').value;
    const resultado = document.getElementById('resultado');

    procesarVoto(seccionSeleccionada);
});

function procesarVoto(seccion) {
    switch (seccion) {
        case 'norte':
            mostrarResultado('Gracias por votar por rosa.');
            break;
        case 'sur':
            mostrarResultado('Gracias por votar por negro.');
            break;
        case 'centro':
            mostrarResultado('Gracias por votar por azul.');
            break;
        default:
            mostrarResultado('Sección no válida.');
            break;
    }
}

function mostrarResultado(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensaje;
}
