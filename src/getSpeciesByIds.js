const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) { return []; }
  return species.filter((element) => {
    if (ids.includes(element.id)) { return element; }
  });
}

module.exports = getSpeciesByIds;
