// longestWord.js
function findLongestWordLength(str) {
    const words = str.split(' ');
    let maxLength = 0;
    for (const word of words) {
        const wordLength = word.length;
        if (wordLength > maxLength) {
            maxLength = wordLength;
        }
    }
    return maxLength;
}

const inputString = 'The quick brown fox jumped over the lazy dog';
console.log(findLongestWordLength(inputString)); // Output: 6 (for the word 'jumped')
