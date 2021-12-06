
const express= require("express");

const hbs= require('hbs')
const app=express();
const port=8080



app.set('view engine', 'hbs');
app.set('views', './views');




 app.get("/portfoliopage",(req,res)=>{
     
     res.render('portfoliopage', {name : req.query})
     
     
 });


 




app.listen(port,()=>{
    console.log("Server Running")
})