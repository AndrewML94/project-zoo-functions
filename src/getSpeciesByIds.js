const data = require('../data/zoo_data');

function getSpeciesByIds(...id) {
  return data.species.filter((specie) => id.find((element) => element === specie.id))
    .map((animal) => animal);
}

module.exports = getSpeciesByIds;
