function getArithmetic(a,b,type)
{
    console.log(type(a,b));
}
function sum(a,b) 
{
    return a+b;
}
function minus(a,b) 
{
    return a-b;
}

getArithmetic(3,4,minus);