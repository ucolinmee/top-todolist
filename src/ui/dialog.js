import { Project, Librarian, Element } from "../classes";
import loadSidebar from "./sidebar";

createProjectDialog();
const projectModal = document.getElementById('project-dialog');
const dialogText = document.querySelector('.project-dialog-text');

export function openProjectDialog() {
    projectModal.showModal();
}

function closeProjectDialog() {
    dialogText.value = "";
    projectModal.close();
}

function submitProjectDialog() {
    Librarian.addProject(new Project(dialogText.value));
    loadSidebar();
    closeProjectDialog();
}

function createProjectDialog() {
    const projectDialogHtml = new Element('dialog').setAttributes({id: 'project-dialog', class: 'modal'})

    projectDialogHtml
    .addChild(new Element('h1').setTextContent('New Project'))
    .addChild(new Element('input').setAttributes({placeholder: 'Project name', class: 'project-dialog-text'}))
    .addChild(new Element('div').setAttributes({class: 'dialog-btns'})
        .addChild(new Element('button').setTextContent('Cancel').setAttributes({id: 'cancel-btn'}).appendEventListener('click', closeProjectDialog))
        .addChild(new Element('button').setTextContent('Create').setAttributes({id: 'create-btn'}).appendEventListener('click', submitProjectDialog))
    )

    document.body.appendChild(projectDialogHtml.buildElement());
}