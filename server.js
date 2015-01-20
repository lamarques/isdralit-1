/**
 * Created by marlon on 16/12/14.
 */
var db = require('./js/db/database');
var express = require('express');
var sass = require('node-sass-middleware');
var browserify = require('browserify-middleware');
var utils = require('./js/common/utils');

var isDevelopment = process.env.NODE_ENV == 'development';

var app = express();

app.engine('html', require('ejs').renderFile);

app.use(sass({
    src: __dirname + '/styles/scss/entry-points',
    dest: __dirname + '/styles/css',
    outputStyle: 'compressed',
    prefix: '/styles/css',
    force: isDevelopment,
    debug: isDevelopment
}));

app.use('/images', express.static(__dirname + '/images'));

app.use('/styles/css/spinner.css', express.static(__dirname + '/libs/spinkit/css/spinners/9-cube-grid.css'));

app.use('/styles', express.static(__dirname + '/styles'));

app.use('/js', browserify(__dirname + '/js/entry-points'));

app.get('/', function (req, res) {
    res.redirect('/views/home');
});

app.get('/views/product/:className?/:productName?', function (req, res) {
    var className = req.params.className;
    var productName = req.params.productName;
    var name = (className && productName) ? 'product' : 'product-list';

    var query = {};
    if (className) {
        query['key'] = className;
    }
    if (productName) {
        query['items.key'] = productName;
    }

    res.render('pages/' + name + '.html', {
        name: name,
        query: query
    });
});

app.get('/views/:name', function (req, res) {
    var name = req.params.name;
    var query = req.query;
    res.render('pages/' + name + '.html', {
        name: name,
        query: query
    });
});

app.get('/:name/find', function (req, res) {
    var name = utils.capitalize(req.params.name);
    var query = req.query;

    var fields = query['fields'];
    delete query['fields'];

    db.findAll(db[name].Model, query, fields, res);
});

app.listen(process.env.PORT);