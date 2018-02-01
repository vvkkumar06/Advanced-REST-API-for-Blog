var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    login: {
        username: {type: String, unique:true, required:true, lowercase:true, minlength:6},
        password: {type: String, required: true, minlength:8 }
    },
    profile: {
        name: {type: String, required: true },
        email: {type: String, required: true, unique: true },
        gender: String,
        married: Boolean,
        address: {
            street: String,
            city: String,
            pin: Number,
            country: String,
        },
        picture: {type:String, default:""}
    }


});

module.exports = mongoose.model('User', userSchema, 'users' );