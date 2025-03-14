// Importamos funciones desde el módulo index.js
import { getUsuarios, getPost, getCommets,getAlbums,getPhotos } from "./modulos/index.js";
// Definimos la URL base de la API
const URL = "https://jsonplaceholder.typicode.com";
// Definimos un ID de usuario específico
const usuarioId = 3;
// Función asíncrona para obtener información de un usuario por su ID
const getusuarioId = async (usuarioId) => {
    // Obtenemos los datos del usuario
    let usuario = await getUsuarios(URL, usuarioId);
    // Obtenemos los posts del primer usuario devuelto
    let post = await getPost(URL, usuario[0]);
};
// Llamamos a la función con el usuarioId definido
getusuarioId(usuarioId);
// Función para manejar los datos de usuarios, posts y comentarios
const manejardatos = async () => {
    // Obtenemos todos los usuarios
    const usuarios = await getUsuarios(URL);
    // Para cada usuario, obtenemos sus posts y los comentarios de cada post 
    return await Promise.all(usuarios.map(async (usuario) => {
        const posts = await getPost(URL, usuario);
        // Para cada post, obtenemos sus comentarios
        const comentPost = await Promise.all(posts.map(async (post) => {
            const coments = await getCommets(URL, post);
            return { ...post, coments }; // Retornamos el post con los comentarios agregados
        }));
        return { ...usuario, comentPost }; // Retornamos el usuario con sus posts y comentarios
    }));
};
// Llamamos a la función y mostramos el primer usuario en la consola
manejardatos().then((data) => {
    console.log(data[0]);
});

