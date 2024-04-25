function smallest_missing_positive_integer(nums) {
  // Helper function to swap elements in the array
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  const n = nums.length;

  // First, we want to rearrange the array such that all positive integers 1 to n are in their respective positions
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // Place nums[i] in its correct position if it's a positive integer within the range [1, n]
      swap(nums, i, nums[i] - 1);
    }
  }

  // Now, find the first missing positive integer
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1; // The first missing positive integer found
    }
  }

  return n + 1; // If no missing positive integer is found up to n, return n + 1
}

module.exports = smallest_missing_positive_integer;