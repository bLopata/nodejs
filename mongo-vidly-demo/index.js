const Joi = require('joi');
const express = require('express');
const app = express();
const customers = require('./routes/customers');

app.use(express.json());

app.use('/api/genres', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));