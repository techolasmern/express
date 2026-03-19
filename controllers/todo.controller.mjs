const todo_list = [];

const createTodo = (request, response) => {
    const { title, description } = request.body;
    if (!title || !description) {
        return response.status(400).send({
            message: "Title and description are required"
        })
    }
    // validation -> using regex
    const taskObj = {
        id: crypto.randomUUID(),
        title, description,
        is_completed: false,
        created_at: new Date(),
        updated_at: new Date()
    }
    todo_list.push(taskObj);
    return response.status(201).send({
        message: "Todo created successfully",
        data: taskObj
    })
}

// read all todos, update a todo, delete a todo, read single todo, 

export default {
    createTodo
}