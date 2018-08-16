# nodejs
This is my repository for source code and learning materials for the node.js technology completed alongside the codewithmosh node.js tutorial.



# [npm](https://nodejs.org)
Node package manager, or npm, is the package manager for javascript/node. Coming from python, npm is the equivalent of pip. npm provides the ability to update, roll back, and install/uninstall javascript packages for use in node application development.

 ## __commands__

 `npm view <package-name>`

    Shows the package.json file for the given package.

`npm list`

    Shows the package dependancies in the current project.

`npm list --depth=0`

    Shows only the direct pacakge dependancies of the current project.

`npm outdated`

    Shows the outdated packages in the current project.

`npm update`

    Used to install new versions of outdated packages in the current project.


`npm npm-check-updates`

**OR**

 `ncu -u`

    Used to upgrade packages.

`npm i <package-name> --save-dev`

    Installs a package which is marked in package.json as a development package, not to be included in deployment.

`npm init --yes`

Creates package.json file for a custom package or a project. The `--yes` flag auto-completes creation with default values.

`npm publish`

Publishes a user-created node package on npm.


`npm i -S`

Populated package.json with package info.




























































# Packages

## [RESTful API](https://restfulapi.net/)

**RE**presentational **S**tate **T**ransfer: a convention for building client/server HTTP CRUD (**C**reate, **R**ead, **U**pdate, and **D**elete) services.

HTTP requests: To manipulate data contained on a server, an application sends a GET *(read)*, POST *(create)*, PUT *(update)*, or DELETE request using HTTP protocol.

## [Express](https://www.npmjs.com/package/joi)

A node package for minimalistic web server framework. Instantiated with:
```javascript
const express = require('express');
const app = express();
```

`app.post('/api/courses', (req, res) => {
    res.send(course);
});`

## [Nodemon](https://www.npmjs.com/package/nodemon)

Nodemon is a node package which watches for changes in files and automatically restarts the node application when the file is updated.

`nodemon <script.js>`

nodemon wraps your application. Replace 'node' with 'nodemon' to run an application from the CLI. If no script name is given, nodemon will test for a `package.json` file and run the file associated with the *main* property, if found.


## [Joi](https://www.npmjs.com/package/joi)

Joi is a node package which allows users to define *blueprint* or *schema* descriptions to validate JavaScript objects.

`const Joi = require('joi');`

To instantiate the class Joi for the joi package.

```javascript
// Define schema.
const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3, 30}$/),
}).with('username').without('password');

// Validate and return result.
const result = Joi.validate({username: 'abc', password: 'password123'}, schema);
```

Possible example attritbutes of a schema using regex and other properties, and validation of schema using `Joi.validate()`.

## [Morgan](https://www.npmjs.com/package/morgan)

Morgan is an HTTP request logger middleware for Express framework.

Instantiated by:

`const morgan = require('morgan');`

And added to Express framework by:

`app.use(morgan(<option>))`

Where `<option>` can be: 'immediate', 'skip', 'stream', 'combined', 'short', 'dev'.

## [Config](https://www.npmjs.com/package/config)

Node-config provides organization for heirarchical configurations for node applications across multiple environments. By default, the ./config directory will be used by config to specify the different settings to be used in each environment - development, production, qa, etc. The user sets the specific environment variable (see below: Tips - Environment Variables), then config properties can be accessed from `./config/<environment>.json` with

```javascript
const config = require('config');
config.get(<property_name>);
```
A `custom-environment-variables.json` file can also be created to securely store __mapping__ between an application config setting and local environment variable to keep sensitive information off of the web server.

## [Debug](https://www.npmjs.com/package/debug)

Debug is a JavaScript debugging utility

[ ] Finish module description.

[ ] Add code examples.

[ ] Add feature descriptions.

Namespace debugging.


## [Pug](https://www.npmjs.com/package/pug)
[ ] Finish module description
[ ] add code examples
[ ] add file references.

## [Mongoose & MongoDB](https://www.npmjs.com/package/mongodb)
MongoDB is a scalable document, or noSQL, database. Mongoose is a abstraction over MongoDB driver.

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dbname');

async function updateCourse(id) {
    const course = await Course.update({ _id: id }, {
        $set: {
            isPublished = true,
            author = 'Another Author'
        }
    });

    console.log('Before exit.')
    if (!course) return;
    console.log('Maybe no exit?');

    const result = await course.save();
    console.log(result);
}
```
Validation
So, in this section, you learned that:
- When defining a schema, you can set the type of aproperty to a SchemaType object. You use this object to define the validation requirements for the given property.
```javascript
// Adding validation
new mongoose.Schema({
        name: {
            type: String,
            required: true
        }
    })
```

Validation logic is executed by Mongoose priortosaving a document to thedatabase.You can also trigger it manually by calling the validate() method.

```javascript
// Custom validation
tags: [
        type: Array,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: ‘A course should have at least 1 tag.’
        }
    ]
```
If you need to talk to a database or a remote service to perform the validation, you need to create an async validator:
```javascript
validate: {
    isAsync: true
    validator: function (v,
        callback
    ) {
// Do the validation, when the result is readycall the callback.
    callback(isValid);
    }
}

```
[ ] Add info on Mongoose/MongoDB
[ ] Add info on schemas and models
[ ] Class versus object
[ ] Benefits of MongoDB over SQL/relational database





































































# Definitions
 ### Process variable

Using `process.env.<varname>` we can read an environment variable set in the CLI by `set <varname> = <value>`

### [Query string parameter](https://en.wikipedia.org/wiki/Query_string)

Way to add unique HTTP request routing for a specific query string denoted by adding `?sortBy=<type>` to the end of a URL.

### [Object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)

Instead of saving the result of a function into a constant called `result`, and accessing `result.error` we can simply define error as a property.
so,

 ```javascript
  const result = validateCourse(req.body);
  result.error = valdiateCourse(req.body)
  ```

becomes
 ```javascript
const { error } = validateCourse(req.body)
```

### [Middleware & routing HTTP requests with Express](https://expressjs.com/en/guide/using-middleware.html)

Express is a minimal web framework which routes HTTP requests by use of middleware functions. Middleware functions require the request, response,and next objects which sequentially route requests to the next middleware function in the request pipeline. These middleware functions can be created by the user or built-in to the express module.

### [Callbacks](https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm)

A callback is the asynchronous, or non-blocking, equivalent of a function for completing operations. A callback function is called at the completion of a given task.

For example, a function may start to read a file, pass control back to the execution environment, and begin to process the next function until the first function has completed. It will then call the 'call back' function of the first operation to complete the task.

Also see [callback hell](https://stackoverflow.com/questions/4234619/how-to-avoid-long-nesting-of-asynchronous-functions-in-node-js), or how to avoid nesting asynchronous functions.

### [Promises](https://www.promisejs.org/)

In asynchronous a __promise__ is an object which exists in one of three states: pending, fulfilled, rejected. Pending is the initial state of a promise, fulfilled is the state of a promise having successfully completed an operation, and rejected is the state of a promise having failed to complete an operation.

Promises allow for cleaner code when using callback functions with asynch operations.

```javascript
const p = new Promise((resolve, reject) => {
    // Kick off an asynch job.
})
```
This is the constructor for a promise, where resolve will be contain the result of the promise in lieu of a callback function. By outputting the result of functions to promises, it is possible to chain several operations together by using `p.then()` method on the output of the function. Promises also allow for easy error handling with the `p.catch()` method, which will handle an error at any point in the request handling chain.

### [Async and await](https://javascript.info/async-await)

If a function is decorated with async, i.e.

```javascript
async function f() {

};
```

then that function returns a promise.

The `await` keyword, only permitted within an `async` decorated function, tells the JavaScript engine to wait for the promise to resolve before resolving.

```javascript
async function f() {
    const result = await g();
};
```

Async and await allows the user to write asyncronous code which looks like synchronous code. At runtime, the code is compiled to be more similiar to a promise-based approach with the benefit of the code being easier to understand.

When using async and await, a `try{} catch{}` block is used for error handling, since the promise objects are not accessible.


### Normalization & Denormalization

Normalized
```javascript
let author = {
    name: 'Mosh'
}

let course = {
    author: 'id'
}
```
Denormalized (using embedded documents)
```javascript
let course = {
    author: {
        name: 'Mosh Hamedani'
    }
}
```
Hybrid
```javascript
let author = {
    name: 'Mosh',
    ...
}


let course = {
    author: {
        id: 'ref,
        name: 'Mosh'
    }
}

```
















































# Tips

### [Object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)

Instead of saving the result of a function into a constant called `result`, and accessing `result.error` we can simply define error as a property.
so,

 ```javascript
  const result = validateCourse(req.body);
  result.error = valdiateCourse(req.body)
  ```

becomes
 ```javascript
const { error } = validateCourse(req.body)
```
### [Environment variables](https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html)

For more discrete control over various aspects of your node.js application, environment variables allow the user to set `process.env.<variable_name>` for any number of purposes.

In this example, the node environment variable can be set by the user, and logic can be implemented to control behavior of the application in different environments.

To set the the node environment variable `process.env.NODE_ENV`, use:
```bat
set NODE_ENV = production
```

in the command prompt. And, to display the value in javascript:

```javascript
console.log(`The value of ENV is: , ${process.env.NODE_ENV}`);
```


And finally, implementation and usage with Express:

```javascript
if (app.get('env') === 'development'){
    // Enable testing modules or specific logic.
};
```






































































# Snippets

An express put method call with error handling. Uses the body of the request to populate the course information.

```javascript app.put('/api/courses/:id', (req, res) => {
    // Look up the course.
    const course = courses.find(c => c.id === parseInt(req.params.id));

    // If not exiting, return 404.
    if (!course) return res.status(404).send('The course with the given ID was not found.')

    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Update course
    course.name = req.body.name;

    // Return updated course to the client.
    res.send(course);
});
```
An express delete method.

```javascript

app.delete('/api/courses/:id', (req, res) => {
    // Look up the course.
    const course = courses.find(c => c.id === parseInt(req.params.id));

    // If not exiting, return 404.
    if (!course) return res.status(404).send('The course with the given ID was not found.')

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);



});
```
A simple to validate requests to the server using Joi.

```javascript
function validateCourse(course){

    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);

};

```

































































## Quickref.js

```javascript
    // Comparison operators:
    // eq (equal)
    // ne (not equal)

    // gt (greater than)
    // gte (greater than or equal to)
    // lt (less than)
    // lte (less than or equal to)

    async function getCourses() {

        const courses = await Course
    .find({ price: { $gte: 10, $lte: 20 } })
    in
    nin (not in)

    Logical operators:
    or
    and

CRUD Operations
// Saving a document
let course = new Course({ name: ‘...’ });
course = await course.
save
();
// Querying documents
const courses = await Course
   .find({ author: ‘Mosh’, isPublished: true })
   .skip(10)
   .limit(10)
   .sort({ name: 1, price: -1 })
   .select({ name: 1, price: 1 });
// Updating a document (query first)
const course = await Course.
findById
(id);
if (!course) return;
course.
set
({ name: ‘...’ });
course.
save
();
// Updating a document (update first)
const result = await Course.
update
({ _id: id }, {
    $set: { name: ‘...’ }
});
// Updating a document (update first) and return it
const result = await Course.
findByIdAndUpdate
({ _id: id }, {
    $set: { name: ‘...’ }
}, { new: true });
// Removing a document
const result = await Course.
deleteOne
({ _id: id });
const result = await Course.
deleteMany
({ _id: id });
const course = await Course.
findByIdAndRemove
(id);


validator:
    validate: {
        isAsync: true
        validator: function (v,
            callback
        ) {
            // Do the validation, when the result is ready, call the callback
            callback(isValid);
        }
    } -
Other useful SchemaType properties:
    -
    Strings:
    lowercase, uppercase, trim -
    All types:
    get, set(to define a custom getter / setter)
price: {
    type: Number,
    get: v => Math.round(v),
    set: v => Math.round(v)
}

// Response codes
// 400 error
// 401 Unauthorized
// 403 Forbidden
// 404 Page not found


```