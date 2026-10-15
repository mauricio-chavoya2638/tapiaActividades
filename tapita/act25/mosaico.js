const campo = document.getElementById("limite");
const boton = document.getElementById("btnGenerar");
const mensaje = document.getElementById("mensaje");
const mosaico = document.getElementById("mosaico");

function generarMosaico() {
    const texto = campo.value.trim();
    const limite = Number(texto);

    mosaico.textContent = "";

    if(texto === "" || !Number.isInteger(limite) || limite < 1 || limite > 100) {
        mensaje.textContent = "Ingresa un número entero entre 1 y 100";
        campo.focus();
        return;
    }
    mensaje.textContent = "";

    for(let numero = 1; numero <= limite; numero++) {
        const bloque = document.createElement("article");

        bloque.textContent = numero;
        bloque.classList.add("numero");

        if(numero % 2 === 0) {
            bloque.classList.add("par");
        }else{
            bloque.classList.add("impar");
        }

        mosaico.appendChild(bloque);
    }
}
boton.addEventListener("click", generarMosaico);
