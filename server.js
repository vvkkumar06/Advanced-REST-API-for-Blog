var app = require('./server/configs/config');
var db = require('./server/configs/db');
var PORT = process.env.PORT || 3000;

//Routers
var users = require('./server/routes/users_controller');
var posts = require('./server/routes/posts_controller');


app.use('/api/users',  users);
app.use('/api/posts', posts);

app.listen(PORT, (err)=>{
    console.log("Server running on port: " + PORT);
});