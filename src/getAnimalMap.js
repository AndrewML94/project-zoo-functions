const data = require('../data/zoo_data');

function animalList() {
  const result = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((a) => result[a.location].push(a.name));
  return result;
}

function includeNames(param) {
  const result = { NE: [], NW: [], SE: [], SW: [] };
  if (param.sorted) {
    data.species.forEach((a) => result[a.location]
      .push({ [a.name]: a.residents.map((b) => b.name).sort() }));
    return result;
  }
  data.species.forEach((a) => result[a.location]
    .push({ [a.name]: a.residents.map((b) => b.name) }));
  return result;
}

function sex(param) {
  const result = { NE: [], NW: [], SE: [], SW: [] };
  if (param.sorted) {
    data.species.forEach((a) => result[a.location].push({ [a.name]: a.residents
      .filter((b) => b.sex === param.sex).map((c) => c.name).sort() }));
    return result;
  }
  data.species.forEach((a) => result[a.location]
    .push({ [a.name]: a.residents.filter((b) => b.sex === param.sex).map((c) => c.name) }));
  return result;
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return animalList();
  }
  if (options.includeNames && !options.sex) {
    return includeNames(options);
  }
  return sex(options);
}

console.log(getAnimalMap({ includeNames: true, sex: 'male', sorted: true }));

module.exports = getAnimalMap;
