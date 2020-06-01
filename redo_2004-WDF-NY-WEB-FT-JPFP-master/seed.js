const { green, red } = require('chalk');
const { db, Project, Robot } = require('./server/db');

const robots = [
  {
    name: 'Gas-RX',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',

    fuelType: 'gas',
    fuelLevel: 78,
  },
  {
    name: 'Electric-Tmobile',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',

    fuelType: 'electric',
    fuelLevel: 100,
  },
  {
    name: 'Diesel Wally-max',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',

    fuelType: 'diesel',
    fuelLevel: 98,
  },
  {
    name: 'Gas-RX',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',

    fuelType: 'gas',
    fuelLevel: 78,
  },
  {
    name: 'Electric-Tmobile',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',

    fuelType: 'electric',
    fuelLevel: 100,
  },
  {
    name: 'Diesel Wally-max',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',

    fuelType: 'diesel',
    fuelLevel: 98,
  },
];
const projects = [
  {
    title: 'Attend music Hackathon',
    deadline: new Date(Date.now() + 60 * (60 * 1000)).toString(),
    priority: 7,
    completed: true,
    description: 'Must be completed in person',
  },
  {
    title: 'Google Jam',
    deadline: new Date(Date.now() + 60 * (60 * 1000)).toString(),
    priority: 10,
    completed: false,
    description: 'Must be completed in person',
  },
  {
    title: 'Facebook meeting with Song',
    deadline: new Date(Date.now() + 60 * (60 * 1000)).toString(),
    priority: 1,
    completed: false,
    description: 'Must in NYC office',
  },
  {
    title: 'Finish Fullstack Project',
    deadline: new Date(Date.now() + 60 * (60 * 1000)).toString(),
    priority: 10,
    completed: false,
    description: 'Must be completed on time!!',
  },
  {
    title: 'Attend music Hackathon',
    deadline: new Date(Date.now() + 60 * (60 * 1000)).toString(),
    priority: 7,
    completed: true,
    description: 'Must be completed in person',
  },
  {
    title: 'Google Jam',
    deadline: new Date(Date.now() + 60 * (60 * 1000)).toString(),
    priority: 10,
    completed: false,
    description: 'Must be completed in person',
  },
  {
    title: 'Facebook meeting with Song',
    deadline: new Date(Date.now() + 60 * (60 * 1000)).toString(),
    priority: 1,
    completed: false,
    description: 'Must in NYC office',
  },
  {
    title: 'Finish Fullstack Project',
    deadline: new Date(Date.now() + 60 * (60 * 1000)).toString(),
    priority: 10,
    completed: false,
    description: 'Must be completed on time!!',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    const robotInstances = await Promise.all(
      robots.map((robot) => Robot.create(robot))
    );
    const projectInstance = await Promise.all(
      projects.map((project) => Project.create(project))
    );

    // await robotsInstance.map(robotIst => robotIst.setProjects) [0].setProjects(
    //   projectsInstance[0]
    // );

    for (let i = 0; i < robotInstances.length; i++) {
      robotInstances[i].setProjects(projectInstance[i]);
    }

    // seed your database here!
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      // db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
