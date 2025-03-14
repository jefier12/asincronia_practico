// Función asíncrona para realizar una solicitud HTTP a una URL que se esta dando
const solicitud = async (url) => {
    // Realizamos la petición a la URL usando fetch y esperamos la respuesta
    const peticion = await fetch(url);
    // Convertimos la respuesta a formato JSON
    const data = await peticion.json();
    // Retornamos los datos obtenidos
    return data;
};
// Exportamos la función 'solicitud' como el valor predeterminado del módulo
export default solicitud;
