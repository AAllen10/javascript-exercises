const removeFromArray = function(array, ...values) {
    
    for(const value of values){
        for(i = 0; i < array.length; i++){
            let foundIndex = array.indexOf(value);
            if(foundIndex > -1){
                array.splice(foundIndex, 1);
                i--;
            }                
            
        }
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
