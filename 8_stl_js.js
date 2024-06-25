const arr=[1,3,4,6];
arr.push(5);//push the element
console.log(arr);
arr.pop();//pop the element from the last
console.log(arr);
arr.shift();//pop the element from the first
console.log(arr);
arr.unshift(1);//insert at first
console.log(arr);
const arr2=[4,5,6,7,8];
let temp=arr.concat(arr2);//concat the array
console.log(temp);

// function print(str)
// {
//     console.log(str);
// }
temp.forEach(element => {
    console.log(element);
});