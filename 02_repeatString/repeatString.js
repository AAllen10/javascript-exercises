
const repeatString = function(string, num) {
    newString = '';
    if(num<0){
        return 'ERROR';
    }
    if(num ===0){return '';}
    if(string === '' || num === 1){return string;}

    for(i = 0; i < num; i++){
        newString+= string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
