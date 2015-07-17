/* global exports, items */

/**
 * Created by marlon on 02/01/15.
 */
var mongoose = require('mongoose');

var Product = mongoose.model('Product', mongoose.Schema({
    key: String,
    titleHtml: String,
    imageUrl: String,
    order: Number,
    items: [{type: mongoose.Schema.ObjectId, ref: 'Item'}]

}));    
exports.defaultValues = [
    new Product({
        key: 'caixas-de-agua',
        titleHtml: 'Caixas<br>de água',
        imageUrl: '/images/water-tanks.jpg',
        order: 0,
        items:["55a93a922a1d6e65d2fd1830","55a93b75c0927c1ad3cd03c1"]
   }),
    new Product({
        key: 'acabamentos-em-pvc',
        titleHtml: 'Acabamentos<br>em PVC',
        imageUrl: '/images/pvc-finishing-work.jpg',
        order: 1
    }),
    new Product({
        key: 'coberturas',
        titleHtml: 'Coberturas',
        imageUrl: '/images/roof-tiles.jpg',
        order: 2
    }),
    new Product({
        key: 'tubos-e-conexoes',
        titleHtml: 'Tubos<br>e conexões',
        imageUrl: '/images/pipes-fittings.jpg',
        order: 3
    })
];

exports.Model = Product;