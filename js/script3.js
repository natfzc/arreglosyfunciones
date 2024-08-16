document.getElementById('iniciarSuma').addEventListener('click', function() {
    let suma = 0;
    let numero;
    do {
        numero = parseFloat(prompt('Introduce un número positivo (negativo o cero para terminar):'));
        if (numero > 0) {
            suma += numero;
        }
    } while (numero > 0);
    document.getElementById('resultadoSuma').textContent = `La suma total es: ${suma}`;
});

document.getElementById('formOrdenarNumeros').addEventListener('submit', function(event) {
    event.preventDefault();
    const numeros = [
        parseFloat(document.getElementById('numero1').value),
        parseFloat(document.getElementById('numero2').value),
        parseFloat(document.getElementById('numero3').value),
    ];
    numeros.sort((a, b) => b - a);
    document.getElementById('resultadoOrdenar').textContent = `Números ordenados: ${numeros.join(', ')}`;
});

document.getElementById('formCalcularImporte').addEventListener('submit', function(event) {
    event.preventDefault();
    const importeBruto = parseFloat(document.getElementById('importeBruto').value);
    let importeNeto;
    if (importeBruto > 15000) {
        importeNeto = importeBruto * (1 - 0.16);
    } else {
        importeNeto = importeBruto * (1 - 0.10);
    }
    document.getElementById('resultadoImporte').textContent = `Importe neto: ${importeNeto.toFixed(2)}`;
});

document.getElementById('formCalcularSueldo').addEventListener('submit', function(event) {
    event.preventDefault();
    const salarioBase = 40000;
    const años = parseInt(document.getElementById('añosTrabajo').value, 10);
    let salarioFinal;

    if (años > 10) {
        salarioFinal = salarioBase * 1.10;
    } else if (años > 5) {
        salarioFinal = salarioBase * 1.07;
    } else if (años > 3) {
        salarioFinal = salarioBase * 1.05;
    } else {
        salarioFinal = salarioBase * 1.03;
    }

    document.getElementById('resultadoSueldo').textContent = `Salario ajustado: ${salarioFinal.toFixed(2)}`;
});

document.getElementById('calcularImpares').addEventListener('click', function() {
    let sumaImpares = 0;
    for (let i = 1; i <= 100; i += 2) {
        sumaImpares += i;
    }
    document.getElementById('resultadoImpares').textContent = `La suma de los números impares es: ${sumaImpares}`;
});

document.getElementById('formMostrarAsteriscos').addEventListener('submit', function(event) {
    event.preventDefault();
    const cantidad = parseInt(document.getElementById('numeroAsteriscos').value, 10);
    let asteriscos = '';
    for (let i = 0; i < cantidad; i++) {
        asteriscos += '*';
    }
    document.getElementById('resultadoAsteriscos').textContent = asteriscos;
});

document.getElementById('mostrarTablas').addEventListener('click', function() {
    let tablas = '';
    for (let i = 1; i <= 10; i++) {
        tablas += `Tabla del ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            tablas += `${i} x ${j} = ${i * j}\n`;
        }
        tablas += '\n';
    }
    document.getElementById('resultadoTablas').textContent = tablas;
});

document.getElementById('mostrarFuncionesArreglos').addEventListener('click', function() {
    const arreglo = [1, 2, 3, 4, 5];
    let resultadoArreglos = '';

    resultadoArreglos += `Arreglo inicial: ${arreglo.join(', ')}\n`;

    const ultimoElemento = arreglo.pop();
    resultadoArreglos += `Después de pop: ${arreglo.join(', ')}, elemento eliminado: ${ultimoElemento}\n`;

    arreglo.push(6);
    resultadoArreglos += `Después de push(6): ${arreglo.join(', ')}\n`;

    const primerElemento = arreglo.shift();
    resultadoArreglos += `Después de shift: ${arreglo.join(', ')}, elemento eliminado: ${primerElemento}\n`;

    arreglo.unshift(0);
    resultadoArreglos += `Después de unshift(0): ${arreglo.join(', ')}\n`;

    arreglo.splice(2, 1, 'nuevo');
    resultadoArreglos += `Después de splice(2, 1, 'nuevo'): ${arreglo.join(', ')}\n`;

    delete arreglo[3];
    resultadoArreglos += `Después de delete arreglo[3]: ${arreglo.join(', ')}\n`;

    arreglo.reverse();
    resultadoArreglos += `Después de reverse: ${arreglo.join(', ')}\n`;

    arreglo.sort();
    resultadoArreglos += `Después de sort: ${arreglo.join(', ')}\n`;

    const nuevoArreglo = arreglo.concat([7, 8, 9]);
    resultadoArreglos += `Después de concat([7, 8, 9]): ${nuevoArreglo.join(', ')}\n`;

    const cadena = arreglo.join(' - ');
    resultadoArreglos += `Después de join(' - '): ${cadena}\n`;

    const longitud = arreglo.length;
    resultadoArreglos += `Longitud del arreglo: ${longitud}\n`;

    document.getElementById('resultadoArreglos').textContent = resultadoArreglos;
});

document.getElementById('toggleFormulario').addEventListener('click', function() {
    const formulario = document.getElementById('formIngreso');
    formulario.classList.toggle('oculto');
});
