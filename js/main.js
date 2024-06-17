import { conexionAPI } from "./conexionAPI.js";
import eliminar from "./eliminarObjeto.js";

const lista = document.querySelector("[data-lista]");

listarProductos();

async function listarProductos() {
    try {
        const listaArticulos = await conexionAPI.listarVideos();
        listaArticulos.forEach(element => {
            lista.appendChild(crearCard(element.nombre, element.precio, element.imagen, element.id));
        });
    } catch {
        lista.innerHTML = `<h3 class="inputTittle">Ha ocurrido un problema con la conexión</h3>`;
    }
}

function crearCard(nombre, precio, imagen, id) {
    const articulo = document.createElement("li");
    articulo.className = "card";
    articulo.innerHTML = `
        <img class="cardImage" src="${imagen}" alt="">
        <h3 class="cardTittle">${nombre}</h3>
        <div class="priceZone">
            <span class="cardPrice">$ ${precio}</span>
            <button class="eliminar-btn" data-id="${id}"><i class="gg-trash"></i></button>
        </div>
    `;

    // Añadir el manejador de eventos al botón de eliminar
    const eliminarBtn = articulo.querySelector(".eliminar-btn"); 
    eliminarBtn.addEventListener("click", () => eliminar(id));

    return articulo;
}
