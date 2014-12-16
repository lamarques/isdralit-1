/**
 * Created by marlon on 16/12/14.
 */
var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    res.render('home.html');
});

app.get('/menu/find', function (req, res) {
    res.send([{
        name: 'Home',
        url: '/'
    }, {
        name: 'Produtos',
        url: '/'
    }, {
        name: 'Institucional',
        url: '/'
    }, {
        name: 'Contato',
        url: '/'
    }]);
});

var server = app.listen(8000, function () {
    var address = server.address();
    var host = address.address;
    var port = address.port;

    console.log('Servidor Iniciado:\nhttp://%s:%s', host, port);
});