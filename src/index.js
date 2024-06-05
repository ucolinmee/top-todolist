import './style.css';
import loadSidebar from './ui/sidebar.js';
import { renderTasks } from './ui/taskUI.js';
import { Task, Project, Librarian } from './classes.js';


function init() {
    const initialTasks = [
        new Task('Bring dog out for walk', '24/07/2024', 'low'),
        new Task('Do coding assignment', '30/05/2024', 'med'),
        new Task('Apply for full time job', '30/05/2024', 'high')
    ];
    const initialProject = new Project('Personal');
    Librarian.addProject(initialProject);

    initialProject.tasks.push(...initialTasks);

    loadSidebar();
    renderTasks(initialProject);
}

init();