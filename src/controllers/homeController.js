import express from 'express';
import movieService from '../services/movieService.js';

const homeController = express.Router();

homeController.get('/', async (req, res) => {
    const movies = await movieService.getAll();
        
    res.render('home', { movies, pageTitle: 'Home' });
});

homeController.get('/about', (req, res) => {
    res.render('about', { pageTitle: 'About' });
});

export default homeController;