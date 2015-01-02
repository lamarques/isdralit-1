/**
 * Created by marlon on 02/01/15.
 */
var mongoose = require('mongoose');

Product = mongoose.model('Product', mongoose.Schema({
    titleHtml: String,
    detailHtml: String,
    buttonImageUrl: String,
    imagesUrl: Array,
    url: String,
    order: Number
}));

exports.defaultValues = [
    new Product({
        titleHtml: 'Caixas<br>de água',
        detailHtml: '',
        buttonImageUrl: '/images/water-tanks.jpg',
        imagesUrl: [],
        url: '/',
        order: 0
    }),
    new Product({
        titleHtml: 'Acabamentos<br>em PVC',
        detailHtml: '',
        buttonImageUrl: '/images/pvc-finishing-work.jpg',
        imagesUrl: [],
        url: '/',
        order: 1
    }),
    new Product({
        titleHtml: 'Coberturas',
        detailHtml: '',
        buttonImageUrl: '/images/roof-tiles.jpg',
        imagesUrl: [],
        url: '/',
        order: 2
    }),
    new Product({
        titleHtml: 'Tubos<br>e conexões',
        detailHtml: '',
        buttonImageUrl: '/images/pipes-fittings.jpg',
        imagesUrl: [],
        url: '/',
        order: 3
    })
];

exports.Model = Product;