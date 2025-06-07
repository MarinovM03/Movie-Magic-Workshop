import { Router } from 'express';
import castService from '../services/castService.js';
import { isAuth } from '../middlewares/authMiddleware.js';

const castController = Router();

castController.get('/create', isAuth, (req, res) => {
    res.render('cast/create', { pageTitle: 'Create Cast' });
});

castController.post('/create', isAuth, async (req, res) => {
    const castData = req.body;

    await castService.create(castData);

    res.redirect('/');
});

export default castController;