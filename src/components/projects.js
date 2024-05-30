const Project = (name) => {
    return {
        name: name,
        tasks: [],
        addTaskToProject: function(task) {
            this.tasks.push(task);
        }
    }
}

export default Project;