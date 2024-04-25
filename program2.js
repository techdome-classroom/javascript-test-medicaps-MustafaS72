function smallestMissingPositiveInteger(nums) {

  const positiveNums = nums.filter(num => num > 0);

    const numSet = new Set(positiveNums);

    // Start from 1 and check if it exists in the set
    for (let i = 1; i <= positiveNums.length + 1; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }

}

module.exports = smallestMissingPositiveInteger;
