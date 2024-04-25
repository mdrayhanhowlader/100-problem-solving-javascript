// Problem 1: Sum of Array
// Write a function that takes an array of numbers as input and returns the sum of all the numbers.

// sumArray.js
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15
