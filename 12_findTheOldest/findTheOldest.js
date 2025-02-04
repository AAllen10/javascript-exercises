const findTheOldest = function(peopleArr) {
    let currentOldest = peopleArr[0];
    peopleArr.forEach(element => {
        if("yearOfDeath" in element){
           let age = element.yearOfDeath - element.yearOfBirth;
           element.age = age;
        }
        else{
            let age = (new Date().getFullYear() - element.yearOfBirth); //update
            element.age = age;
        }
        if(element.age > currentOldest.age){
            currentOldest = element;
        }
    });
    return currentOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
