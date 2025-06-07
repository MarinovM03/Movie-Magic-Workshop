import { Router } from 'express';
import userService from '../services/userService.js';

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('user/register'); 
});

userController.post('/register', async (req, res) => {
    const userData = req.body;
    
    await userService.register(userData);

    res.redirect('user/login');
});

export default userController;