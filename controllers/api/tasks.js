const Task = require('../../models/task');

module.exports = {
    index,
    create,
    show,
    update,
    deleteOne,
}

async function index(req, res) {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
}

async function create(req, res) {
    const task = await Task.create(req.body);
    res.status(201).json(task);
}

async function show(req, res) {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
}

async function update(req, res) {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedTask);
}

async function deleteOne(req, res) {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTask);
}