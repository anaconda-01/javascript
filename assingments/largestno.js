function findLargestElement(numbers) {
    numbers=numbers.sort();
    return numbers[numbers.length-1];
}
console.log(findLargestElement([1,2,3,4,5]))