const add = function(...array) {
  let sum = 0;
  for (let num of array) { sum+= num; }
  return sum;	
};

const subtract = function(x , y) {
  return x - y;
};

const sum = function(array) {
  let sum = 0;
  for (let num of array) { sum+= num; }
  return sum;	
	
};

const multiply = function(array) {
  let multiple = 1;
  for (let num of array) { multiple *= num; }
  return multiple;
};

const power = function(x, n) {
  return Math.pow(x, n);
	
};

const factorial = function(num) {
    if (num == 0) {
      return 1;
    }
    else { return num * factorial(num-1); }
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
