const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const verifica = (idOuNome) => {
  if (!employees
    .some(
      ({ firstName, lastName, id }) =>
        idOuNome.name === firstName || idOuNome.name === lastName || idOuNome.id === id,
    )) { throw new Error('Informações inválidas'); }
};
const achaFunc = (idOuNome) => {
  const { name } = idOuNome;
  const { id } = idOuNome;
  if (name) {
    return employees
      .filter(({ firstName, lastName }) => firstName === name || lastName === name);
  }
  if (id) {
    return employees
      .filter((element) => element.id === id);
  }
};

const achaAnimal = (responsibleFor) => responsibleFor
  .map((animal) => species.find((element) => element.id === animal));

const final = (idOuNome) => achaFunc(idOuNome).map((element) => ({
  id: element.id,
  fullName: `${element.firstName} ${element.lastName}`,
  species: achaAnimal(element.responsibleFor).map((animal) => `${animal.name}`),
  locations: achaAnimal(element.responsibleFor).map((animal) => `${animal.location}`),
}));

function getEmployeesCoverage(idOuNome) {
  if (idOuNome) { verifica(idOuNome); }
  if (!idOuNome) {
    const arrayFinal = [];
    employees.forEach((employee) => {
      const nomesTodos = final({ name: `${employee.firstName}` });
      arrayFinal.push(...nomesTodos);
    });
    return arrayFinal;
  }
  const retornoNormal = final(idOuNome).find((only) => only);
  return retornoNormal;
}

// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
module.exports = getEmployeesCoverage;

// function getEmployeesCoverage(idOuNome) {
//   const pegaAnimal = (id) => species.find((specie) => specie.id === id).name;
//   const pegaLocation = (id) => species.find((specie) => specie.id === id).location;
//   const empregadoNome = employees.find((element) => element.firstName);
//   const nomeCompleto = `${empregadoNome.firstName} ${empregadoNome.lastName}`;
//   const ident = empregadoNome.id;
//   const speciesID = empregadoNome.responsibleFor.map((element) => pegaAnimal(element));
//   const speciesLocation = empregadoNome.responsibleFor.map((element) => pegaLocation(element));
//   return { id: ident, fullName: nomeCompleto, species: speciesID, locations: speciesLocation };
// }

// const achaAnimal = (responsibleFor) => species
//   .filter((id) => responsibleFor
//     .filter((element) => element === id.id));
