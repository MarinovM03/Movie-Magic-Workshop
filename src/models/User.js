import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'User Email is required!'],
        unique: true,
        validate: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, 'Invalid Email format!'],
        minLength: [10, 'Email should be at least 10 characters long!'],
    },
    password: {
        type: String,
        required: [true, 'Please provide password!'],
        validate: [/^[a-zA-Z0-9]+$/, 'Password should be alphanumeric!'],
        minLength: [6, 'Password should be at least 6 characters long!'],
    },
});

// // Validate if user email is unique with custom validator
// userSchema.path('email').validate(async function(value) {
//     const existingUser = await User.findOne({ email: value });

//     if (existingUser) {
//         throw new Error('User already exists!');
//     }
// }); 

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 10);
});

const User = model('User', userSchema);

export default User;