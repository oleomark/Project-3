const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/api/tasks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', tasksCtrl.index);
router.get('/:id', tasksCtrl.show);
router.post('/', ensureLoggedIn, tasksCtrl.create);
router.put('/:id', ensureLoggedIn, tasksCtrl.update);
router.delete('/:id', ensureLoggedIn, tasksCtrl.deleteOne);

module.exports = router;