//   console.log("code started");
//   function start(fun1)
//   {
//     setTimeout(()=>{
//         console.log("We are in timeout");
//         fun1();
//     },5000);
//   }
    function fun1(data)
    {
        console.log("We are in fun1"+data);
    }
//     start(fun1);
//     console.log("main operaiton performed");
//     //i wanted to perfome the callback quueue here before ending the fucntion
//     console.log("code ended");

// Promises
// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
console.log("code started");
const fs=require('fs');
function rohit(){
    return new Promise(function(resolve){
        setTimeout(()=>{
        console.log("We are in timeout");
        fs.readFile("a.txt","utf-8",function(err,data){

            resolve(data);
                  })
        },2000);
    })
}
async function main(){
    await rohit().then(fun1);
    console.log("main operaiton performed");
    console.log("code ended");
}
main();
//i wanted to perfome the callback quueue here before ending the fucntion



