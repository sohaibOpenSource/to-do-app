const mongoose = require('mongoose');
 
const User = mongoose.model('User', new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    createdAt: { type: Date, default: Date.now }
}));
exports.User = User;
