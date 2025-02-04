const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if(arr.length > 0){return arr.reduce((total, currentItem) => {return total + currentItem})}
  else{
    return 0;
  }
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => {return total * currentItem});
};

const power = function(a, b) {
  return Math.pow(a, b);
	
};

const factorial = function(num) {
  if(num > 0){
    return num * factorial(num-1);
  }
  else{
    return 1;
  }
	
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
