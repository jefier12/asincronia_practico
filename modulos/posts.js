// Importamos la función 'solicitud' desde el módulo solicitud.js
import solicitud from "./solicitud.js";
// Función asíncrona para obtener los posts de un usuario específico
export const getPost = async (URL, usuario) => {
    // Llamamos a la función 'solicitud' con la URL de los posts filtrando por el ID del usuario
    return await solicitud(`${URL}/posts?userId=${usuario.id}`);
};
