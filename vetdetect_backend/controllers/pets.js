const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:username', this.show);

    return router;
  },
  index(req, res) {
    models.Pet.findAll({
    }).then((allPets) => {
      res.render('pets', { allPets });
    });
  },
  show(req, res) {
    models.Pet.findOne({
      where: {
        username: req.params.username,
      },
      include: [{
        model: models.Post,
      }],
    }).then((pet) => {
      if(pet) {
        res.render('pets/single', { pet: pet, allPosts: pet.posts });
      } else {
        res.redirect('/pets');
      }
    }).catch(() => {
      res.redirect('/pets');
    });
  },
};
