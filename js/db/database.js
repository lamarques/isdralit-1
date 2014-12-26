/**
 * Created by marlon on 17/12/14.
 */
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/isdralit');
mongoose.connect('mongodb://heroku_app32850838:20492jnu2i4mdb88bk8qhum11r@ds043220.mongolab.com:43220/heroku_app32850838');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', function callback() {
    console.log('Conexão realizada com sucesso');
});

exports.Menu = require('./menu');