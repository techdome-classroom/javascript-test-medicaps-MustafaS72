function smallestMissingPositiveInteger(nums) {
  // Filter out negative numbers and zeros
  const positiveNums = nums.filter(num => num > 0);

  // Create a set to store positive integers
  const numSet = new Set(positiveNums);

  // Start from 1 and check if it exists in the set
  for (let i = 1; i <= positiveNums.length + 1; i++) {
      if (!numSet.has(i)) {
          return i;
      }
  }
}

module.exports = smallestMissingPositiveInteger;
