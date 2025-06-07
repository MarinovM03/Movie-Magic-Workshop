import { Router } from 'express';
import userService from '../services/userService.js';

const userController = Router();

//TODO: Add actions
userController.get('/register', (req, res) => {
    res.render('user/register'); 
});

userController.post('/register', async (req, res) => {
    const userData = req.body;
    
    // Register user
    await userService.register(userData);

    res.redirect('user/login');
});

export default userController;