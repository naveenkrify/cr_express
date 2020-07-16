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

//res.send('Hello world')
res.render('hello')
})

app.get('/profile',function(req,res){
//res.send('Hello My name is Naveen ')
res.json(details)
})

app.listen(8001,function(){
    console.log('node was listening')
})