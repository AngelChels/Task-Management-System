const taskModel = require('../models/taskModel');

async function getTasks(req, res) {
    try {
        const tasks = await taskModel.getAllTasks();
        res.status(200).json(tasks);
    } catch(error){
        res.status(500).json({message: 'Error fetching tasks'});
    }
    
}

async function addTask(req, res) {
    try {
        await taskModel.createTask(req.body);
        res.status(201).json({message: 'Task created'});
    } catch (error) {
        res.status(500).json({message: 'Error creating Task'});
    }
}
module.exports = {getTasks, addTask};