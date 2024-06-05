const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new mongoose.Schema({
    identifiant : { 
        type : Number,

    },
    username : {
        type: String,
        required : [true, "Please provide unique Username"],
        unique: [true, "Username Exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique : false,
    },
    email: {
        type: String,
        required : [true, "Please provide a unique email"],
        unique: true,
    },
    firstName: { type: String},
    lastName: { type: String},
    role: { type: String}
});
UserSchema.plugin(AutoIncrement, { inc_field: 'identifiant' });

// Implement the findOne method
UserSchema.statics.findOneAndUpdateByEmail = async function (email, update) {
    return this.findOneAndUpdate(
        { email },
        update,
        { new: true }
    );
};

module.exports = mongoose.model('user', UserSchema)