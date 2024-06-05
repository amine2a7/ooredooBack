const mongoose = require('mongoose')

const BadgeSchema = new mongoose.Schema({
    identifiant : { 
        type : Number,

    },
    type : {
        type: String,


    },
    dispo: {
        type: Number,

    }
});



module.exports = mongoose.model('badge', BadgeSchema)