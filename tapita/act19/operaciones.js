const botonsuma = document.getElementById('btnSuma');
const botonresta = document.getElementById('btnResta');
const botonmulti = document.getElementById('btnMultiplicacion');
const botondivi = document.getElementById('btnDivision');
const botoncompa = document.getElementById('btnComparacion');
const n1 = document.getElementById('campoN1');
const n2 = document.getElementById('campoN2');
const resultado = document.getElementById('resultado');

function sumarN1yN2() {
    const n1 = parseInt(campoN1.value, 10);
    const n2 = parseInt(campoN2.value, 10);

    const suma = n1 + n2;

    if (Number.isNaN(suma)){
    resultado.textContent = "Ingresa un número entero válido en cada campo.";
    return;
    }

    resultado.textContent = "La respuesta es = " + (suma);
}

function restaN1yN2() {
    const n1 = parseInt(campoN1.value, 10);
    const n2 = parseInt(campoN2.value, 10);

    const resta = n1 - n2;

    if (Number.isNaN(resta)){
    resultado.textContent = "Ingresa un número entero válido en cada campo.";
    return;
    }

    resultado.textContent = "La respuesta es = " + (resta);
}

function multiplicacionN1yN2() {
    const n1 = parseInt(campoN1.value, 10);
    const n2 = parseInt(campoN2.value, 10);

    const multi = n1 * n2;

    if (Number.isNaN(multi)){
    resultado.textContent = "Ingresa un número entero válido en cada campo.";
    return;
    }

    resultado.textContent = "La respuesta es = " + (multi);
}

function divisionN1yN2() {
    const n1 = parseInt(campoN1.value, 10);
    const n2 = parseInt(campoN2.value, 10);

    const divi = n1 / n2;

    if (Number.isNaN(divi)){
    resultado.textContent = "Ingresa un número entero válido en cada campo.";
    return;
    }

    if (Number(n2) === 0 ){
    resultado.textContent = "No es posible dividir entre cero.";
    return;
    }

    resultado.textContent = "La respuesta es = " + (divi);
}

function comparacionN1yN2() {
    const n1 = parseInt(campoN1.value, 10);
    const n2 = parseInt(campoN2.value, 10);

    if (Number.isNaN(n1)||Number.isNaN(n2)){
    resultado.textContent = "Ingresa un número entero válido en cada campo.";
    return;
    }

    if (Number(n1)===Number(n2)){
    resultado.textContent = "Los valores son iguales";
    return;
    }else{
        resultado.textContent = "Los valores NO son iguales";
        return;
    }
}

botonsuma.addEventListener("click", sumarN1yN2);
botonresta.addEventListener("click", restaN1yN2);
botonmulti.addEventListener("click", multiplicacionN1yN2);
botondivi.addEventListener("click", divisionN1yN2);
botoncompa.addEventListener("click", comparacionN1yN2);