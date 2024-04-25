function smallestMissingPositiveInteger(nums) {
  // Filter out negative numbers and zeros
  nums = nums.filter(num => num > 0);
  if (nums.length === 0) return 1;
  const numSet = new Set(nums); // Creating set of positive integers
  // Iterate from 1 until we find the smallest missing positive integer
  for (let i = 1; i <= Math.max(...nums) + 1; i++) {
      if (!numSet.has(i)) {
        console.log("for", nums, "the answer is", i);
          return i;
      }
  }
}

module.exports = smallestMissingPositiveInteger;
