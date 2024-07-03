// Modèle Mongoose pour les utilisateurs connectés
const mongoose = require('mongoose');

const connectedUserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

const ConnectedUser = mongoose.model('ConnectedUser', connectedUserSchema);

module.exports = ConnectedUser;
