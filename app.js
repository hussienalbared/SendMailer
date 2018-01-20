var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var nodeMailer=require('nodemailer');

var app=express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{

console.log('hello world');
res.render('index');
});
app.get('/login',(req,res)=>{

    console.log('hello world');
    res.render('login');
    });
app.post('/register',(req,res)=>{
    // res.send(req.param('name')+req.param('email'));
      res.send(req.body);

});
app.get('/about',(req,res)=>{
    // res.send(req.param('name')+req.param('email'));
      res.render('about');

});
app.get('/contact',(req,res)=>{
    // res.send(req.param('name')+req.param('email'));
      res.render('contact');

});
app.post('/contact/send',(req,res)=>{
    // res.send(req.param('name')+req.param('email'));
    
    var transporter=nodeMailer.createTransport(
        {
        service:'Gmail',
        auth:{
            user:'generalassin@gmail.com',
            pass:'general123456789'
        }


        }
    );
    var mailOptions={
from:'generalassin2016 <generalassin@gmail.com>',
to:  'generalassin@gmail.com',
subject:'node mailer',
text:req.body.message,
html:req.body.message

    };
    
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
    {
          res.send(err);}
        else{
            console.log(req.body.message);
        res.send(info);}
     });
     

});
app.listen(3000);
console.log('hello from server');