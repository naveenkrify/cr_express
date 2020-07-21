var express = require('express')
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs')

var app =  new express()

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
var details = {
    name:'naveen',
    age:24,
    sex:'male'
}

app.get('/',function(req,res){

    var name = 'sai'

//res.send('Hello world')
res.render('body',{name1:name,age:25,sex:'male'})
})


//USERS DATA
var users = [
    {
        id:1,
        name:'naveen',
        sex:'male',
        age:25,
        company:'krify'
    },
    {
        id:2,
        name:'sai',
        sex:'male',
        age:25,
        company:'krify2'
    },
    {
        id:3,
        name:'chakri',
        sex:'male',
        age:25,
        company:'krify3'
    }
]

app.get('/users',function(req,res){
    //res.send('showing all users')
    
    res.render('users',{users:users})
})

app.get('/user/:id',function(req,res){
    var id = req.params.id
    var user_;

    users.forEach(function(user){
        if(user.id === parseInt(id)){
            console.log('going')
            user_ = user;
        }
    })
    res.render('user',user_)

})

app.get('/profile',function(req,res){
//res.send('Hello My name is Naveen ')
res.json(details)
})

app.get('/profile/sai',function(req,res){
    res.send('Hello World this is sai')
})

app.listen(8001,function(){
    console.log('node was listening')
})