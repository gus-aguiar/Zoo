const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function getEmployeesCoverage(idOuNome) {
  const pegaAnimal = (id) => species.find((specie) => specie.id === id).name;
  const pegaLocation = (id) => species.find((specie) => specie.id === id).location;
  const empregadoNome = employees.find((element) => element.firstName === idOuNome.name);
  const nomeCompleto = `${empregadoNome.firstName} ${empregadoNome.lastName}`;
  const ident = empregadoNome.id;
  const speciesID = empregadoNome.responsibleFor.map((element) => pegaAnimal(element));
  const speciesLocation = empregadoNome.responsibleFor.map((element) => pegaLocation(element));
  if (Object.values(employees).includes(idOuNome.name)) {
    return { id: ident, fullName: nomeCompleto, species: speciesID, locations: speciesLocation };
  }
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
module.exports = getEmployeesCoverage;
