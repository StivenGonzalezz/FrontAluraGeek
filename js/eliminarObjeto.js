import { conexionAPI } from "./conexionAPI.js";

const btn = document.querySelector("button")

export default async function delCard(evento){
    
    try{
        await conexionAPI.eliminarProducto(evento)
    }catch(e){
        alert(e)
    }

}
