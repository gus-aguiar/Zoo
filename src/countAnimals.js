const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  if (animal === undefined) {
    const objeto = species.map(elem => (
      {
        `${elem.name}: ${elem.residents.lenght},`
        
      } 
    ));
  }
}

module.exports = countAnimals;

console.log(countAnimals());
