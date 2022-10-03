const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeId = data.employees.filter((a) => id === a.id)[0].responsibleFor;
  const [animal] = data.species.find((b) => b.id === employeeId[0]).residents
    .sort((c, d) => d.age - c.age).map((e) => Object.values(e));
  return animal;
}

module.exports = getOldestFromFirstSpecies;
