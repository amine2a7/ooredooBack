const mongoose = require('mongoose')

const VisitorSchema = new mongoose.Schema({
    
    nom : {
        type: String,
       
    },
    prenom: {
        type: String,
        
    },
    tel : { 
        type : String,

    },
    cin : { 
        type : String,

    }
});



module.exports = mongoose.model('Visitor', VisitorSchema)