const express = require('express');
const router = express.Router();

const Article = require('../models/article');

/**
 *
 *___ _____ _   ___ _____   _  _ ___ ___ ___
 / __|_   _/_\ | _ \_   _| | || | __| _ \ __|
 \__ \ | |/ _ \|   / | |   | __ | _||   / _|
 |___/ |_/_/ \_\_|_\ |_|   |_||_|___|_|_\___|
 *
 *
 */

router.get('/', async (req, res, next) => {
  try {
    const articles = await Article.findAll();
    res.send(articles);
  } catch (error) {
    next(error);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article) {
      res.send(article);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});
router.post('/', async (req, res, next) => {
  try {
    if (req.body.content !== undefined) {
      const newArticle = await Article.create(req.body);
      const toReturn = {
        message: 'Created successfully',
        article: newArticle,
      };
      res.json(toReturn);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const toUpdate = await Article.findById(id);
    if (toUpdate) {
      await toUpdate.update({ title: req.body.title });
      const toReturn = {
        message: 'Updated successfully',
        article: toUpdate,
      };
      res.status(200).send(toReturn);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
