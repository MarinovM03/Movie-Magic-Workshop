import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

import User from "../models/User.js";

const jwtSecret = 'a2g7R#8dK!1pT@3zUqV5sY$6cWfL^9jNjdwa3las';

export default {
    register(userData) {
        return User.create(userData);
    },
    async login(email, password) {
        // Get user from DB
        const user = await User.findOne({email});

        // Check if user exists
        if (!user) {
            return new Error('No such user found!');
        }

        // Validate password
        const isValid = await bcrypt.compare(password, user.password);
        
        // Return error if not valid
        if (!isValid) {
            return new Error('Invalid password!');
        }

        // If valid generate token
        const payload = {
            id: user.id,
            email: user.email,
        };

        // TODO: make it async
        const token = jsonwebtoken.sign(payload, jwtSecret, { expiresIn: '2h' });

        return token;
    },
};