import { Schema, model, Types } from "mongoose";

const maxYearAllowed = new Date().getFullYear() + 5;
const validCharactersPattern = /^[a-zA-Z0-9 ]+$/;

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        validate: [validCharactersPattern, 'Only english letters, digits and whitespace are allowed!'],
        minLength: [5, 'Title should be at least 5 characters long!'],
    },
    category: {
        type: String,
        required: [true, 'Category is required!'],
        enum: {
            values: ['tv-show', 'animation', 'movie', 'documentary', 'short-film'],
            message: (props) => `${props.value} is not a valid category`, 
        }
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!'],
        lowercase: true,
        validate: [validCharactersPattern, 'Only english letters, digits and whitespace are allowed!'],
        minLength: [5, 'Genre should be at least 5 characters long!'],
    },
    director: {
        type: String,
        required: [true, 'Director is required!'],
        validate: [validCharactersPattern, 'Only english letters, digits and whitespace are allowed!'],
        minLength: [5, 'Director should be at least 5 characters long!'],
    },
    year: {
        type: Number,
        required: [true, 'Year is required!'],
        min: [1900, "Movie year should be equal or greater than 1900!"],
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
        validate: [validCharactersPattern, 'Only english letters, digits and whitespace are allowed!'],
        maxLength: [550, 'Description is too long!'],
        minLength: [20, 'Description is too short!'],
    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast',
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

const Movie = model('Movie' ,movieSchema);

export default Movie;