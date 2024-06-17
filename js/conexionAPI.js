const apiURL = "https://api-alura-geek-puce.vercel.app/Articulos"
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
        throw new Error("Ha ocurrido un erro al crear el articulo")
    }
    return conexionParseada
}

async function eliminarProducto(id){
    const conexion = await fetch(`${apiURL}/${id}`,{
        method:"DELETE",
        headers:{"Content-type":"application/json"},
    })
}

export const conexionAPI={
    listarVideos, crearProducto, eliminarProducto
}