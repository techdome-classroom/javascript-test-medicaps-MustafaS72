function longestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charInxMap = {};

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        if (charInxMap[currentChar] >= start) {
            start = charInxMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = i;
        const currentLength = i - start + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

module.exports = { longestSubstring };


