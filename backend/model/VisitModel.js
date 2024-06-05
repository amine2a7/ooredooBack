const mongoose = require('mongoose')

const VisitSchema = new mongoose.Schema({
    checkin : { 
        type : Date,

    },
    checkout : {
        type: Date,


    },
    vtype : {
        type: String,


    }

});

module.exports = mongoose.model('visit', VisitSchema)