import './style.css';
import loadSidebar from './ui/sidebar.js';
import { renderTasks } from './ui/taskUI.js';
import { renderNotes } from './ui/notesUI.js';
import { Task, Project, Librarian, Note } from './classes.js';
import { openPreFilledTaskDialog } from './ui/dialogs/taskDialog.js';
import { startOfToday, endOfToday, addDays } from 'date-fns';

function init() {
    const initialTasks = [
        new Task('Bring dog out for walk', startOfToday(), 0, 'Personal'),
        new Task('Do coding assignment', startOfToday(), 1, 'Personal'),
        new Task('Apply for full time job', addDays(startOfToday(), 7), 2, 'Personal'),
        new Task('Buy coffin', addDays(startOfToday(), 20000), 0, 'Personal'),
        new Task('Haircut', startOfToday(), 0, 'Personal'),
        new Task('Pack bags for trip', startOfToday(), 2, 'Personal')
    ];

    const initialNotes = [
        new Note("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
    ]

    const initialProject = new Project('Personal');
    Librarian.addProject(initialProject);
    initialProject.tasks.push(...initialTasks);
    initialProject.sortTasks();

    Librarian.notes.push(...initialNotes);

    loadSidebar();

    renderTasks(initialProject.tasks, initialProject.name);
    renderNotes();
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
    const tempProject = new Project('Temp');
    let interval = {};

    if (type === 'All') {
        Librarian.projects.forEach((project) => tempProject.tasks.push(...project.tasks));
        tempProject.sortTasks();
        renderTasks(tempProject.tasks, 'All');
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
            tempProject.tasks.push(...project.filterTasks(interval))
        });
        
        tempProject.sortTasks();
        renderTasks(tempProject.tasks, type);
    } 
}

init();