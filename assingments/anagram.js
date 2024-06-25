//is anagram
function isanagram(str1,str2)
{
    
    let temp2=str2.split('').sort();
    let temp=str1.split('').sort();
    if(toString(temp) === toString(temp2))
        {
            return true;
        }
    else {
        return false;
    }
}
console.log(isanagram('spar','rasp'));
