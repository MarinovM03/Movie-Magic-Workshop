import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [5, 'Age must be at least 5!'],
        max: [120, 'Age must be no more than 120!'],
    },
    born: {
        type: String,
        required: [true, 'Born place is required!'],
    },      
    imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, 'Invalid Image URL!'],
    }
});

const Cast = model('Cast', castSchema);

export default Cast;