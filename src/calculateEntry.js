const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const menores = entrants.filter((menor) => menor.age < 18);
  const maiores = entrants.filter((maior) => maior.age >= 18 && maior.age < 50);
  const idosos = entrants.filter((idoso) => idoso.age >= 50);
  const contagem = { child: menores.length, adult: maiores.length, senior: idosos.length };
  return contagem;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) { return 0; }
  const adultos = (countEntrants(entrants).adult * prices.adult);
  const criancas = (countEntrants(entrants).child * prices.child);
  const idosos = (countEntrants(entrants).senior * prices.senior);
  return adultos + criancas + idosos;
}

module.exports = { calculateEntry, countEntrants };

// teste
