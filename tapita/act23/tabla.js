const btnGenerar = document.getElementById('btnGenerar');
const n = document.getElementById('campoN');
const resultado = document.getElementById('resultado');

function generar(event) {
    event.preventDefault();
    const n = parseInt(campoN.value, 10);

    if (Number.isNaN(n)){
    resultado.textContent = "Ingresa un número entero válido.";
    resultado.classList.add("con-borde");
    return;
    }

    resultado.textContent = "";

    resultado.classList.add("con-borde");

    for (let i = 1; i < 11; i++) {
        resultado.textContent += `${n} x ${i} = ${n*i}\n`;
    }
}

btnGenerar.addEventListener("click", generar);