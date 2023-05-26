//Adding Mongoose Module Dependencies
const mongoose = require('mongoose');

//Creating Contact Schema with Required Data Types.
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    phone: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact; 