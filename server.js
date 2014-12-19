/**
 * Created by marlon on 16/12/14.
 */
var db = require('./js/db/database');
var express = require('express');
var minify = require('express-minify');
var compileSass = require('express-compile-sass');
var browserify = require('browserify-middleware');

var app = express();

app.use(minify({
    cache: false
}));

app.use(compileSass({
    root: __dirname + '/styles',
    watchFiles: true
}));

app.use('/fonts', express.static(__dirname + '/styles/fonts'));

app.use('/js/entry-points', browserify(__dirname + '/js/entry-points', {
    minify: false,
    cache: false
}));

app.get('/', function (req, res) {
    res.redirect('/views/home');
});

app.get('/views/*', function (req, res) {
    res.sendFile(__dirname + '/views/' + req.params[0] + '.html');
});

app.get('/menu/find', function (req, res) {
    db.Menu.findAll(res);
});

app.listen(8000);