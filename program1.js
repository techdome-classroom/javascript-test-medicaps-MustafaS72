function longestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        if (charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = i;
        const currentLength = i - start + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

module.exports = { longestSubstring };


