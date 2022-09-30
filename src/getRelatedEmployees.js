const data = require('../data/zoo_data');

function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const managers = [stephanieId, olaId, burlId];
  return managers.some((manager) => id === manager);
}

function getRelatedEmployees(managerId) {
  const error = isManager(managerId);
  if (error !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const result = [];
  data.employees.forEach((name) => name.managers.filter((people) =>
    (people === managerId ? result.push(`${name.firstName} ${name.lastName}`) : '')));
  return result;
}

module.exports = { isManager, getRelatedEmployees };
