/**
 * Created by marlon on 02/01/15.
 */
var mongoose = require('mongoose');

MeasureSchema = mongoose.Schema({
    extension: Number,
    weight: Number,
    width: Number,
    thickness: Number,
    order: Number
});

InformationSchema = mongoose.Schema({
    titleHtml: String,
    detailHtml: String,
    order: Number
});

ItemSchema = mongoose.Schema({
    titleHtml: String,
    detailHtml: String,
    imageUrl: String,
    imagesUrl: Array,
    order: Number,
    informations: [InformationSchema],
    measures: [MeasureSchema]
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
                order: 0,
                informations: [
                    {
                        titleHtml: 'Título 1',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 1.<br>Preste atenção nos mínimos detalhes...',
                        order: 0
                    },
                    {
                        titleHtml: 'Título 2',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 2.<br>Preste atenção nos mínimos detalhes...',
                        order: 1
                    },
                    {
                        titleHtml: 'Título 3',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 3.<br>Preste atenção nos mínimos detalhes...',
                        order: 2
                    },
                    {
                        titleHtml: 'Título 4',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 4.<br>Preste atenção nos mínimos detalhes...',
                        order: 3
                    }
                ],
                measures: [
                    {
                        extension: 1,
                        weight: 2.25,
                        width: 3.5,
                        thickness: 4.75,
                        order: 0
                    },
                    {
                        extension: 1.5,
                        weight: 3.25,
                        width: 4,
                        thickness: 5.25,
                        order: 1
                    },
                    {
                        extension: 2,
                        weight: 4.25,
                        width: 4.5,
                        thickness: 5.75,
                        order: 2
                    },
                    {
                        extension: 2.5,
                        weight: 5.25,
                        width: 5,
                        thickness: 6.25,
                        order: 3
                    }
                ]
            },
            {
                titleHtml: 'Item 2',
                detailHtml: 'Detalhes do produto 2',
                imageUrl: '/images/tile.jpg',
                imagesUrl: ['/images/tile-1.jpg', '/images/tile-2.jpg', '/images/tile-3.jpg', '/images/tile-4.jpg'],
                order: 1,
                informations: [
                    {
                        titleHtml: 'Título 1',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 1.<br>Preste atenção nos mínimos detalhes...',
                        order: 0
                    },
                    {
                        titleHtml: 'Título 2',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 2.<br>Preste atenção nos mínimos detalhes...',
                        order: 1
                    },
                    {
                        titleHtml: 'Título 3',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 3.<br>Preste atenção nos mínimos detalhes...',
                        order: 2
                    },
                    {
                        titleHtml: 'Título 4',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 4.<br>Preste atenção nos mínimos detalhes...',
                        order: 3
                    }
                ],
                measures: [
                    {
                        extension: 1,
                        weight: 2.25,
                        width: 3.5,
                        thickness: 4.75,
                        order: 0
                    },
                    {
                        extension: 1.5,
                        weight: 3.25,
                        width: 4,
                        thickness: 5.25,
                        order: 1
                    },
                    {
                        extension: 2,
                        weight: 4.25,
                        width: 4.5,
                        thickness: 5.75,
                        order: 2
                    },
                    {
                        extension: 2.5,
                        weight: 5.25,
                        width: 5,
                        thickness: 6.25,
                        order: 3
                    }
                ]
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
                order: 0,
                informations: [
                    {
                        titleHtml: 'Título 1',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 1.<br>Preste atenção nos mínimos detalhes...',
                        order: 0
                    },
                    {
                        titleHtml: 'Título 2',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 2.<br>Preste atenção nos mínimos detalhes...',
                        order: 1
                    },
                    {
                        titleHtml: 'Título 3',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 3.<br>Preste atenção nos mínimos detalhes...',
                        order: 2
                    },
                    {
                        titleHtml: 'Título 4',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 4.<br>Preste atenção nos mínimos detalhes...',
                        order: 3
                    }
                ],
                measures: [
                    {
                        extension: 1,
                        weight: 2.25,
                        width: 3.5,
                        thickness: 4.75,
                        order: 0
                    },
                    {
                        extension: 1.5,
                        weight: 3.25,
                        width: 4,
                        thickness: 5.25,
                        order: 1
                    },
                    {
                        extension: 2,
                        weight: 4.25,
                        width: 4.5,
                        thickness: 5.75,
                        order: 2
                    },
                    {
                        extension: 2.5,
                        weight: 5.25,
                        width: 5,
                        thickness: 6.25,
                        order: 3
                    }
                ]
            },
            {
                titleHtml: 'Item 4',
                detailHtml: 'Detalhes do produto 4',
                imageUrl: '/images/tile.jpg',
                imagesUrl: ['/images/tile-1.jpg', '/images/tile-2.jpg', '/images/tile-3.jpg', '/images/tile-4.jpg'],
                order: 1,
                informations: [
                    {
                        titleHtml: 'Título 1',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 1.<br>Preste atenção nos mínimos detalhes...',
                        order: 0
                    },
                    {
                        titleHtml: 'Título 2',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 2.<br>Preste atenção nos mínimos detalhes...',
                        order: 1
                    },
                    {
                        titleHtml: 'Título 3',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 3.<br>Preste atenção nos mínimos detalhes...',
                        order: 2
                    },
                    {
                        titleHtml: 'Título 4',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 4.<br>Preste atenção nos mínimos detalhes...',
                        order: 3
                    }
                ],
                measures: [
                    {
                        extension: 1,
                        weight: 2.25,
                        width: 3.5,
                        thickness: 4.75,
                        order: 0
                    },
                    {
                        extension: 1.5,
                        weight: 3.25,
                        width: 4,
                        thickness: 5.25,
                        order: 1
                    },
                    {
                        extension: 2,
                        weight: 4.25,
                        width: 4.5,
                        thickness: 5.75,
                        order: 2
                    },
                    {
                        extension: 2.5,
                        weight: 5.25,
                        width: 5,
                        thickness: 6.25,
                        order: 3
                    }
                ]
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
                order: 0,
                informations: [
                    {
                        titleHtml: 'Título 1',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 1.<br>Preste atenção nos mínimos detalhes...',
                        order: 0
                    },
                    {
                        titleHtml: 'Título 2',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 2.<br>Preste atenção nos mínimos detalhes...',
                        order: 1
                    },
                    {
                        titleHtml: 'Título 3',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 3.<br>Preste atenção nos mínimos detalhes...',
                        order: 2
                    },
                    {
                        titleHtml: 'Título 4',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 4.<br>Preste atenção nos mínimos detalhes...',
                        order: 3
                    }
                ],
                measures: [
                    {
                        extension: 1,
                        weight: 2.25,
                        width: 3.5,
                        thickness: 4.75,
                        order: 0
                    },
                    {
                        extension: 1.5,
                        weight: 3.25,
                        width: 4,
                        thickness: 5.25,
                        order: 1
                    },
                    {
                        extension: 2,
                        weight: 4.25,
                        width: 4.5,
                        thickness: 5.75,
                        order: 2
                    },
                    {
                        extension: 2.5,
                        weight: 5.25,
                        width: 5,
                        thickness: 6.25,
                        order: 3
                    }
                ]
            },
            {
                titleHtml: 'Item 6',
                detailHtml: 'Detalhes do produto 6',
                imageUrl: '/images/tile.jpg',
                imagesUrl: ['/images/tile-1.jpg', '/images/tile-2.jpg', '/images/tile-3.jpg', '/images/tile-4.jpg'],
                order: 1,
                informations: [
                    {
                        titleHtml: 'Título 1',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 1.<br>Preste atenção nos mínimos detalhes...',
                        order: 0
                    },
                    {
                        titleHtml: 'Título 2',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 2.<br>Preste atenção nos mínimos detalhes...',
                        order: 1
                    },
                    {
                        titleHtml: 'Título 3',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 3.<br>Preste atenção nos mínimos detalhes...',
                        order: 2
                    },
                    {
                        titleHtml: 'Título 4',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 4.<br>Preste atenção nos mínimos detalhes...',
                        order: 3
                    }
                ],
                measures: [
                    {
                        extension: 1,
                        weight: 2.25,
                        width: 3.5,
                        thickness: 4.75,
                        order: 0
                    },
                    {
                        extension: 1.5,
                        weight: 3.25,
                        width: 4,
                        thickness: 5.25,
                        order: 1
                    },
                    {
                        extension: 2,
                        weight: 4.25,
                        width: 4.5,
                        thickness: 5.75,
                        order: 2
                    },
                    {
                        extension: 2.5,
                        weight: 5.25,
                        width: 5,
                        thickness: 6.25,
                        order: 3
                    }
                ]
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
                order: 0,
                informations: [
                    {
                        titleHtml: 'Título 1',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 1.<br>Preste atenção nos mínimos detalhes...',
                        order: 0
                    },
                    {
                        titleHtml: 'Título 2',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 2.<br>Preste atenção nos mínimos detalhes...',
                        order: 1
                    },
                    {
                        titleHtml: 'Título 3',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 3.<br>Preste atenção nos mínimos detalhes...',
                        order: 2
                    },
                    {
                        titleHtml: 'Título 4',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 4.<br>Preste atenção nos mínimos detalhes...',
                        order: 3
                    }
                ],
                measures: [
                    {
                        extension: 1,
                        weight: 2.25,
                        width: 3.5,
                        thickness: 4.75,
                        order: 0
                    },
                    {
                        extension: 1.5,
                        weight: 3.25,
                        width: 4,
                        thickness: 5.25,
                        order: 1
                    },
                    {
                        extension: 2,
                        weight: 4.25,
                        width: 4.5,
                        thickness: 5.75,
                        order: 2
                    },
                    {
                        extension: 2.5,
                        weight: 5.25,
                        width: 5,
                        thickness: 6.25,
                        order: 3
                    }
                ]
            },
            {
                titleHtml: 'Item 8',
                detailHtml: 'Detalhes do produto 8',
                imageUrl: '/images/tile.jpg',
                imagesUrl: ['/images/tile-1.jpg', '/images/tile-2.jpg', '/images/tile-3.jpg', '/images/tile-4.jpg'],
                order: 1,
                informations: [
                    {
                        titleHtml: 'Título 1',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 1.<br>Preste atenção nos mínimos detalhes...',
                        order: 0
                    },
                    {
                        titleHtml: 'Título 2',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 2.<br>Preste atenção nos mínimos detalhes...',
                        order: 1
                    },
                    {
                        titleHtml: 'Título 3',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 3.<br>Preste atenção nos mínimos detalhes...',
                        order: 2
                    },
                    {
                        titleHtml: 'Título 4',
                        detailHtml: 'Recomendação muito importante sobre a montagem do item 4.<br>Preste atenção nos mínimos detalhes...',
                        order: 3
                    }
                ],
                measures: [
                    {
                        extension: 1,
                        weight: 2.25,
                        width: 3.5,
                        thickness: 4.75,
                        order: 0
                    },
                    {
                        extension: 1.5,
                        weight: 3.25,
                        width: 4,
                        thickness: 5.25,
                        order: 1
                    },
                    {
                        extension: 2,
                        weight: 4.25,
                        width: 4.5,
                        thickness: 5.75,
                        order: 2
                    },
                    {
                        extension: 2.5,
                        weight: 5.25,
                        width: 5,
                        thickness: 6.25,
                        order: 3
                    }
                ]
            }
        ]
    })
];

exports.Model = Product;