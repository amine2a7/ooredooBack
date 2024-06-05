const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    matricule : { 
        type : String,

    },
    nom : {
        type: String,
        required : [true, "Please provide a nom"],
        unique: false,
    },
    prenom: {
        type: String,
        required: [true, "Please provide a prenom"],
        unique : false,
    },
    tel: {
        type: String,
        required : [true, "Please provide a tel"],
        unique: false,
    },
    direction: { type: String},
    
});


module.exports = mongoose.model('Employee', EmployeeSchema)