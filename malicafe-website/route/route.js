const express = require('express');
const app = new express.Router();

// Serve link example (http://localhost:3000/__)
app.get('/', function(req, res) {
    res.render('home', {title: 'Malicafe', message: 'Hello there!'});
});

app.get('/register', function(req, res) {
    res.render('account/signup', {title: 'Register', message: 'Hello there!'});
});

app.get('/login', function(req, res) {
    res.render('account/signin', {title: 'Login', message: 'Hello there!'});
});

module.exports = app;
