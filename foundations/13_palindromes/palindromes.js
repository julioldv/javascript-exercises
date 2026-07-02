const palindromes = function (phrase) {
  // Normalize: lowercase + keep only letters and digits
  const cleanStr = phrase
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  // Two-pointer comparison (O(n) time, O(1) extra space)
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) return false;
    left++;
    right--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
