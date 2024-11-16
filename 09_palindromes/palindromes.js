const palindromes = function (string) {
    let currentString = string.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    let length = currentString.length;
    for (let i = 0; i < length / 2; i++) {
        if (currentString[i] !== currentString[length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
