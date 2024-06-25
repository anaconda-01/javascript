const fs=require('fs');
const { resolve } = require('path');

function readf()
{
    return new Promise((resolve)=>{
        fs.readFile("a.txt","utf-8",(err,data)=>{
            resolve(data);
        })
    })
}
async function main()
{
    console.log("mian started here");
    await readf().then((data)=>{
        console.log("the data is "+ data)
    });
    
    console.log("code ended here");
}
main();