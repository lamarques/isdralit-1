/**
 * Created by marlon on 02/01/15.
 */
var mongoose = require('mongoose'),
     ObjectId = mongoose.Schema.ObjectId;


Information = mongoose.model('Information', mongoose.Schema({
    titleHtml: String,
    detailHtml: String,
    imageUrl: String,
    url: String,
    order: Number
}));

exports.defaultValues = [
    new Information({
        titleHtml: 'Fale Conosco',
        detailHtml: 'Para saber onde encontrar os produtos Isdralit e outras informações, fale com a nossa equipe.',
        imageUrl: '/images/contact.jpg',
        url: '/',
        order: 0
    }),
    new Information({
        titleHtml: 'Conheça a Isdralit',
        detailHtml: 'Com mais de 60 anos no mercado...',
        imageUrl: '/images/about.jpg',
        url: '/',
        order: 1
    })
];

exports.Model =  mongoose.model('Information', Information);
