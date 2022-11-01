const data = require('../data/zoo_data');

const { species } = data
const { employees } = data;

function getEmployeesCoverage(idOuNome) {
  const empregadoNome = employees.find((element) => element.firstName === idOuNome.name);
  const nomeCompleto = `${empregadoNome.firstName} ${empregadoNome.lastName}`;
  const ident = empregadoNome.id;
  const speciesID = empregadoNome.responsibleFor
  const getSpecies = (...speciesID) => species.find((element) => element.id === speciesID)  
  return { id: ident, fullName: nomeCompleto, species: teste};
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));
module.exports = getEmployeesCoverage;

//======================parei, falta retomar====================================//