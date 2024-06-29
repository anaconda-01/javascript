const express= require('express');
const app=express();
var totalreqcounter=0;
var totaltime=0;
var start;
var end;

function calculateRequest(req,res,next)
{
    totalreqcounter++;
    console.log(totalreqcounter);
    next();
}
app.use(calculateRequest)
app.use(express.json())
app.get("/",(req,res,next)=>{start=Date.now();
    next();
},(req,res,next)=>{
    res.send("complete the body request");
    next();
},
(req,res,next)=>{
    end=Date.now();
    next();
},
(req,res,next)=>{
    console.log("the total timetaken is "+`${(totaltime+=(end-start))/totalreqcounter}`);
})
app.listen(3000);