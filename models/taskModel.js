const {sql, poolPromise} = require('../db');

async function getAllTasks() {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Tasks');
    return result.recordset;
}

async function createTask(task) {
    const pool = await poolPromise;
    const query = 'INSERT INTO Tasks (title, descriptionn, TaskCreatedAt, DueDate, Priorityy) VALUES (@title, @descriptionn, @TaskCreatedAt, @DueDate, @Priorityy)';
    const request = pool.request();
    request.input('title', sql.VarChar, task.title);
    request.input('descriptionn', sql.VarChar, task.descriptionn);
    request.input('TaskCreatedAt', sql.DateTime, task.TaskCreatedAt);
    request.input('DueDate', sql.DateTime, task.DueDate);
    request.input('Priorityy', sql.VarChar, task.Priorityy);
    await request.query(query);
}
module.exports = {getAllTasks, createTask};