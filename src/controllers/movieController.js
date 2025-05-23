import express from 'express';

const movieController = express.Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', (req, res) => {
    const newMovie = req.body;

    // Save movie

    // Redirect to home page
});

export default movieController;