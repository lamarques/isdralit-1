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
        url: '/',
        order: 0
    }),
    new Menu({
        name: 'Produtos',
        url: '/',
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