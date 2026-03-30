const todos = [];

const renderTodoPage = (request, response) => {
    try {
        const err = new Error("Not implemented");
        err.statusCode = 432;
        throw err;
    } catch (e) {
        throw new Error(e);
    }
}

const createTask = (req, res) => {
    const { task } = req.body;
    const obj = {
        id: crypto.randomUUID(),
        task,
        is_completed: false,
        created_at: new Date(),
        updated_at: new Date()
    }
    todos.unshift(obj);
    return res.status(201).send({...todos, refresh: true});
}

export default { createTask, renderTodoPage }