var posts = require('express').Router();
var Post= require('../models/posts');

posts.get('/', (req,res)=>{
    console.log('Fetching all posts...');
    Post.find({}, (err, posts)=>{
        err?res.json(err):res.json(posts);
    });
});

posts.get('/post/:id', (req,res)=>{
    console.log('Fetching singe post...');
    Post.findById(req.params.id, (err, post)=>{
        err?res.json(port):res.status(200).json(post)
    });
});
posts.post('/post/add', (req,res)=>{
    console.log("Posting a new post...");
    Post.create(req.body, (err, post)=>{
        err?res.status(500): res.json(post);
    });
});
posts.put('/post/update/:id', (req,res)=>{
    console.log("Updating a post...");
    Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, post)=>{
        err?console.log(err):res.status(200).json(post);
    });
});
posts.delete('/post/remove/:id', (req,res)=>{
    console.log("Deleting a post...");
    Post.findOneAndRemove(req.params.id, (err, post)=>{
        err?console.log(err):res.status(200).json(post);
    })
});

module.exports = posts;