// Importamos la función 'solicitud' desde el módulo solicitud.js
import solicitud from "./solicitud.js";
// Función asíncrona para obtener los comentarios de un post específico
export const getCommets = async (URL, post) => {
    // Llamamos a la función 'solicitud' con la URL de los comentarios filtrando por el ID del post
    return await solicitud(`${URL}/comments?postId=${post.id}`);
};
