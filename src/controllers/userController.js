import { Router } from 'express';
import userService from '../services/userService.js';

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('user/register'); 
});

userController.post('/register', async (req, res) => {
    const userData = req.body;
    
    await userService.register(userData);

    res.redirect('login');
});

userController.get('/login', (req, res) => {
    res.render('user/login');
});

userController.post('/login', async (req, res) => {
    const loginData = req.body

    // Call service login
    const token = await userService.login(loginData);

    // TODO: Set auth cookie

    // redirect to home
    res.redirect('home');
});

export default userController;