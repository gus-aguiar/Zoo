const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  if (animal === undefined) {
    const total = {};
    for (let index = 0; index < species.length; index += 1) {
      total.push(`${species.name} , ${species.residents.length}`);
    }
  }
}

module.exports = countAnimals;

console.log(countAnimals());
