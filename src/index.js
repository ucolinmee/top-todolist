import './style.css';
import loadSidebar from './ui/sidebar.js';
import { renderTasks } from './ui/taskUI.js';
import { Task, Project, Librarian } from './classes.js';
import { openPreFilledTaskDialog } from './ui/dialog.js';


function init() {
    const initialTasks = [
        new Task('Bring dog out for walk', '2024-07-24', 'low'),
        new Task('Do coding assignment', '2024-05-30', 'med'),
        new Task('Apply for full time job', '2024-05-30', 'high')
    ];
    const initialProject = new Project('Personal');
    Librarian.addProject(initialProject);

    initialProject.tasks.push(...initialTasks);

    loadSidebar();
    renderTasks(initialProject);
}

export function deleteTaskHandler(e) {
    const taskId = e.target.parentNode.parentNode.id;
    const projectsArray = Librarian.getAllProjects();
    projectsArray.forEach((project) => {
        const targetTask = project.findTask(taskId);
        project.deleteTask(targetTask);
        loadSidebar();
        renderTasks(project);
        return;
    })
}

export function editTaskHandler(e) {
    const taskId = e.target.parentNode.parentNode.id;
    const projectsArray = Librarian.getAllProjects();
    projectsArray.every((project) => {
        const targetTask = project.findTask(taskId);
        if (targetTask !== undefined) {
            openPreFilledTaskDialog(targetTask);
            return false; // break out of loop
        }
        return true; // continue
    })
}

init();