const Task = (title, description, dueDate, priority) => {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        completed: false
    }
}

export default Task;