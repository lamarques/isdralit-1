/**
 * Created by marlon on 16/12/14.
 */
var db = require('./db/database');
var express = require('express');

var app = express();
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    res.render('home.html');
});

app.get('/menu/find', function (req, res) {
    db.Menu.findAll(res);
});

app.listen(8000);