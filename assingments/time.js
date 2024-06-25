// function calculateTime(n){
//     let start=performance.now();
//     let sum=0;
//     for(let i=1;i<n;i++)
//         {
//             sum+=i;
//         }
//         let end=performance.now();
//     return end-start;
// }
console.log(calculateTime(1000000000));

function calculateTime(n){
    let startDate = new Date();
    let sum = 0;
    for(let i = 1; i < n; i++) {
        sum += i;
    }
    let endDate = new Date();
    return (endDate - startDate)/1000;
}