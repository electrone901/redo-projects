const router = require('express').Router();

const Robot = require('../db/robot');
const Project = require('../db/project');

router.get('/', async (req, res, next) => {
  try {
    const robots = await Robot.findAll({
      include: [{ model: Project }],
    });
    res.json(robots);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id, {
      include: [{ model: Project }],
    });
    res.json(robot);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
