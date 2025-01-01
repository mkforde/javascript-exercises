const findTheOldest = function(people) {
  ages = [];
  for (let person of people) {
    if (person.yearOfDeath != undefined) {
      ages.push(getAge(person.yearOfBirth, person.yearOfDeath));
    } else { ages.push(getAgeWithout(person.yearOfBirth));}
  }
  let maxAge = 0;
  let loc = 0;
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] > maxAge) { maxAge = ages[i]; loc = i; }
  }
  return people[loc];
}

function getAge(birthYear, deathYear) {
  return deathYear - birthYear; 
}

function getAgeWithout(birthYear) {
  return 2024 - birthYear;
}
// Do not edit below this line
module.exports = findTheOldest;
