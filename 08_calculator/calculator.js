const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(args) {
  let length = args.length;
  let total = 0;
  for (let i = 0; i < length; i++){
    total += Number(args[i]);
  }
  return total;

};
const multiply = function(args) {
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= Number(args[i]);
  }
  return product;
};


const power = function(num, power) {
  let result = 1;
  for(let i = 0; i<power;i++){
    result *= num;
  }
	return result;
};

const factorial = function(num) {
  let fact = 1;
	for(let i = 1; i<=num;i++){ 
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
