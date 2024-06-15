import { Project, Librarian, Element } from "../../classes";
import loadSidebar from "../sidebar";
import { renderTasks } from "../taskUI";

buildProjectDialogHtml();

const projectModal = document.getElementById('project-dialog');
const projectText = document.querySelector('.project-dialog-text');

export function openProjectDialog() {
    projectModal.showModal();
}

function closeProjectDialog() {
    projectText.value = "";
    projectModal.close();
}

function submitProjectDialog() {
    const newProj = new Project(projectText.value);
    Librarian.addProject(newProj);

    loadSidebar();
    renderTasks(newProj.tasks, newProj.name);
    closeProjectDialog();
}

function buildProjectDialogHtml() {
    const projectDialogHtml = new Element('dialog').setAttributes({id: 'project-dialog', class: 'modal'});

    projectDialogHtml
    .addChild(new Element('h1').setTextContent('New Project'))
    .addChild(new Element('input').setAttributes({placeholder: 'Project name', class: 'project-dialog-text'}))
    .addChild(new Element('div').setAttributes({class: 'dialog-btns'})
        .addChild(new Element('button').setTextContent('Cancel').setAttributes({id: 'cancel-btn', class: 'dialog-button cancel'}).appendEventListener('click', closeProjectDialog))
        .addChild(new Element('button').setTextContent('Create').setAttributes({id: 'create-btn', class: 'dialog-button create'}).appendEventListener('click', submitProjectDialog))
    );

    document.body.appendChild(projectDialogHtml.buildElement());
}