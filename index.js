/*Crea un nuevo proyecto de Node

- Instala la dependencia Winston

- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch*/
const logger= require('./logger');

const mensajeError = variable =>{

    if(variable==="si" || variable==="no"){
        return variable
    }
    logger.error(" se debe responder si o no")
}
const res="si";
try{
    const respuesta=mensajeError(res)
    console.log(respuesta)
}catch(e){
   mensajeError()
    
}