import { Router } from 'express';
import userService from '../services/userService.js';

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('user/register', { pageTitle: 'Register' }); 
});

userController.post('/register', async (req, res) => {
    const { email, password, rePassword } = req.body;
    
    await userService.register({ email, password, rePassword });

    res.redirect('login');
});

userController.get('/login', (req, res) => {
    res.render('user/login', { pageTitle: 'Login' });
});

userController.post('/login', async (req, res) => {
    const { email, password } = req.body

    const token = await userService.login(email, password);

    res.cookie('auth', token);

    res.redirect('/');
});

userController.get('/logout', (req, res) => {
    res.clearCookie('auth');

    // TODO: Invalidate token
    
    res.redirect('/');
});

export default userController;