// 1. Listar todas las tareas pendientes por cada usuario registrado en la API
// Importamos funciones desde el módulo index.js
import { getUsuarios} from "./modulos/index.js";
// Definimos la URL base de la API
const URL = "https://jsonplaceholder.typicode.com";
// Definimos un ID de usuario específico

const getusuarioId = async (usuarioId) => {
    // Obtenemos los datos del usuario
    let usuario = await getUsuarios(URL, usuarioId);
    // Obtenemos los posts del primer usuario devuelto
};





