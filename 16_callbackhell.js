// const { resolve } = require("path");

// function newsettimeout(callback,duration)
// {
//     setTimeout(callback,duration);
// }
// newsettimeout(function(){
//     console.log("We are in timeout");
// },2000);
// console.log("code ended");

function promisnewsettimeout(duration){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            console.log("We are in timeout");
            resolve();
        },duration);
    })
}
async function main(){
    await promisnewsettimeout(2000);
    console.log("code ended");  
}
main();