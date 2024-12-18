// Pseudocode:
// 1. Define a function isPalindrome that takes a string as an argument.
// 2. Check if the string is equal to its reverse.
// 3. Return true if it is, false otherwise.

function isPalindrome(str) {
  // Reverse the string and compare it to the original
  return str === str.split('').reverse().join('');
}

// Export the function to make it available for testing
module.exports = isPalindrome;

// Additional test cases
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('robot')); // false
console.log(isPalindrome('a')); // true
console.log(isPalindrome('ab')); // false
console.log(isPalindrome('racecar')); // true
