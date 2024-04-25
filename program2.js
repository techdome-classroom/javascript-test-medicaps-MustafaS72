function smallestMissingPositiveInteger(nums) {
  // Filter out negative numbers and zeros
  nums = nums.filter(num => num > 0);

  // If no positive numbers found, return 1
  if (nums.length === 0) return 1;

  // Create a set to store positive integers
  const numSet = new Set(nums);

  // Iterate from 1 until we find the smallest missing positive integer
  for (let i = 1; i <= Math.max(...nums) + 1; i++) {
      if (!numSet.has(i)) {
          return i;
      }
  }
}

module.exports = smallestMissingPositiveInteger;
