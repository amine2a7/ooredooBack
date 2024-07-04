const mongoose = require('mongoose')

const RdvSchema = new mongoose.Schema({
    nom : { 
        type : String,

    },
    prenom : {
        type: String,


    },
    tel : {
        type: String,


    },
    entreprise: { 
        type: String,
        
    },
    dater: { 
        type: String,
        
    },
    timer: { 
        type: String, 
       
    },
    service: { 
        type: String,
       
    },
    note: { 
        type: String,
        
    },
    statut : {
type:String,

    }

});

module.exports = mongoose.model('rdv', RdvSchema)



