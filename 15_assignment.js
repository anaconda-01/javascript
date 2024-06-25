
const fs=require("fs");

function readdata(data){
    console.log(data);
}
function writedata(datatoenter)
{
    fs.writeFile("a.txt", datatoenter, (err) => {
        if (err) {
            console.error(err);
        }
    });
}
function readwrtie(){
    return new Promise((resolve)=>{

        fs.readFile("a.txt","utf-8",(err,data)=>{
            readdata(data);
            var datatoenter="my name is rohit";
            var tempstr='';
            tempstr=data+datatoenter; 
            
            resolve(tempstr);        
        })
    })
}
readwrtie().then(writedata);