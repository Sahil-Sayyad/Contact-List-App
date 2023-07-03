//import all required packages
const express = require('express');
const router = express.Router();

const contactController = require('../controller/contactController');

router.get('/', contactController.read);
router.post('/create', contactController.create);
router.get('/delete/:id', contactController.delete);
router.get('/edit/:id', contactController.edit);
router.post('/update/:id', contactController.update);

module.exports = router;