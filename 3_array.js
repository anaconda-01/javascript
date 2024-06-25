// let a=[];
// for(let i=0;i<100;i++){
//     if(i%2==0){
//         a.push(i);
//     }
// }
// console.log(a);


// //create a arra of ranodm int;
// let a = [];
// for (let i = 0; i < 10; i++) {
//     let randit = Math.floor(Math.random() * 10) + 1;
//     a.push(randit);
// }
// console.log("Original array:", a);

// // Sort the array numerically
// a.sort((a, b) => a - b);
// console.log("Sorted array:", a);

// // Print the largest element (last element after sorting)
// console.log("Largest element:", a[9]);



// let obj={
//     male:["rohit doekate","atharva pawar","nikke kumar"],
//     female:["ashwini kumari","ankita deokate","sara tendulkar"]
// };



// for(let i=0;i<obj.male.length;i++)
//     {
//         let temp=obj.male[i];
//         let str="";
//         for(let j=0;j<temp.length && temp[j]!==" ";j++)
//             {
//                 str=str+temp[j];
//             }
//             console.log(str);
//     }

const info=[
    {
        name:"rohit",
        gender:"male"
    },
    
    {
        name:"atharva",
        gender:"male"
    },
    
    {
        name:"ashwini",
        gender:"female"
    }
]
for (let i = 0; i < info.length; i++) {
    if(info[i]["gender"]==="male")
        {
            console.log(info[i]["name"]);
        }

    
}

