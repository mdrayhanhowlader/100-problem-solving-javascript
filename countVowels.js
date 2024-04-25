// countVowels.js
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const inputString = 'Hello World';
console.log(countVowels(inputString)); // Output: 3 (for the vowels 'e', 'o', 'o')
