const sumAll = function(startVal, endVal) {
    let biggerNum = 0;
    let smallerNum = 0;
    let total = 0;
    
    if(startVal > endVal){biggerNum = startVal; smallerNum = endVal}else{biggerNum = endVal; smallerNum = startVal;}
    if(startVal < 0 || endVal < 0){return 'ERROR';}
    if(startVal % 1 != 0 || endVal % 1 != 0){return 'ERROR';}
    if(typeof(startVal)!= "number" || typeof(endVal) != "number"){return 'ERROR';}
    
    for(i=smallerNum; i<=biggerNum;i++){
        total+=i;
    }

    return total;

};

// Do not edit below this line
module.exports = sumAll;
