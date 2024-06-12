import './style.css';
import loadSidebar from './ui/sidebar.js';
import { renderTasks } from './ui/taskUI.js';
import { Task, Project, Librarian } from './classes.js';
import { openPreFilledTaskDialog } from './ui/dialog.js';
import { startOfToday, endOfToday, addDays } from 'date-fns';

function init() {
    const initialTasks = [
        new Task('Bring dog out for walk', startOfToday(), 'low'),
        new Task('Do coding assignment', startOfToday(), 'med'),
        new Task('Apply for full time job', addDays(startOfToday(), 7), 'high'),
        new Task('Buy coffin', addDays(startOfToday(), 20000), 'low'),
        new Task('Haircut', startOfToday(), 'low'),
        new Task('Pack bags for trip', startOfToday(), 'high')
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

export function filterTodayHandler() {

}

export function filterNextWeekHandler() {

}

export function filterAllHandler() {

}

init();
console.log(Librarian.projects[0].filterTasks({start: startOfToday(), end: endOfToday()}));