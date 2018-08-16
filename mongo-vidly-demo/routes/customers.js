const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {
    Customer,
    validate
} = require('../models/customer');


router.get('/', async (req, res) => {
    const genres = await Genre.find().sort(
        'name');
    res.send(genres);
});

router.post('/', async (req, res) => {
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    genre = await genre.save();
    res.send(genre);
});

router.put('/:id', async (req, res) => {
    const {
        error
    } = validate(req.body);
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

module.exports = router;