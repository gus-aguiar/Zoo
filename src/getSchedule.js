const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animaisEmExibicao = (day) =>
  species.filter((specie) => specie.availability.includes(day)).map((animal) => animal.name);

const daysDaSemana = () => Object.assign(
  {},
  ...Object.keys(hours).map((dia) => {
    const { open, close } = hours[dia];
    return {
      [dia]: {
        officeHour: dia !== 'Monday' ? `Open from ${open}am until ${close}pm` : 'CLOSED',
        exhibition: dia !== 'Monday' ? animaisEmExibicao(dia) : 'The zoo will be closed!',
      },
    };
  }),
);
function getSchedule(scheduleTarget) {
  const verificaEspecie = species.some((obj) => Object.values(obj).includes(scheduleTarget));
  const resultado = daysDaSemana();
  const dias = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday'];

  if (!scheduleTarget) return resultado;

  if (verificaEspecie) {
    return species.find((element) => element.name === scheduleTarget).availability;
  }

  if (dias.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: resultado[scheduleTarget],
    };
  }
  return resultado;
}

module.exports = getSchedule;

console.log(daysDaSemana());
