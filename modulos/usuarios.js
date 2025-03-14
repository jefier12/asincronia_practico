// Importamos la función 'solicitud' desde el módulo solicitud.js
import solicitud from "./solicitud.js";
// Función asíncrona para obtener los usuarios, con opción de filtrar por ID
export const getUsuarios = async (URL, id) => {
    let ruta = "";
    // Si se proporciona un ID, construimos la URL para obtener un usuario específico
    if (id) {
        ruta = `${URL}/users?id=${id}`;
    } else {
        // Si no hay ID, obtenemos todos los usuarios
        ruta = `${URL}/users`;
    }
    // Realizamos la solicitud a la API usando la ruta generada
    const usuarios = await solicitud(ruta);
    // Para cada usuario, obtenemos sus álbumes
    const usuariosConAlbumes = await Promise.all(usuarios.map(async (usuario) => {
        const albumes = await solicitud(`${URL}/albums?userId=${usuario.id}`);
        return { ...usuario, albumes };
    }));
    // Retornamos los datos obtenidos junto con los álbumes
    return usuariosConAlbumes;
};

