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

app.get('/views/*', function (req, res) {
    var paths = req.params[0].split('/');
    var name = paths[0];
    res.render('pages/' + name + '.html', { name: name });
});

app.get('/*/find', function (req, res) {
    var name = utils.capitalize(req.params[0]);
    db.findAll(db[name].Model, res);
});

app.listen(process.env.PORT || 8000);