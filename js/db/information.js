/**
 * Created by marlon on 02/01/15.
 */
var mongoose = require('mongoose');

ObjectId = mongoose.Schema.Types.ObjectId;

Information = mongoose.model('Information', mongoose.Schema({
    titleHtml: String,
    detailHtml: String,
    image: {
        type: ObjectId,
        ref: 'File'
    },
    url: String,
    order: Number
}));

exports.defaultValues = [
    new Information({
        titleHtml: 'Fale Conosco',
        detailHtml: 'Para saber onde encontrar os produtos Isdralit e outras informações, fale com a nossa equipe.',
        url: '/',
        order: 0
    }),
    new Information({
        titleHtml: 'Conheça a Isdralit',
        detailHtml: 'Com mais de 60 anos no mercado...',
        url: '/',
        order: 1
    })
];

exports.Model = Information;
exports.Populate = 'image';
exports.Sort = 'order';