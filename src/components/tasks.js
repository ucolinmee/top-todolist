const createTask = (title, dueDate, priority) => {
    return {
        title: title,
        dueDate: dueDate,
        priority: priority,
        completed: false
    }
}

export default createTask;