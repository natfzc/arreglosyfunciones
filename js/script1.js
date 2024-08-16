document.getElementById('botonGenerar').addEventListener('click', function() {
    let numeroCajas = prompt('¿Cuántas cajas deseas colocar?');
    numeroCajas = parseInt(numeroCajas);
    const contenedor = document.getElementById('contenedorCajas');
    contenedor.innerHTML = '';
    if (isNaN(numeroCajas) || numeroCajas < 1) {
        alert('Por favor, introduce un número válido mayor a 0.');
        return;
    }
    for (let i = 0; i < numeroCajas; i++) {
        const caja = document.createElement('article');
        caja.classList.add('caja');

        if (numeroCajas < 8) {
            caja.classList.add('cajaVertical');
        } else {
            caja.classList.add('cajaHorizontal');
        }
        caja.textContent = `Caja ${i + 1}`;
        contenedor.appendChild(caja);
    }
    if (numeroCajas < 8) {
        contenedor.style.flexDirection = 'column';
        contenedor.style.alignItems = 'center';
    } else {
        contenedor.style.flexDirection = 'row';
    }
});
