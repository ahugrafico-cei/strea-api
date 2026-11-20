
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    watched: {
        type: Boolean,
        required: true,
        default: false
    },
    userId: {
        type: String,
        required: true
    }
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
