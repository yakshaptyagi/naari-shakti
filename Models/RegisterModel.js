const mongoose = require('mongoose');

const RegisterSchema = mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model('RegisterModel', RegisterSchema, 'Register');