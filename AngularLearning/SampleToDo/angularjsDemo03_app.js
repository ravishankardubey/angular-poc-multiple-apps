var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
var databaseUrl = 'sampledb';
var collections = ['things'];
var db = require('mongojs').connect(databaseUrl, collections);
var mongojs = require('mongojs');

// config
app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true}));
    app.set('views', __dirname + '/views');
    app.engine('html', require('ejs').renderFile);
});

app.get('/', function(req, res){
    res.render('index.html');
});

//rest service
app.get('/getUsers', function(req, res){
    db.things.find('', function(err, users){
        if(err) {
            console.log(err);
        }
        else{
            res.json(users);
        }
    });
});
app.post('/insertUser', function(req, res){
    var jsonData = JSON.parse(req.body.data);
    db.things.save({email: jsonData.email, password: jsonData.password, username: jsonData.username}, function(err, saved){
        if(err){
            console.log(err);
        }
        else{
            res.end('User saved');
        }
    })
});
app.put('/updateUser', function(req, res){
    var jsonData = JSON.parse(req.body.data);
    var ObjectId = mongojs.ObjectId;

    db.things.update({_id: ObjectId(jsonData._id)}, {username: jsonData.username, password: jsonData.password, email: jsonData.email}, function(err, saved){
        if(err){
            console.log(err);
        }
        else{
            res.end('User updated');
        }
    });
});
app.delete('/removeUser', function(req, res){
    var jsonData = JSON.parse(req.body.data);
    db.things.remove(jsonData, function(err, saved){
        if(err){
            console.log(err);
        }
        else{
            res.end('User deleted');
        }
    });
});

app.listen(9900);
