const reverseString = function(word) {
    let length = word.length;
    let result = '';
    for (let i = length - 1; i >= 0; i--) {
        result += word[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
