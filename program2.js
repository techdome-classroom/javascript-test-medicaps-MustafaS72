function smallestMissingPositiveInteger(nums) {

  const posNos = nums.filter(num => num > 0);

    const numSet = new Set(posNos);

    for (let i = 1; i <= .length + 1; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }

}

module.exports = smallestMissingPositiveInteger;
