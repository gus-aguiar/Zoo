const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const objeto = {};
  if (animal === undefined) {
    species.forEach((element) => {
      objeto[element.name] = element.residents.length;
    });
    return objeto;
  }
  const { specie } = animal;
  if (animal.sex === undefined) {
    return species.find((element) => element.name === specie).residents.length;
  }
  if (animal.sex !== undefined) {
    return species.find((element) => element.name === specie).residents
      .filter((bixo) => bixo.sex === animal.sex).length;
  }
}

module.exports = countAnimals;
