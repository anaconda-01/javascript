// console.log('cod started');
// function greet(name){
//     console.log('Hello '+name);
    
// }
// console.log('2nd step');
// setTimeout(greet,2000,'Rohit');
// console.log('3rd step');
  
function greet(printnumber)
    {
        const number=10;
        console.log(printnumber(number));
        
    }
    greet(function(number){
        return number;
    });