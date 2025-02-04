const palindromes = function (str) {
    const alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
    const newStr = str
    .toLowerCase()
    .split('')
    .filter((character) => alphaNumeric.includes(character))
    .join('');
    const reversedString = newStr.split('').reverse().join('');
    return reversedString === newStr;

    //originally tried to do via Array.from(str) + regex, overthought


};

// Do not edit below this line
module.exports = palindromes;
