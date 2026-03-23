const todos = [];

const renderTodoPage = (request, response) => {
    return response.status(200).render("todo", { todos });
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