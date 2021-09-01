const express = require("express");
const app = express();
const Data = require('./data.json');
const path = require('path');

app.set('view engine','ejs');

// console.dir(app);
// app.use(express.json);


app.set('views',path.join(__dirname,'/views'));
// app.use(express.static(__dirname + '/public'));

app.get('/login',(req,res)=>{
  res.render('login.ejs');
})


app.get('/r/:dashboard',(req,res) => {
  const {dashboard} = req.params;
  const data=Data[dashboard];
  res.render('dashboard',{...data});
})

app.get('/history',(req,res)=>{
  company="apple";
  res.render('history',{company:company})
})

app.get('/*',(req,res)=>{
  res.send("unrelevent path");
})

app.listen(3001,()=>{
    console.log("listening to port 3000");
})
