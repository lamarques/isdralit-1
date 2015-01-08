/**
 * Created by marlon on 16/12/14.
 */
var db = require('./js/db/database');
var express = require('express');
var minify = require('express-minify');
var compileSass = require('express-compile-sass');
var browserify = require('browserify-middleware');
var utils = require('./js/common/utils');

var app = express();

app.engine('html', require('ejs').renderFile);

app.use(minify({
    cache: false
}));

app.use(compileSass({
    root: __dirname,
    watchFiles: true
}));

app.use('/images', express.static(__dirname + '/images'));

app.use('/styles', express.static(__dirname + '/styles'));

app.use('/js/entry-points', browserify(__dirname + '/js/entry-points', {
    minify: false,
    cache: false
}));

app.get('/', function (req, res) {
    res.redirect('/views/home');
});

app.get('/views/:name', function (req, res) {
    var name = req.params.name;
    var query = req.query;
    res.render('pages/' + name + '.html', { name: name, query: query });
});

app.get('/:name/find', function (req, res) {
    var name = utils.capitalize(req.params.name);
    var query = req.query;
    db.findAll(db[name].Model, query, res);
});

app.listen(process.env.PORT || 8000);