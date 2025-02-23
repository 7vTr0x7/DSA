//Find Special Substring of Length K

const hasSpecialSubstring = (s, k) => {
  if (s.length === 1 && k === 1) return true;
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      if (count === k) return true;
      count = 1;
    } else {
      count += 1;
    }
  }
  return count === k;
};

console.log(hasSpecialSubstring("cccbccc", 3));
