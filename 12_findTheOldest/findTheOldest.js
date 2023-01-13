let findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const oldestPerson = people.reduce((winner, person) => {
        if (((person.yearOfDeath || currentYear) - person.yearOfBirth) > ((winner.yearOfDeath || currentYear) - winner.yearOfBirth)) {
            return person;
        } else if (((person.yearOfDeath || currentYear) - person.yearOfBirth) <= ((winner.yearOfDeath || currentYear) - winner.yearOfBirth)) {
            return winner;
        }
    });

    return oldestPerson;
}

const p1 = { yearOfBirth: 1990, yearOfDeath: 2015 }
const p2 = { yearOfBirth: 1990 }

console.log(findTheOldest([p1, p2]))

module.exports = findTheOldest;