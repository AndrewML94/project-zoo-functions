const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants1) {
  const senior = entrants1.filter((element) => element.age >= 50);
  const adult = entrants1.filter((element) => element.age >= 18 && element.age < 50);
  const child = entrants1.filter((element) => element.age < 18);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants2) {
  if (entrants2 === undefined || entrants2.length === undefined) return 0;
  const visitor = countEntrants(entrants2);
  let totalIs = 0;
  totalIs += visitor.child * prices.child;
  totalIs += visitor.adult * prices.adult;
  totalIs += visitor.senior * prices.senior;
  return totalIs;
}

module.exports = { calculateEntry, countEntrants };
