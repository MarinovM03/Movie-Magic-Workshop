import { Schema, model, mongo } from "mongoose";

const movieSchema = new Schema({
    title: String,
    category: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    rating: Number,
    description: String
});

const Movie = model('Movie' ,movieSchema);

export default Movie;