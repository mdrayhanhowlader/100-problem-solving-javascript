// palindrome.js
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

const inputString = 'racecar';
console.log(isPalindrome(inputString)); // Output: true
