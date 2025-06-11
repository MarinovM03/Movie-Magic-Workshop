import { Router } from 'express';
import userService from '../services/userService.js';
import { isAuth } from '../middlewares/authMiddleware.js';

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('user/register', { pageTitle: 'Register' }); 
});

userController.post('/register', async (req, res) => {
    const { email, password, rePassword } = req.body;
    
    try {
        const token = await userService.register({ email, password, rePassword });
        
        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        res.render('user/register', { error: err.message, email });
    }
});

userController.get('/login', (req, res) => {
    res.render('user/login', { pageTitle: 'Login' });
});

userController.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const token = await userService.login(email, password);

        res.cookie('auth', token);

        res.redirect('/');
    } catch (err) {
        res.render('user/login', { error: err.message, email });
    }
});

userController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');

    // TODO: Invalidate token
    
    res.redirect('/');
});

export default userController;