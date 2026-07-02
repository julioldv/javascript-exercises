const calculateAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function(people) {

    const currentYear = (new Date()).getFullYear();

    let oldestPerson = people.reduce((oldest,current) =>{

        const currentAge = calculateAge(current.yearOfBirth,current.yearOfDeath);
        const oldestAge = calculateAge(oldest.yearOfBirth,oldest.yearOfDeath);

        if( currentAge > oldestAge){
            return current;
        }
        return oldest;
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
