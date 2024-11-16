const findTheOldest = function(people) {
    let length = people.length;
    let oldest = 0;
    let person;
    let born;
    let death;
    for (let i = 0; i < length; i++) {
        born = people[i].yearOfBirth;
        death = people[i].yearOfDeath;
        if (!death) {
            death = new Date().getFullYear();
        }
        let age = death - born;
        if (age > oldest) {
            oldest = age;
            person = people[i];
        }

    }
    return person;  
};

// Do not edit below this line
module.exports = findTheOldest;
