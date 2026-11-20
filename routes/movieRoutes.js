import express from "express";

import {
    obtenerPeliculas,
    obtenerPelicula,
    crearPelicula,
    actualizarPelicula,
    eliminarPelicula
} from "../controllers/movieController.js";

const router = express.Router();

// Obtener todas las películas
router.get("/", obtenerPeliculas);

// Obtener una película por ID
router.get("/:id", obtenerPelicula);

// Crear una película
router.post("/", crearPelicula);

// Actualizar una película
router.put("/:id", actualizarPelicula);

// Eliminar una película
router.delete("/:id", eliminarPelicula);

export default router;
