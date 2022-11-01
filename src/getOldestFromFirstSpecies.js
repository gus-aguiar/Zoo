const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const animalID = employees.find((employee) => id === employee.id).responsibleFor[0];
  const animais = species.find((specie) => specie.id === animalID).residents;
  animais.sort((a, b) => b.age - a.age);
  return Object.values(animais[0]);
}

module.exports = getOldestFromFirstSpecies;
