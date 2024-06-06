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


    },
    visitor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Visitor'
    },
    employee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee'
    },
    badge: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Badge'
    }

});

module.exports = mongoose.model('visit', VisitSchema)