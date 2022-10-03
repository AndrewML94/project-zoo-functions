const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let boolean = '';
  return data.species.some((name) => {
    if (animal === name.name) boolean = name.residents.every((element) => element.age >= age);
    return boolean;
  });
}

module.exports = getAnimalsOlderThan;
