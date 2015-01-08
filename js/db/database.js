/**
 * Created by marlon on 17/12/14.
 */
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/isdralit');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', function callback() {
    console.log('Conexão realizada com sucesso');
    console.log(process.env.NODE_ENV || 'development');
});

exports.saveAll = function (values) {
    values.forEach(function (value) {
        value.save(function (err, value) {
            if (err) {
                return console.error(err);
            }
        });
    });
};

exports.findAll = function (model, query, res) {
    model.find(query).sort('order').lean().exec(function (err, values) {
        if (err) {
            res.status(404).send(err);
        } else {
            res.send(values);
        }
    });
};

exports.removeAll = function (model, afterAction) {
    model.remove(function (err) {
        if (err) {
            return console.error(err);
        } else if (afterAction) {
            afterAction();
        }
    });
};

exports.Menu = require('./menu');
exports.Banner = require('./banner');
exports.Product = require('./product');
exports.Information = require('./information');

var initialCharge = require('./initial-charge');
initialCharge.start();