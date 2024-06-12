import './style.css';
import loadSidebar from './ui/sidebar.js';
import { renderTasks } from './ui/taskUI.js';
import { Task, Project, Librarian } from './classes.js';
import { openPreFilledTaskDialog } from './ui/dialog.js';
import { startOfToday, endOfToday, addDays, addYears } from 'date-fns';

function init() {
    const initialTasks = [
        new Task('Bring dog out for walk', startOfToday(), 'low', 'Personal'),
        new Task('Do coding assignment', startOfToday(), 'med', 'Personal'),
        new Task('Apply for full time job', addDays(startOfToday(), 7), 'high', 'Personal'),
        new Task('Buy coffin', addDays(startOfToday(), 20000), 'low', 'Personal'),
        new Task('Haircut', startOfToday(), 'low', 'Personal'),
        new Task('Pack bags for trip', startOfToday(), 'high', 'Personal')
    ];
    const initialProject = new Project('Personal');
    Librarian.addProject(initialProject);

    initialProject.tasks.push(...initialTasks);

    loadSidebar();
    renderTasks(initialProject.tasks, initialProject.name);
}

export function deleteTaskHandler(e) {
    const taskId = e.target.parentNode.parentNode.id;
    const projectsArray = Librarian.getAllProjects();
    projectsArray.every((project) => {
        const targetTask = project.findTask(taskId);
        if (targetTask !== undefined) {
            project.deleteTask(targetTask);
            loadSidebar();
            renderTasks(project.tasks, project.name);
            return false; // break out of loop
        }
        return true; // continue
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

export function filterHandler(type) {
    const tasksArray = [];
    let interval = {};

    if (type === 'All') {
        Librarian.projects.forEach((project) => tasksArray.push(...project.tasks));
        renderTasks(tasksArray, 'All');
        return;
    } 
    else {
        if (type === 'Today') {
            interval = {
                start: startOfToday(),
                end: endOfToday()
            }
        } 
        else if (type === 'Next 7 Days') {
            interval = {
                start: startOfToday(),
                end: addDays(endOfToday(), 7)
            }
        } 

        Librarian.projects.forEach((project) => {
            tasksArray.push(...project.filterTasks(interval))
        });
    
        renderTasks(tasksArray, type);
    } 
}

init();