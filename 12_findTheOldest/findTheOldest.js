const findTheOldest = function (people) {
  people.sort((a, b) => {
    if (!a["yearOfDeath"]) {
      a["yearOfDeath"] = new Date().getFullYear();
    }
    if (!b["yearOfDeath"]) {
      b["yearOfDeath"] = new Date().getFullYear();
    }
    const firstGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return firstGuy > nextGuy ? -1 : 1;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
