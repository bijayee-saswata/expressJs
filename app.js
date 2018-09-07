var express  = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencoderParser = bodyParser.urlencoded({extended:false});

app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'));

app.get('/', function(req,res){
  res.render('index');
});

app.get('/contact', function(req,res){
  res.render('contact',{qs:req.query});
});

app.post('/contact', urlencoderParser, function(req,res){
  res.render('contact-success',{data:req.body});
});

app.get('/profile/:name', function(req,res){
  var myData = {age:21,job:'jobLess',hobbies:['fooding','singing','dancing']};
  res.render('profile', {person:req.params.name, data:myData});
});

app.listen(3000);
