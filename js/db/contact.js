var mongoose = require('mongoose');

ObjectId = mongoose.Schema.Types.ObjectId;

Contact = mongoose.model('Contact', mongoose.Schema({

    firstName: String,
    state: String,
    email: String,
    subject: String,
    content: String
    //category: String

}));


exports.Model = Contact;
exports.Populate = '';
exports.Sort = 'firstName';