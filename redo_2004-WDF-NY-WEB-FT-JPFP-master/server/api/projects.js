const Project = require('../db/project');
const Robot = require('../db/robot');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  console.log('Project ARE YOU ', Object.keys(Project.prototype));
  console.log('Robot', Object.keys(Robot.prototype));
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
