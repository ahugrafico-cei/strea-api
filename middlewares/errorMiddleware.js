
// Middleware para rutas no encontradas (404)
const noEncontrado = (request, response, next) => {
    response.status(404).json({
        mensaje: "Ruta no encontrada"
    });
};

// Middleware para errores del servidor (500)
const manejarError = (error, request, response, next) => {
    console.error(error.stack);

    response.status(500).json({
        mensaje: "Error interno del servidor"
    });
};

export { noEncontrado, manejarError };
