const express = require('express');
const { getTasks, addTask } = require('../controllers/taskController');
const router = express.Router();

router.get('/tasks', getTasks);
router.post('/tasks', addTask);

module.exports = router;