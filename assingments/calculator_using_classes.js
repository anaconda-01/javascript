const { log } = require("console");

class Calculator{
    constructor(){
        this.res=0;
    }
    add(a,b)
    {
        this.res=a+b;
    }
    sub(a,b){
        this.res+=(a-b);
    }
    mult(a,b){
        this.res+=(a*b);
    }
    divide(a,b){
        this.res+=(a/b)
    }
    answer(){
        return this.res
    }
    clear(){
        this.res=0;
    }
}


    var str="10 +   2 *    (   6 - (4 + 1) / 2) + 7";
    let operation=['-','+','*','/','(',')']
    var str = str.split(' ').join('').split('');
    const arr=[];
    console.log(str);
    var temp='';
    for(let i=0;i<str.length;i++)
        {
            if(operation.includes(str[i]) && temp!=='')
                {
                    arr.push(temp);
                    arr.push(str[i]);
                    temp='';
                }
            else{
               temp=temp+str[i];
              
            }
        }
   console.log(arr);