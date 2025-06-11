import { Schema, model } from "mongoose";

const validCharactersPattern = /^[a-zA-Z0-9 ]+$/;

const castSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        validate: [validCharactersPattern, 'Only english letters, digits and whitespace are allowed!'],
        minLength: [5, 'Name should be at least 5 characters long!'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [1, 'Age must be at least 1!'],
        max: [120, 'Age must be no more than 120!'],
    },
    born: {
        type: String,
        required: [true, 'Born place is required!'],
        validate: [validCharactersPattern, 'Only english letters, digits and whitespace are allowed!'],
        minLength: [10, 'Born should be at least 10 characters long!']
    },      
    imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, 'Invalid Image URL!'],
    },
});

const Cast = model('Cast', castSchema);

export default Cast;