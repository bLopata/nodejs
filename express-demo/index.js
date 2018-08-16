
const config = require('config');
const Joi = require('joi');
const express = require('express');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const debug = require('debug')('app:startup');
const courses = require('./routes/courses');
const home = require('./routes/home')

app.set('view engine', 'pug');
app.set('views', './views');

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);

// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

if (app.get('env') === 'development'){
    app.use(morgan('tiny'));
    debug('Morgan enabled...');
};

// Dynamically sets the port to listen to HTTP requests by using the environment variable (if applicable) or port 3000 by default.
const port = process.env.PORT || 3000;

// Listens to port as defined above.
app.listen(port, () => console.log(`Listening on port ${port}...`));