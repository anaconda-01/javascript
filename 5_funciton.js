function sumoftwonumber(a,b)
{
    let sumoftwonumber=0;
    sumoftwonumber=a+b;
    return sumoftwonumber;
}
const ans=sumoftwonumber(5,6);
console.log(ans);



///fucntion callbacks

function sum(a,b,funcToCall)
{
    let sum=0;
    sum=a+b;
    funcToCall(sum);
};
function displayres(data)
{
    console.log("the result if sum is"+data);
};
function displaypassiveres(data)
{
    console.log("the sum is"+data);
};


sum(3,4,displaypassiveres);