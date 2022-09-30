const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  if (animal.sex) {
    return species.find((b) => animal.specie === b.name)
      .residents.filter((d) => animal.sex === d.sex).length;
  }
  return species.find((a) => animal.specie === a.name).residents.length;
}

module.exports = countAnimals;
