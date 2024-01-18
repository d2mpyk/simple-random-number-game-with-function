let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // No acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else { asignarTextoElemento('p', 'El numero secreto es mayor'); }
        intentos++;
        limpiarCaja();
        document.getElementById('intentar').setAttribute('onfocus', 'true')
    }
    return;
}

function limpiarCaja() {
    // Usa el query Selector por el ID usando la #
    return document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    // Limpiar Caja
    limpiarCaja();
    // Indicar mensajes iniciales
    condicionesIniciales();
    // Deshabilitar el boton de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya fueron sorteados todos los numeros posibles');
    } else {
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Numero Secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    numerosSorteados = [];
}

condicionesIniciales();