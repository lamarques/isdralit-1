/**
 * Created by marlon on 02/01/15.
 */
var mongoose = require('mongoose');

ItemSchema = mongoose.Schema({
    titleHtml: String,
    detailHtml: String,
    imagesUrl: Array,
    order: Number
});

Product = mongoose.model('Product', mongoose.Schema({
    titleHtml: String,
    imageUrl: String,
    order: Number,
    items: [ItemSchema]
}));

exports.defaultValues = [
    new Product({
        titleHtml: 'Caixas<br>de água',
        imageUrl: '/images/water-tanks.jpg',
        order: 0,
        items: [
            {
                titleHtml: 'Item 1',
                detailHtml: 'Detalhes do produto 1',
                imagesUrl: ['/images/tile.jpg'],
                order: 0
            },
            {
                titleHtml: 'Item 2',
                detailHtml: 'Detalhes do produto 2',
                imagesUrl: ['/images/tile.jpg'],
                order: 1
            }
        ]
    }),
    new Product({
        titleHtml: 'Acabamentos<br>em PVC',
        imageUrl: '/images/pvc-finishing-work.jpg',
        order: 1,
        items: [
            {
                titleHtml: 'Item 3',
                detailHtml: 'Detalhes do produto 3',
                imagesUrl: ['/images/tile.jpg'],
                order: 0
            },
            {
                titleHtml: 'Item 4',
                detailHtml: 'Detalhes do produto 4',
                imagesUrl: ['/images/tile.jpg'],
                order: 1
            }
        ]
    }),
    new Product({
        titleHtml: 'Coberturas',
        imageUrl: '/images/roof-tiles.jpg',
        order: 2,
        items: [
            {
                titleHtml: 'Item 5',
                detailHtml: 'Detalhes do produto 5',
                imagesUrl: ['/images/tile.jpg'],
                order: 0
            },
            {
                titleHtml: 'Item 6',
                detailHtml: 'Detalhes do produto 6',
                imagesUrl: ['/images/tile.jpg'],
                order: 1
            }
        ]
    }),
    new Product({
        titleHtml: 'Tubos<br>e conexões',
        imageUrl: '/images/pipes-fittings.jpg',
        order: 3,
        items: [
            {
                titleHtml: 'Item 7',
                detailHtml: 'Detalhes do produto 7',
                imagesUrl: ['/images/tile.jpg'],
                order: 0
            },
            {
                titleHtml: 'Item 8',
                detailHtml: 'Detalhes do produto 8',
                imagesUrl: ['/images/tile.jpg'],
                order: 1
            }
        ]
    })
];

exports.Model = Product;