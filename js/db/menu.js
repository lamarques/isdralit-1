/**
 * Created by marlon on 17/12/14.
 */
var mongoose = require('mongoose');

Menu = mongoose.model('Menu', mongoose.Schema({
    name: String,
    url: String,
    order: Number
}));

exports.defaultValues = [
    new Menu({
        name: 'Home',
        url: '/views/home',
        order: 0
    }),
    new Menu({
        name: 'Produtos',
        url: '/views/product',
        order: 1
    }),
    new Menu({
        name: 'Institucional',
        url: '/',
        order: 2
    }),
    new Menu({
        name: 'Contato',
        url: '/',
        order: 3
    })
];

exports.Model = Menu;
exports.Populate = '';
exports.Sort = 'order';