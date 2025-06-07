import { Router } from 'express';

const userController = Router();

//TODO: Add actions
userController.get('/register', (req, res) => {
    res.render('register'); 
});

export default userController;