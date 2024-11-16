const sumAll = function(firstNumber, secondNumber) {
    if(typeof firstNumber !== 'number' || typeof secondNumber !== 'number' || firstNumber < 0 || secondNumber < 0 || !Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)){
        return 'ERROR';
    }
    result = 0;
    if(firstNumber > secondNumber){
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }
    for(let i = firstNumber; i <= secondNumber; i++){
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
