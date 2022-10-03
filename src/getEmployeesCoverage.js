const data = require('../data/zoo_data');

function getSpecies(param) {
  const [employees] = data.employees.filter((a) => param === a.firstName
    || param === a.lastName || param === a.id).map((b) => b);
  const animals = data.species.filter((b) => employees.responsibleFor
    .find((c) => c === b.id)).map((d) => d.name);
  return animals;
}

function getPlace(param) {
  const [employees] = data.employees.filter((a) => param === a.firstName
    || param === a.lastName || param === a.id).map((b) => b);
  const place = data.species.filter((b) => employees.responsibleFor
    .find((c) => c === b.id)).map((d) => d.location);
  return place;
}

function undef() {
  const allIds = [];
  data.employees.forEach((element) => {
    allIds.push({
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: data.species.filter((b) => element.responsibleFor
        .find((c) => c === b.id)).map((d) => d.name),
      locations: data.species.filter((b) => element.responsibleFor
        .find((c) => c === b.id)).map((d) => d.location),
    });
  });
  return allIds;
}

const firstName = data.employees.map((a) => a.firstName);
const lastName = data.employees.map((a) => a.lastName);
const id = data.employees.map((a) => a.id);

function getEmployeesCoverage(obj) {
  if (obj === undefined) return undef();
  const [value] = Object.values(obj);
  if (!(firstName.includes(value) || lastName.includes(value) || id.includes(value))) {
    throw new Error('Informações inválidas');
  }
  const [employee] = data.employees.filter((a) => value === a.firstName
    || value === a.lastName || value === a.id)
    .map((element) => element);
  const result = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(value),
    locations: getPlace(value),
  };
  return result;
}

module.exports = getEmployeesCoverage;
