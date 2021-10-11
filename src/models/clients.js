const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
})

module.exports = mongoose.model('Client', ClientSchema);