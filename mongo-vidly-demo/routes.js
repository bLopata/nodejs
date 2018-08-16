const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Genre = mongoose.model('Genre', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));

const genres = [{
        id: 1,
        name: 'Action'
    },
    {
        id: 2,
        name: 'Horror'
    },
    {
        id: 3,
        name: 'Romance'
    },
];

router.get('/', async (req, res) => {
    const genres = await Genre.find().sort(
        'name');
    res.send(genres);
});

router.post('/', async (req, res) => {
    const {
        error
    } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({
        name: req.body.name
    });
    genre = await genre.save();
    res.send(genre);
});

router.put('/:id', async (req, res) => {
    const {
        error
    } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const genre = await Genre.findbyIdAndUpdate(req.params.id, {
        name: req.body.name
    }, {
        new: True
    });

    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    genre.name = req.body.name;
    res.send(genre);
});

router.delete('/:id', async (req, res) => {
    const genre = await Genre.findbyIdAndUpdate(req.params.id);
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    res.send(genre);
});

router.get('/:id', async (req, res) => {
    const genre = await Genre.findbyId(req.params.id);
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    res.send(genre);
});

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}

module.exports = router;