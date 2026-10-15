const resultados = document.getElementById("resultados");

function generarFizzBuzz() {
    resultados.textContent = "";

    for (let numero = 1; numero <= 100; numero++) {
        const bloque = document.createElement("div");

        if (numero % 3 === 0 && numero % 5 === 0) {
            bloque.textContent = "Fizz"+"+"\n"+"Buzz";
            bloque.classList.add("fizzbuzz");
        } else if (numero % 3 === 0) {
            bloque.textContent = "Fizz";
            bloque.classList.add("fizz");
        } else if (numero % 5 === 0) {
            bloque.textContent = "Buzz";
            bloque.classList.add("buzz");
        } else {
            bloque.textContent = numero;
            bloque.classList.add("numero");
        }

        bloque.classList.add("bloque");
        resultados.appendChild(bloque);
    }
}

generarFizzBuzz();
