/**
 * Created by marlon on 02/01/15.
 */
var mongoose = require('mongoose');

ItemSchema = mongoose.Schema({
    titleHtml: String,
    detailHtml: String,
    imageUrl: String,
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
                imageUrl: '/images/tile.jpg',
                imagesUrl: ['/images/tile-1.jpg', '/images/tile-2.jpg', '/images/tile-3.jpg', '/images/tile-4.jpg'],
                order: 0
            },
            {
                titleHtml: 'Item 2',
                detailHtml: 'Detalhes do produto 2',
                imageUrl: '/images/tile.jpg',
                imagesUrl: ['/images/tile-1.jpg', '/images/tile-2.jpg', '/images/tile-3.jpg', '/images/tile-4.jpg'],
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
                imageUrl: '/images/tile.jpg',
                imagesUrl: ['/images/tile-1.jpg', '/images/tile-2.jpg', '/images/tile-3.jpg', '/images/tile-4.jpg'],
                order: 0
            },
            {
                titleHtml: 'Item 4',
                detailHtml: 'Detalhes do produto 4',
                imageUrl: '/images/tile.jpg',
                imagesUrl: ['/images/tile-1.jpg', '/images/tile-2.jpg', '/images/tile-3.jpg', '/images/tile-4.jpg'],
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
                imageUrl: '/images/tile.jpg',
                imagesUrl: ['/images/tile-1.jpg', '/images/tile-2.jpg', '/images/tile-3.jpg', '/images/tile-4.jpg'],
                order: 0
            },
            {
                titleHtml: 'Item 6',
                detailHtml: 'Detalhes do produto 6',
                imageUrl: '/images/tile.jpg',
                imagesUrl: ['/images/tile-1.jpg', '/images/tile-2.jpg', '/images/tile-3.jpg', '/images/tile-4.jpg'],
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
                imageUrl: '/images/tile.jpg',
                imagesUrl: ['/images/tile-1.jpg', '/images/tile-2.jpg', '/images/tile-3.jpg', '/images/tile-4.jpg'],
                order: 0
            },
            {
                titleHtml: 'Item 8',
                detailHtml: 'Detalhes do produto 8',
                imageUrl: '/images/tile.jpg',
                imagesUrl: ['/images/tile-1.jpg', '/images/tile-2.jpg', '/images/tile-3.jpg', '/images/tile-4.jpg'],
                order: 1
            }
        ]
    })
];

exports.Model = Product;