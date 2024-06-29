const express= require('express');
const app=express();
var arr=[];
app.use(express.json())
app.post("/",(req,res,next)=>{
    arr=req.body.kidney;
    console.log(arr);   
    console.log(typeof arr);
    res.send(arr);
    
})
app.listen(3000);