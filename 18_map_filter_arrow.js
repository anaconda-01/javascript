//map

const { log } = require("console");
const { findSourceMap } = require("module");

//give me arr whihc return an array in which every value multiplies by 2
const arr=[1,2,3,4];
let temp=arr.length;
// for(let i=0;i<temp;i++ )
//     {
//         arr.push(arr[0]*2)
//         arr.shift();
//     }
//     console.log(arr);

    //apprach with map fucntion
    function transform(i){
        return i*2
    }
    // console.log(arr.map(transform))

// console.log(arr.map((i)=>{
//     return i*2;
// }));
//give me arr whihc return an array in which every value multiplies by 2


//filtering

// console.log(arr.filter((i)=>{
//     return i%2===0;
// }));

function enven(i)
{
    if(i%2===0)
        {
            return true ;
        }
}
console.log(arr.filter(enven));