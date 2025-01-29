const reverseString = function(string) {
    revString ="";
    for(i=String(string).length - 1; i >= 0; i--){
        revString += String(string)[i];
    }
    return revString;

};

// Do not edit below this line
module.exports = reverseString;
