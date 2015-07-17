
/* global exports, ObjectId, ObjectId */

var mongoose = require('mongoose');

var Item =  mongoose.model('Item', mongoose.Schema({
    key: String,
    titleHtml: String,
    detailHtml: String,
    backgroundImageUrl: String,
    imageUrl: String,
    imagesUrl: Array,
    order: Number
//    informations:  [{type: mongoose.Schema.ObjectId, ref:'InformationSchema'}],
//    measures:  [{type: mongoose.Schema.ObjectId, ref:'MeasureSchema'}]  
}));
  

  
  exports.defaultValues = [
    
    new Item ({
        key: 'caixas-de-agua-forte',
        titleHtml: 'Caixas de água Forte',
        detailHtml :'Caixas de água Forte',
        imageUrl: '/images/water-tanks.jpg',
        backgroundImageUrl:'/images/water-tanks.jpg',
        order: 0
        })
];
  exports.Model = Item;
//
//var InformationSchema = require('./InformationSchema.js');
//var MeasureSchema = require('./MeasureSchema.js');


//  
//  ItemSchema = new Schema({
//    key: String,
//    titleHtml: String,
//    detailHtml: String,
//    backgroundImageUrl: String,
//    imageUrl: String,
//    imagesUrl: Array,
//    order: Number
//    
//  });
//    informations:  [{type: ObjectId, ref:'InformationSchema'}]
//    measures:  [{type: ObjectId, ref:'MeasureSchema'}]  
  
  

//exports.Model =   mongoose.model('ItemSchema', ItemSchema);

