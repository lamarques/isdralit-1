/**
 * Created by marlon on 22/07/15.
 */
var mongoose = require('mongoose');

ObjectId = mongoose.Schema.Types.ObjectId;

Technical = mongoose.model('Technical', mongoose.Schema({
    titleHtml: String,
    detailHtml: String,
    item: {
        type: ObjectId,
        ref: 'Item'
    },
    order: Number
}));

exports.defaultValues = [
    new Technical({
        titleHtml: 'Título',
        detailHtml: 'Recomendação muito importante sobre a montagem do item.<br>Preste atenção nos mínimos detalhes...',
        order: 0
    }),
    new Technical({
        titleHtml: 'Título',
        detailHtml: 'Recomendação muito importante sobre a montagem do item.<br>Preste atenção nos mínimos detalhes...',
        order: 1
    }),
    new Technical({
        titleHtml: 'Título',
        detailHtml: 'Recomendação muito importante sobre a montagem do item.<br>Preste atenção nos mínimos detalhes...',
        order: 2
    }),
    new Technical({
        titleHtml: 'Título',
        detailHtml: 'Recomendação muito importante sobre a montagem do item.<br>Preste atenção nos mínimos detalhes...',
        order: 3
    })
];

exports.Model = Technical;
exports.Populate = 'item';
exports.Sort = 'order';