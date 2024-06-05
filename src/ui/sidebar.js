import bullseyeImg from '../assets/images/bullseye.svg';
import calendar7Img from '../assets/images/calendar7.svg';
import documentsImg from '../assets/images/documents.svg';
import { Element, Librarian } from '../classes';

const sidebar = document.getElementById('sidebar');

function loadSidebar() {
    sidebar.innerHTML = "";

    const todoHeader = new Element('h1');

    todoHeader
    .addChild(new Element('span').setTextContent('ToDo').setAttributes({class: 'blue'}))
    .addChild(new Element('span').setTextContent(' App'))

    sidebar.appendChild(todoHeader.buildElement());

    loadViewMenu();
    loadProjectsMenu();
}

function loadViewMenu() {
    const ViewMenuHtml = new Element('div');

    ViewMenuHtml.setAttributes({class: 'view-menu'})

    ViewMenuHtml
    .addChild(new Element('div').setAttributes({class: 'view-item'})
        .addChild(new Element('img').setAttributes({class: 'icon', src: bullseyeImg}))
        .addChild(new Element('p').setTextContent('Today'))
        .addChild(new Element('div').setTextContent('7').setAttributes({class: 'num-tasks'})))
    .addChild(new Element('div').setAttributes({class: 'view-item'})
        .addChild(new Element('img').setAttributes({class: 'icon', src: calendar7Img}))
        .addChild(new Element('p').setTextContent('Next 7 days'))
        .addChild(new Element('div').setTextContent('10').setAttributes({class: 'num-tasks'})))
    .addChild(new Element('div').setAttributes({class: 'view-item'})
        .addChild(new Element('img').setAttributes({class: 'icon', src: documentsImg}))
        .addChild(new Element('p').setTextContent('All my tasks'))
        .addChild(new Element('div').setTextContent('14').setAttributes({class: 'num-tasks'})))

    sidebar.appendChild(ViewMenuHtml.buildElement());
}

function loadProjectsMenu() {
    const ProjectsMenuHtml = new Element('div').setAttributes({class: 'projects-menu'});

    ProjectsMenuHtml
    .addChild(new Element('div').setAttributes({class: 'flex-row'})
        .addChild(new Element('h2').setTextContent('My Projects'))
        .addChild(new Element('button').setTextContent('+').setAttributes({class: 'add-btn add-project-btn'})));

    const ProjectsListHtml = new Element('div').setAttributes({class: 'projects'});

    Librarian.getAllProjects().forEach((project) => {
        ProjectsListHtml.addChild(loadProject(project));
    })

    ProjectsMenuHtml.addChild(ProjectsListHtml);

    sidebar.appendChild(ProjectsMenuHtml.buildElement());
}

function loadProject(project) {
    const projectHtml = new Element('div');

    projectHtml.setAttributes({class: 'view-item'});

    projectHtml
    .addChild(new Element('p').setTextContent(project.name))
    .addChild(new Element('div').setTextContent(project.tasks.length).setAttributes({class: 'num-tasks'}))

    return projectHtml;
}


export default loadSidebar;



{/* <div class="view-menu">
    <div class="view-item">
        <img class="icon" src="">
        <p>Today</p>
        <div class="num-tasks">7</div>
    </div>
    <div class="view-item">
        <img class="icon" src="">
        <p>Next 7 days</p>
        <div class="num-tasks">10</div>
    </div>
    <div class="view-item">
        <img class="icon" src="">
        <p>All my tasks</p>
        <div class="num-tasks">14</div>
    </div> 
</div> */}


{/* <div class="projects-menu">
    <div class="flex-row">
        <h2>My Projects</h2>
        <button class="add-btn add-project-btn">+</button>
    </div>
    <div class="projects">
        <div class="view-item">
            <p>Personal</p>
            <div class="num-tasks">36</div>
        </div>
    </div>
</div> */}