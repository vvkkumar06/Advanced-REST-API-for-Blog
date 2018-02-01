var mongoose = require('mongoose');

var dbStr = "mongodb://vk123:vk123@ds121268.mlab.com:21268/restapi02";
mongoose.Promise = global.Promise;
mongoose.connect(dbStr, (err)=>{
    if(err){
        console.log("Error Connecting database");
    }else{
        console.log("Successfully connected to database.");
    }
});

module.exports = mongoose;