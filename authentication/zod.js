const zod=require('zod');
const express=require('express');
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    const arr=req.body.kidney;
    console.log(typeof(arr));

    const schema=zod.array(zod.number());
    const response =schema.safeParse(arr);
    if(response.success)
        {
        
            res.json({
                "kidney":response.data
            })      
        }
})
app.listen(3000);