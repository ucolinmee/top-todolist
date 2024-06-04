import { Task, Project } from "../classes";

export function initialRender() {
    const initialTasks = [
        new Task('Bring dog out for walk', '24/07/2024', 'low'),
        new Task('Do coding assignment', '30/05/2024', 'med'),
        new Task('Apply for full time job', '30/05/2024', 'high')
    ];
    const personalProject = new Project('Personal');

    personalProject.tasks.push(...initialTasks);

    loadTasks(personalProject);
}

export function renderTasks(project) {
    const taskDiv = document.querySelector('.task-list');
    taskDiv.innerHTML = "";

    project.tasks.forEach((task) => {
        taskDiv.appendChild(task.buildTaskHtml());
    })
}