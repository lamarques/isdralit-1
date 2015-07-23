/**
 * Created by marlon on 02/01/15.
 */
var mongoose = require('mongoose'),
     ObjectId = mongoose.Schema.ObjectId;

var ItemSchema = require('./ItemSchema.js');


Product = mongoose.model('Product', mongoose.Schema({
    key: String,
    titleHtml: String,
    imageUrl: String,
    order: Number,
    items: [{type: ObjectId, ref:'ItemSchema'}]
}));

exports.defaultValues = [

    new Product({
        key: 'caixas-de-agua',
        titleHtml: 'Caixas<br>de água',
        imageUrl: '/images/water-tanks.jpg',
        order: 0
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