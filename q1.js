//Palindrome number

const isPalindrome = (num) => {
  return x < 0
    ? false
    : num === Number(num.toString().split("").reverse().join(""));
};

console.log(isPalindrome(121));
