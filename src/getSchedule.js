const data = require('../data/zoo_data');

const exibition = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

console.log(Object.keys(exibition));
console.log(exibition.Monday);

function getDay(param) {
  let days = '';
  [days] = data.species.filter((a) => param === a.name).map((b) => b.availability);
  return days;
}

function getSchedule(scheduleTarget) {
  const info = data.species.map((b) => b.name);
  if (Object.keys(exibition).includes(scheduleTarget)) {
    const day = {
      [scheduleTarget]: {
        officeHour: Object.values(exibition[scheduleTarget])[0],
        exhibition: Object.values(exibition[scheduleTarget])[1],
      },
    };
    return day;
  }
  if (!(info.includes(scheduleTarget))) {
    return exibition;
  }
  const result = getDay(scheduleTarget);
  return result;
}

module.exports = getSchedule;
