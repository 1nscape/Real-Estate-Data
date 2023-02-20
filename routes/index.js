const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('/views/pages/index.hbs', {title: 'Home Page'})
})

router.get('/findHouse', (req, res) => {
    res.render('/views/pages/findHouse.hbs', {title: 'Find House'})
})

router.get('/favorites', (req, res) => {
    res.render('/views/pages/favorites.hbs', {title: 'Favorites'})
})

module.exports = router;