const express=require("express");
const port =3000;
const app=express();
function calculateTheSum(qr)
{
    return (qr*(qr+1))/2;   
}


app.get("/",(req,res)=>{
    const qr=req.query.n
    res.send(`${calculateTheSum(qr)}`);
})
app.listen(port);


