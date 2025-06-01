import { Schema, model } from "mongoose";

const maxYearAllowed = new Date().getFullYear() + 5;

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
    },
    category: {
        type: String,
        required: [true, 'Category is required!'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!'],
    },
    director: {
        type: String,
        required: [true, 'Director is required!'],
    },
    year: {
        type: Number,
        required: [true, 'Year is required!'],
        min: [1970, "Year should be equal or greater than 1970!"],
        max: [maxYearAllowed, `Year cannot be larget than ${maxYearAllowed}!`],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, 'Invalid Image URL!'],
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required!'],
        min: [1, 'Rating must be 1 or higher!'],
        max: [10, 'Rating must be 10 or lower!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        maxLength: [800, 'Description is too long!'],
    }
});

const Movie = model('Movie' ,movieSchema);

export default Movie;