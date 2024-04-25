function smallestMissingPositiveInteger(nums) {
  const posNos = nums.filter(num => num > 0);//Filtering the -ve Nos ans 0
    const numSet = new Set(posNos); //Creating set for +ve integers
    for (let i = 1; i <= posNos.length + 1; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }

}

module.exports = smallestMissingPositiveInteger;
