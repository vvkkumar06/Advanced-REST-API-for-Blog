var mongoose = require('mongoose');

var Schema  = mongoose.Schema;

var postSchema = new Schema({
    title: {type:String, maxlength: 40},
    author: {
            name: {type: String, default:"unknown" },
            link: {type: String, default:"" }
        },
    content: {type: String , maxlength:500}
},{
    timestamps: {createdAt: 'posted_at'}
});


module.exports = mongoose.model('Post', postSchema, 'posts');