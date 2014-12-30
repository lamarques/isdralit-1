/**
 * Created by marlon on 17/12/14.
 */
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/isdralit');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', function callback() {
    console.log('Conexão realizada com sucesso');
});

exports.Menu = require('./menu');
exports.Banner = require('./banner');