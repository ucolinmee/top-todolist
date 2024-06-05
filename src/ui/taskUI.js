import { Element } from "../classes";
import { openTaskDialog } from "./dialog";

const tasksSection = document.getElementById('tasks');

export function renderTasks(project) {
    tasksSection.innerHTML = "";
    loadHeader(project.name);

    const taskDiv = document.querySelector('.task-list');
    taskDiv.innerHTML = "";

    project.tasks.forEach((task) => {
        taskDiv.appendChild(task.buildTaskHtml(project.name));
    })
}

function loadHeader(projectTitle) {
    const taskHeaderHtml = new Element('div').setAttributes({class: 'flex-row'});

    taskHeaderHtml
    .addChild(new Element('div')
        .addChild(new Element('h1').setTextContent('Tasks'))
        .addChild(new Element('p')
            .addChild(new Element('span').setTextContent('from '))
            .addChild(new Element('span').setTextContent(projectTitle).setAttributes({class: 'blue'}))
        )
    )
    .addChild(new Element('button')
    .setTextContent('Add New Task +')
    .setAttributes({class: 'add-btn add-task-btn'})
    .appendEventListener('click', openTaskDialog))

    tasksSection.appendChild(taskHeaderHtml.buildElement());
    tasksSection.appendChild(new Element('div').setAttributes({class: 'task-list'}).buildElement());
}

{/* <div class="flex-row">
    <div>
        <h1>Tasks</h1>
        <p>from <span class="blue">all projects</span></p>
    </div>
    <button class="add-btn add-task-btn">Add New Task +</button>
</div>

<div class="task-list"></div> */}