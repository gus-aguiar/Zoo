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
  species.find((element) => element.name === specie);
}

module.exports = countAnimals;

console.log(countAnimals({ specie: 'penguins' }));

// function countAnimals(animal) {
//   const objeto = {};
//   if (animal === undefined) {
//     for (const index in species) {
//       objeto[species[index].name] = species[index].residents.length;
//     }
//     return objeto
//   }
// }
