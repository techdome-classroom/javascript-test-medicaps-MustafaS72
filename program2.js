function smallestMissingPositiveInteger(nums) {
  // Remove negative numbers and zeros
  nums = nums.filter(num => num > 0);

  // Initialize a variable to track the smallest positive integer
  let smallestPositive = 1;

  // Iterate through the positive numbers
  for (const num of nums) {
      // If the current number is equal to the smallest positive integer, increment smallestPositive
      if (num === smallestPositive) {
          smallestPositive++;
      }
  }

  return smallestPositive;
}

module.exports = smallestMissingPositiveInteger;
