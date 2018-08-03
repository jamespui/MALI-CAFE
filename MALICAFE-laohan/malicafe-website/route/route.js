const express = require('express');
const app = new express.Router();

// Serve link example (http://localhost:3000/__)
app.get('/', function(req, res) {
    res.render('home', {title: 'Malicafe', message: 'Hello there!'});
});

app.get('/signup', function(req, res) {
    res.render('account/signup', {title: 'Welcome to start-node', message: 'Hello there!'});
});

app.get('/signupform', function(req, res) {
    res.render('account/signupform', {title: 'Welcome to start-node', message: 'Hello there!'});
});

app.get('/signin', function(req, res) {
    res.render('account/signin', {title: 'Welcome to start-node', message: 'Hello there!'});
});

app.get('/testing', function(req, res) {
    res.render('account/testing', {title: 'Welcome to start-node', message: 'Hello there!'});
});

module.exports = app;
