const fibonacci = function(num) {
  if(typeof num !== "number"){
        actualNum = parseInt(num);
  }
  else{ actualNum = num}
  if(actualNum < 0){return "OOPS";};
  if(actualNum === 0){return 0;};
  if(actualNum === 1){return 1;}; //messy, will look at solution after
  let count = 0;
  let twoLess =0;
  let oneLess =1;
  for(i = 2; i <= actualNum; i++){
    count = oneLess + twoLess;
    twoLess = oneLess;
    oneLess = count;
  }
  return count;
  
};

// Do not edit below this line
module.exports = fibonacci;
