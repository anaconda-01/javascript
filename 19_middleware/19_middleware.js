const express = require('express');
const app = express();
app.use(express.json())
function validate(req,res,next)
{
    let id=req.query.emailId;
    let pass=req.query.pass;
    if(id === 'rohitdeokate' && pass==='12345678')
        {
           res.send("everything is fine")
            next();
        }
        else{
        res.send("<><h2>not able to accept</h2></style>")
        }
}

app.get("/",validate,(req, res) => {
    // Fix typo: emialId -> emailId
    let id=req.query.emailId;
    

    console.log("everything is fine")
    
    
   
   
    

            
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
