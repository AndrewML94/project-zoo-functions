const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const anything = {};
  if (employeeName === undefined) return anything;
  const [people] = data.employees.filter((firstName) => employeeName === firstName.firstName
    || employeeName === firstName.lastName).map((element) => element);
  return people;
}

console.log(getEmployeeByName('Bethea'));

module.exports = getEmployeeByName;
