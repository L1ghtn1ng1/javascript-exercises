const removeFromArray = function(array, ...args) {
    length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (array[i] === args[j]) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
