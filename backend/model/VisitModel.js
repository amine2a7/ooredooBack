const mongoose = require('mongoose')

const VisitSchema = new mongoose.Schema({
    checkin : { 
        type : Date,

    },
    checkout : {
        type: Date,


    }
});

module.exports = mongoose.model('visit', VisitSchema)