//Find First unique char
function firstUniqueChar(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char in str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; 
}

console.log(firstUniqueChar("swiss")); // Output: "w"
