const botonverif = document.getElementById('btnVerif');
const n = document.getElementById('campoN');
const resultado = document.getElementById('resultado');

function verificacion() {
    const n = parseInt(campoN.value, 10);

    if (Number.isNaN(n)){
    resultado.textContent = "Ingresa un número entero válido.";
    return;
    }

    if (Number(n) === 0){
    resultado.textContent = "El valor es 0.";
    return;
    }

    if (Number(n)%2 === 0){
    resultado.textContent = "El valor es par.";
    return;
    }else{
        resultado.textContent = "El valor es impar.";
        return;
    }
}

botonverif.addEventListener("click", verificacion);