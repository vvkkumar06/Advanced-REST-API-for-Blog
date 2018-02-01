var users = require('express').Router();
var User = require('../models/users');

//Get All users
users.get('/', (req,res)=>{
    console.log("Fetching all users...");
    User.find({}, (err, users)=>{
        err?res.status(500).json(err):res.status(200).json(users);
    });
});

//Get Single User by ID
users.get('/user/:id', (req,res)=>{
    console.log(`Fetching user of id ${req.params.id}`);
    User.findOne({"_id": req.params.id}, (err, users)=>{
        err?res.status(500).json(err):res.status(200).json(users);
    });
});

//Add New User
users.post('/user/add', (req,res)=>{
    console.log('Adding new user...');
    User.create(req.body, (err,user)=>{
        err?console.log(err):res.status(200).json(user);
    });
});

//Update A user by Id
users.put('/user/update/:id', (req,res)=>{
    console.log('Updating user detail...');
    User.findByIdAndUpdate(req.params.id, req.body,{new:true} ,(err, user)=>{
        err?console.log(err):res.status(200).json(user);
    } );
})
users.delete('/user/remove/:id', (req,res)=>{
    console.log('Deleting user...');
    User.findByIdAndRemove(req.params.id,(err, user)=>{
        err?console.log(err):res.status(200).json(user);
    });
});

module.exports = users;


