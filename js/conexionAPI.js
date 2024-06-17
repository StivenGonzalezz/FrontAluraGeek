import { mainConexion } from "./main.js";

const apiURL = "https://api-alura-geek-puce.vercel.app/Articulos"
// const apiURL = "http://localhost:3000/articulos"



async function listarVideos(){
    const conexion = await fetch(apiURL)
    const conexionParseada = conexion.json()
    return conexionParseada
}

async function crearProducto(nombre, precio, imagen){
    const conexion = await fetch(apiURL,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
    const conexionParseada = conexion.json()

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al crear el articulo")
    }
    await mainConexion.listarProductos()
    return conexionParseada
}

async function eliminarProducto(id){
    const conexion = await fetch(`${apiURL}/${id}`,{
        method:"DELETE",
        headers:{"Content-type":"application/json"},
    })
    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al eliminar el articulo")
    }
    await mainConexion.listarProductos()
}

export const conexionAPI={
    listarVideos, crearProducto, eliminarProducto
}