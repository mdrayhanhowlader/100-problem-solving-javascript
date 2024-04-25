// reverseString.js
function reverseString(str) {
    return str.split('').reverse().join('');
}

const inputString = 'hello';
console.log(reverseString(inputString)); // Output: 'olleh'
