const express = require('express');
const router = express.Router();
const antiHeroesController = require('../controllers/antiHeroesController.js');

router.get('/anti_heroes', antiHeroesController.getAllAnti_Heroes);
router.get('/anti_heroes/:id', antiHeroesController.getAnti_HeroById);
router.get('/anti_heroes/name/:name', antiHeroesController.getAnti_HeroByName);
router.post('/anti_heroes', antiHeroesController.postAnti_Hero);
router.put('/anti_heroes/:id', antiHeroesController.putAnti_Hero);
router.delete('/anti_heroes/:id', antiHeroesController.deleteAnti_Hero);

module.exports = router;