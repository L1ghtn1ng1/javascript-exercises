const fibonacci = function(num) {
    //create an array to store the fibonacci sequence
    let fib = [0, 1];
    //check if the input is a negative number
    if (num < 0) {
        return "OOPS";
    }
    //loop through the fibonacci sequence
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    //return the last element in the array
    return fib[num];


};

// Do not edit below this line
module.exports = fibonacci;
