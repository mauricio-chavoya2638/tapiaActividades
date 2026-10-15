const botonCalcular = document.getElementById('btnCalcular');
const campoN1 = document.getElementById('campoN1');
const campoN2 = document.getElementById('campoN2');
const operacion = document.getElementById('operacion');
const resultado = document.getElementById('resultado');

function calcular() {

    const valor1 = parseInt(campoN1.value, 10);
    const valor2 = parseInt(campoN2.value, 10);
    const seleccion = operacion.value;

    resultado.textContent = "";
    
    resultado.parentElement.style.backgroundColor = "";
    resultado.parentElement.style.color = "";

    if (
        campoN1.value === "" ||
        campoN2.value === "" ||
        Number.isNaN(valor1) ||
        Number.isNaN(valor2)
    ) {
        resultado.textContent =
            "Ingresa un número entero válido en cada campo";

        resultado.parentElement.style.backgroundColor = "#6b2737";
        resultado.parentElement.style.color = "#ffffff";

        return;
    }

    switch (seleccion) {

        case "suma":
            resultado.textContent =
                "La respuesta es = " + (valor1 + valor2);

            resultado.parentElement.style.backgroundColor = "#245c4a";
            resultado.parentElement.style.color = "#ffffff";

            break;

        case "resta":
            resultado.textContent =
                "La respuesta es = " + (valor1 - valor2);

            resultado.parentElement.style.backgroundColor = "#28527a";
            resultado.parentElement.style.color = "#ffffff";

            break;

        case "multiplicacion":
            resultado.textContent =
                "La respuesta es = " + (valor1 * valor2);

            resultado.parentElement.style.backgroundColor = "#705c24";
            resultado.parentElement.style.color = "#ffffff";

            break;

        case "division":

            if (valor2 === 0) {
                resultado.textContent =
                    "No es posible dividir entre cero";

                resultado.parentElement.style.backgroundColor = "#6b2737";
                resultado.parentElement.style.color = "#ffffff";

                break;
            }

            resultado.textContent =
                "La respuesta es = " + (valor1 / valor2);

            resultado.parentElement.style.backgroundColor = "#394f6a";
            resultado.parentElement.style.color = "#ffffff";

            break;

        case "potencia":
            resultado.textContent =
                "La respuesta es = " + Math.pow(valor1, valor2);

            resultado.parentElement.style.backgroundColor = "#57416b";
            resultado.parentElement.style.color = "#ffffff";

            break;

        case "residuo":

            if (valor2 === 0) {
                resultado.textContent =
                    "No es posible calcular el residuo con divisor cero";

                resultado.parentElement.style.backgroundColor = "#6b2737";
                resultado.parentElement.style.color = "#ffffff";

                break;
            }

            resultado.textContent =
                "La respuesta es = " + (valor1 % valor2);

            resultado.parentElement.style.backgroundColor = "#365f6b";
            resultado.parentElement.style.color = "#ffffff";

            break;

        case "comparacion":

            if (valor1 === valor2) {
                resultado.textContent =
                    "Los valores son iguales";
            } else {
                resultado.textContent =
                    "Los valores no son iguales";
            }

            resultado.parentElement.style.backgroundColor = "#536d35";
            resultado.parentElement.style.color = "#ffffff";

            break;
    }
}

botonCalcular.addEventListener("click", calcular);