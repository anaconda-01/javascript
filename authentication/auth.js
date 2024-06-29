const express=require('express');
const app=express();
const path=require('path');    
app.use(express.json());
app.use(express.urlencoded({extended:true}))

var names = {};
var couter=0;


app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,'public','index.html')); 
res.send(`${names.map((i)=>{return i})}`)
})
app.post("/submit",(req,res)=>{
const name=req.body.name;
names[couter]=name;
couter++;
console.log(names);
res.redirect("/");
  

})

app.listen(3000);   
