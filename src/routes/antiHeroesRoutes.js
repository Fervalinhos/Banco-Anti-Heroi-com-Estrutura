const express = require('express');
const router = express.Router();
const antiHeroesController = require('../controllers/antiHeroesController');

router.get('/', antiHeroesController.getAllAnti_Heroes);
router.get('/:id', antiHeroesController.getAnti_HeroById);
router.get('/name/:name', antiHeroesController.getAnti_HeroByName);
router.post('/', antiHeroesController.postAnti_Hero);
router.put('/:id', antiHeroesController.putAnti_Hero);
router.delete('/:id', antiHeroesController.deleteAnti_Hero);

module.exports = router;