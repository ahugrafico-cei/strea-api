import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import { noEncontrado, manejarError } from "./middlewares/errorMiddleware.js";

dotenv.config();

const servidor = express();

// Middleware para recibir datos JSON
servidor.use(express.json());

// Ruta inicial
servidor.get("/", (request, response) => {
    response.json({
        mensaje: "API Strea conectando con tierricolas :D"
    });
});

// Rutas de películas
servidor.use("/api/movies", movieRoutes);

// Middleware para rutas no encontradas (404)
// Ruta temporal para comprobar el middleware 500
servidor.get("/prueba-error", (request, response, next) => {
    next(new Error("Error de prueba 500"));
});

servidor.use(noEncontrado);

// Middleware para errores del servidor (500)
servidor.use(manejarError);

const PORT = process.env.PORT || 4000;

// Conectar a MongoDB y levantar el servidor
conectarDB().then(() => {
    servidor.listen(PORT, () => {
        console.log(`Servidor funcionando en el puerto ${PORT}`);
    });
});
