
import Movie from "../models/Movie.js";


const obtenerPeliculas = async (request, response) => {
    try {
        const peliculas = await Movie.find();
        response.status(200).json(peliculas);
    } catch (error) {
        response.status(500).json({ mensaje: "Error al obtener las películas" });
    }
};


const obtenerPelicula = async (request, response) => {
    try {
        const pelicula = await Movie.findById(request.params.id);

        if (!pelicula) {
            return response.status(404).json({ mensaje: "Película no encontrada" });
        }

        response.status(200).json(pelicula);
    } catch (error) {
        response.status(500).json({ mensaje: "Error al obtener la película" });
    }
};


const crearPelicula = async (request, response) => {
    try {
        const nuevaPelicula = new Movie(request.body);
        const peliculaGuardada = await nuevaPelicula.save();

        response.status(201).json(peliculaGuardada);
    } catch (error) {
        response.status(400).json({ mensaje: "Error al crear la película" });
    }
};


const actualizarPelicula = async (request, response) => {
    try {
        const peliculaActualizada = await Movie.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true, runValidators: true }
        );

        if (!peliculaActualizada) {
            return response.status(404).json({ mensaje: "Película no encontrada" });
        }

        response.status(200).json(peliculaActualizada);
    } catch (error) {
        response.status(400).json({ mensaje: "Error al actualizar la película" });
    }
};


const eliminarPelicula = async (request, response) => {
    try {
        const peliculaEliminada = await Movie.findByIdAndDelete(request.params.id);

        if (!peliculaEliminada) {
            return response.status(404).json({ mensaje: "Película no encontrada" });
        }

        response.status(200).json({ mensaje: "Película eliminada correctamente" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ mensaje: "Error al eliminar la película" });
    }
};



export {
    obtenerPeliculas,
    obtenerPelicula,
    crearPelicula,
    actualizarPelicula,
    eliminarPelicula
};
