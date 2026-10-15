const campoHoras = document.getElementById('horas');
const credencial = document.getElementById('credencial');
const autorizacion = document.getElementById('autorizacion');
const pendiente = document.getElementById('pendiente');
const botonVerificar = document.getElementById('btnVerificar');
const resultado = document.getElementById('resultado');
const areaResultado = resultado.parentElement;

function verificarPrestamo() {
    const horas = parseInt(campoHoras.value, 10);
    const tieneCredencial = credencial.checked;
    const tieneAutorizacion = autorizacion.checked;
    const tienePendiente = pendiente.checked;

    areaResultado.style.backgroundColor = "";
    areaResultado.style.color = "";
    resultado.textContent = "";
    if (campoHoras.value === "" || Number.isNaN(horas)){
        resultado.textContent = "Ingresa un número entero en el campo de horas";
        areaResultado.style.backgroundColor = "#b36e15";
        areaResultado.style.color = "rgba(255, 255, 255, 0.8)";
        return;
    }

    const duracionValida = horas >= 1 && horas <= 3;
    const identificacionValida = tieneCredencial || tieneAutorizacion;
    const sinEquipoPendiente = !tienePendiente;
    const prestamoAutorizado = duracionValida && identificacionValida &&sinEquipoPendiente;
    if (prestamoAutorizado){
        resultado.textContent = "Préstamo autorizado";
        areaResultado.style.backgroundColor = "#218d2f";
        areaResultado.style.color = "rgba(255, 255, 255, 0.8)";

    }else{
        resultado.textContent = "Préstamo no autorizado";
        areaResultado.style.backgroundColor = "#910808";
        areaResultado.style.color = "rgba(255, 255, 255, 0.8)";
    }
}

botonVerificar.addEventListener("click", verificarPrestamo);