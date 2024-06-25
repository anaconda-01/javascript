function countVowels(str) {
    let corpus=['a','e','i','o','u'];
    let temp=str.split('');
    let count=0;
    for(i of temp)
        {
            
            if(corpus.includes(i)){
                count++;
            }

        }
    
    return count;
}


console.log(countVowels("rohit"));