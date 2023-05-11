const router = require('express').Router();
const { Story, User } = require('../models');

router.get('/', async (req, res) => {
    try {
      const dbStoryData = await Story.findAll({
        include: [
          {
            model: Item,
            attributes: ['name', 'description'],
          },
        ],
      });
  
      const stories = dbStoryData.map((project) =>
        project.get({ plain: true })
      );
  
      res.render('homepage', {
        stories,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });