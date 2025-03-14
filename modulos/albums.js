// Importamos la función 'solicitud' desde el módulo solicitud.js
import solicitud from "./solicitud.js";

export const getAlbums = async(URL,usuario)=>{
    return  await solicitud(`${URL}/albums?userId=${usuario.id}`) 
}