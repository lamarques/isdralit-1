/**
 * Created by marlon on 17/12/14.
 */
var mongoose = require('mongoose');
//mongoose.connect(process.env.MONGOLAB_URI);
mongoose.connect('mongodb://localhost/isdralit');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', function () {
    console.log('Conexão realizada com sucesso');
});

exports.saveOrUpdate = function (model, data, callback) {
    if (data._id) {
        model.findByIdAndUpdate(data._id, data, callback);
    } else {
        new model(data).save(callback);
    }
};

exports.remove = function (model, id, callback) {
    model.findByIdAndRemove(id, callback);
};

exports.findAll = function (value, query, fields, callback) {
    value.Model.find(query, fields).populate(value.Populate).sort(value.Sort).lean().exec(callback);
};

exports.saveAll = function (values, callback) {
    values.forEach(function (value) {
        value.save(callback);
    });
};

exports.removeAll = function (model, callback) {
    model.remove(callback);
};

exports.File = require('./file');
exports.Menu = require('./menu');
exports.Banner = require('./banner');
exports.Category = require('./category');
exports.Item = require('./item');
exports.Technical = require('./technical');
exports.Product = require('./product');
exports.Information = require('./information');
exports.Institution = require('./institution');

//if (process.env.NODE_ENV == 'development') {
//    var initialCharge = require('./initial-charge');
//    initialCharge.start();
//}