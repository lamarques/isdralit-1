
/* global exports */

var mongoose = require('mongoose');



 
Item =  mongoose.model('Item', mongoose.Schema({
    key: String,
    titleHtml: String,
    backgroundImageUrl: String,
    imageUrl: String,
    order: Number
    
}));

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

