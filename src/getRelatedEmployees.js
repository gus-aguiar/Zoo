const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const gerenciadas = [];
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  if (isManager(managerId) === true) {
    const nomeSobre = [];
    employees.forEach((element) => {
      if (element.managers.includes(managerId)) {
        nomeSobre.push(`${element.firstName} ${element.lastName}`);
      }
    });
    return nomeSobre;
  }
}

module.exports = { isManager, getRelatedEmployees };
