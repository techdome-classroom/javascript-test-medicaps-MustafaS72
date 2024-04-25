function smallestMissingPositiveInteger(nums) {
  const posNos = nums.filter(num => num > 0);//Filtering the -ve Nos ans 0
    const numSet = new Set(posNos); //Creating set for +ve integers

    //check from index 1 and check whether it exists in the set or not
    for (var i = 1; i <= posNos.length + 1; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }

}

module.exports = smallestMissingPositiveInteger;
