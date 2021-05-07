const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/api/tasks');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', tasksCtrl.index);
router.get('/:id', tasksCtrl.show);
router.post('/', tasksCtrl.create);
router.put('/:id', tasksCtrl.update);
router.delete('/:id', tasksCtrl.deleteOne);

module.exports = router;