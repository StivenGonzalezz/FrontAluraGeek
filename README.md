Proyecto alura Week, planteado por el curso ONE-Education 
Se realiza consumo de api local usando dbJSON, duraten el proceso de creacion del proyecto se hizo uso de la libreria, A la hora de subirla a vercel
se crea un repositorio adicional para subir esa base de datos tambien a vercel y asi hacer la peticion de la parte del front a la base de datos subida a vercel
esto debido a que a la hora de subirla a vercel no se puede hacer uso de puertos locales.

Al ejecutarse localmente se debe ir al archivo conexionAPI.js y descomentar la linea la cual cambia esta variable y comentar la linea en la cual la variable tiene una peticion a internet


!! AL USARSE DESDE VERCEL Y CREAR O BORRAR OBJETOS SOLTARA ERROR, PERO EL METODO SE EJECUTARA Y SI LOS PARAMETROS SON CORRECTOS Y/O EL ARTICULO EXISTE LA ACCION SE REALIZARA CORRECTAMENTE, SOLAMENTE SE DEBE RECARGAR LA PAGINA, ESTOS ERRORES NO SE OCACIONAN AL USARSE DE MANERA LOCAL(DESCARGANDO EL FRONT) !!