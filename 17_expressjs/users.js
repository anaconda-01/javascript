const users=[{
  name:"jhon",
  kidney:[{
    healthy:false},
    {healthy:true,
  }]  
}]


var count=0;
var healthykidney=0;
function count_kidney(users){
    count=0;
    healthykidney=0;
    for(i of users)
        {
            for(j of i.kidney)
                {
                    count++;
                    if(j.healthy)
                        {
                            healthykidney++;
                        }
                    }
                }
                console.log(healthykidney);
                console.log(count);
                str='the total count is '+count.toString()+' the healthy kidney is '+healthykidney.toString();
                return str;
            }
function put_kidney(users)
{
    for(temp of users[0].kidney)
        {
            if(!temp.healthy)
                {
                    temp.healthy=true;
                }
        }
    console.log(users[0].kidney)   
}


const express= require("express");
const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.send(count_kidney(users));
  
})

app.post("/",(req,res)=>{
    console.log(req.body);
        const ishealthy= req.body.ishealthy;
        users[0].kidney.push({
            healthy:ishealthy
        })
         const json={
                   msg:"done"
                }
                res.send(JSON.stringify(json))
        console.log(users[0].kidney)
       
       
})
// put the only healthy kidney
app.put("/",(req,res)=>
{
   put_kidney(users);
   res.json(
    {
        "msg":"done putting the kidney"
    }
   )

   
})
var tempkidney=[];
app.delete("/",(req,res)=>{
    for(i of users[0].kidney)
        {
            if(i.healthy)
                {
                    tempkidney.push(i)
                }
        }
        users[0].kidney=tempkidney;
        res.json(
            {
                "msg":"done putting the kidney"
            }
           )
        console.log(users[0].kidney)

})


app.listen(3000);