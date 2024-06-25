function isPalindrome(str) {
    let len=str.length;
    
    for(let i=0;i<len/2;i++)
        {
            if(str[i]===str[len-i-1])
                {
                    //kucn mat kr
                }
            else{
                return false;
            }
        }
    return true;
  }
  
 console.log(isPalindrome("madaa"));