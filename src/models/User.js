import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'User Email is required!'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password!'],
    },
});

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 10);
});

const User = model('User', userSchema);

export default User;