import { conexionAPI } from "./conexionAPI.js";

const form = document.querySelector(("[data-form]"))
const limpiar = document.querySelector(("[data-clean]"))

async function postCard(evento){
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const imagen = document.querySelector("[data-imagen]").value

    try{
        await conexionAPI.crearProducto(nombre,precio,imagen)
    }catch(e){
        alert(e)
    }
}

async function limparCampos(){
    const nombre = document.querySelector("[data-nombre]")
    nombre.innerHTML=""
    const precio = document.querySelector("[data-precio]")
    precio.innerHTML=""
    const imagen = document.querySelector("[data-imagen]")
    imagen.innerHTML=""

}

limpiar.addEventListener("click",()=>limparCampos())
form.addEventListener("submit", evento => postCard(evento))