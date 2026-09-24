const express = require('express');
const catalogController = require('../controllers/catalogController');

const router = express.Router();

router.get('/catalog', (req, res) => {
  res.render('home', { title: 'Beranda' });
});

router.get('/', catalogController.index);

module.exports = router;
