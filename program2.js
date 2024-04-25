function smallestMissingPositiveInteger(nums) {

  const positiveNums = nums.filter(num => num > 0);

    const numSet = new Set(positiveNums);

    for (let i = 1; i <= positiveNums.length + 1; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }

}

module.exports = smallestMissingPositiveInteger;
