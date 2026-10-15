const campo = document.getElementById("elemento");
const boton = document.getElementById("btnAgregar");
const mensaje = document.getElementById("mensaje");
const lista = document.getElementById("lista");

function agregarElemento() {
const texto = campo.value.trim();

if (texto === "") {
mensaje.textContent = "Escribe un elemento válido";
campo.focus();
return;
}

const nuevoElemento = document.createElement("li");

nuevoElemento.textContent = texto;
nuevoElemento.classList.add("elemento-lista");

lista.appendChild(nuevoElemento);

mensaje.textContent = "";
campo.value = "";
campo.focus();
}

boton.addEventListener("click", agregarElemento);
