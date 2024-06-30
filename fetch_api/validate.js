const { json } = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "1234567890";
const app = express();  
app.use(express.json());

const all_users=[
    {
        "email":"temp1@xyz.com",
        "password":"temp1",
        "Name":"temp1"  
    },
    {
        "email":"temp2@xyz.com",
        "password":"temp2",
        "Name":"temp2"
    },
    {
        "email":"temp3@xyz.com",
        "password":"temp3",
        "Name":"temp3"
    }
    
]
function Usernotexist(username,password){
var user_exit=false;
for(i of all_users){
    if(i.email===username && i.password===password)
    {
        user_exit=true;
        break;
    }
}
return user_exit;
}
app.post("/signin",(req,res)=>{
    const username = req.body.email;
    const password=req.body.password;
    if(!Usernotexist(username,password)){
        return res.status(401).json(
            {
                msg:"Invalid username or password"
            }
        );
    }
    const token=jwt.sign({username:username},jwtPassword);
    return res.status(200).json({
        token:token
    })

})
app.get("/users",(req,res)=>{
const authtoken=req.headers.authorization;

try{
    const decoded=jwt.verify(authtoken,jwtPassword);
    const username=decoded.username;
    const user=all_users.find((user)=>user.email==username);
    res.json({
        Name:all_users
    })

}
catch(e){
    return res.status(401).json({
        msg:"Invalid token"
    })
}})
app.listen(3000);
