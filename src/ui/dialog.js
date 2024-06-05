import { Project, Task, Librarian, Element } from "../classes";
import loadSidebar from "./sidebar";
import { renderTasks } from "./taskUI";

buildProjectDialogHtml();
buildTaskDialogHtml();

const projectModal = document.getElementById('project-dialog');
const projectText = document.querySelector('.project-dialog-text');

const taskModal = document.getElementById('task-dialog');
const taskName = document.getElementById('form-title');
const taskDate = document.getElementById('form-date');
const taskPriority = document.getElementById('form-priority');
const taskAssignedProject = document.getElementById('form-project');

export function openProjectDialog() {
    projectModal.showModal();
}

function closeProjectDialog() {
    projectText.value = "";
    projectModal.close();
}

function submitProjectDialog() {
    Librarian.addProject(new Project(projectText.value));
    loadSidebar();
    closeProjectDialog();
}

function buildProjectDialogHtml() {
    const projectDialogHtml = new Element('dialog').setAttributes({id: 'project-dialog', class: 'modal'});

    projectDialogHtml
    .addChild(new Element('h1').setTextContent('New Project'))
    .addChild(new Element('input').setAttributes({placeholder: 'Project name', class: 'project-dialog-text'}))
    .addChild(new Element('div').setAttributes({class: 'dialog-btns'})
        .addChild(new Element('button').setTextContent('Cancel').setAttributes({id: 'cancel-btn'}).appendEventListener('click', closeProjectDialog))
        .addChild(new Element('button').setTextContent('Create').setAttributes({id: 'create-btn'}).appendEventListener('click', submitProjectDialog))
    );

    document.body.appendChild(projectDialogHtml.buildElement());
}

export function openTaskDialog() {
    taskModal.showModal();
}

function closeTaskDialog() {
    taskName.value = "";
    taskDate.value = "";
    taskPriority.selectedIndex = 0;
    taskAssignedProject.selectedIndex = 0;
    taskModal.close();
}

function submitTaskDialog() {
    // Create new task with form values
    const newTask = new Task(taskName.value, taskDate.value, taskPriority.value);

    // Find the selected project and put new task in that project's array
    const currProj = Librarian.projects.find((project) => project.name.toLowerCase() === taskAssignedProject.value.toLowerCase());
    currProj.addTask(newTask);

    renderTasks(currProj);
    loadSidebar();
    closeTaskDialog();
}

function buildTaskDialogHtml() {
    const taskDialogHtml = new Element('dialog').setAttributes({id: 'task-dialog', class: 'modal'});

    taskDialogHtml
    .addChild(new Element('h1').setTextContent('New Todo'))
    .addChild(new Element('form')
        .addChild(new Element('div')
            .addChild(new Element('label').setTextContent('Task Name').setAttributes({for: 'form-title'}))
            .addChild(new Element('input').setAttributes({type: 'text', name: 'form-title', id: 'form-title'}))
        )
        .addChild(new Element('div')
            .addChild(new Element('label').setTextContent('Due Date').setAttributes({for: 'form-date'}))
            .addChild(new Element('input').setAttributes({type: 'date', name: 'form-date', id: 'form-date'}))
        )
        .addChild(new Element('div')
            .addChild(new Element('label').setTextContent('Priority').setAttributes({for: 'form-priority'}))
            .addChild(new Element('select').setAttributes({name: 'form-priority', id: 'form-priority'})
                .addChild(new Element('option').setTextContent('Low').setAttributes({value: 'low'}))
                .addChild(new Element('option').setTextContent('Medium').setAttributes({value: 'med'}))
                .addChild(new Element('option').setTextContent('High').setAttributes({value: 'high'}))
            )
        )
        .addChild(new Element('div')
            .addChild(new Element('label').setTextContent('Add to Project').setAttributes({for: 'form-project'}))
            .addChild(new Element('select').setAttributes({name: 'form-project', id: 'form-project'})
                .addChild(new Element('option').setTextContent('Personal').setAttributes({value: 'personal'}))
            )
        )
        .addChild(new Element('div')
            .addChild(new Element('input').setAttributes({type: 'button', value: 'Cancel'}).appendEventListener('click', closeTaskDialog))
            .addChild(new Element('input').setAttributes({type: 'button', value: 'Submit'}).appendEventListener('click', submitTaskDialog))
        )
    );

    document.body.appendChild(taskDialogHtml.buildElement());

}

{/* <dialog id="project-dialog" class="modal">
    <h1>New Project</h1>
    <input type="text" placeholder="Project name" class="project-dialog-text">
    <div class="dialog-btns">
        <button id="cancel-btn">Cancel</button>
        <button id="create-btn">Create</button>
    </div>
</dialog>

<dialog id="task-dialog" class="modal">
    <h1>New Todo</h1>
    <form>
        <div>
            <label for="title">Task Name</label>
            <input type="text" name="title" id="title">
        </div>
        <div>
            <label for="date">Due Date</label>
            <input type="date" name="date" id="date">
        </div>
        <div>
            <label for="priority">Priority</label>
            <select name="priority" id="priority">
                <option value="low">Low</option>
                <option value="med">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
        <div>
            <label for="project">Add to Project</label>
            <select name="project" id="project">
                <option value="personal">Personal</option>
            </select>
        </div>
        <div>
            <input type="button" value="Cancel">
            <input type="button" value="Submit">
        </div>
    </form>
</dialog>  */}