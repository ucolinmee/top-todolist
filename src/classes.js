import { format, compareAsc } from "date-fns";
import { editTaskHandler, deleteTaskHandler } from "./helpers/handlers";
import uniqid from 'uniqid';
import editUrl from './assets/images/edit-button.svg';
import trashUrl from './assets/images/trash.svg';

export class Task {
    constructor (title, dueDate, priority, completed=false) {
        this.id = uniqid();
        this.title = title;
        this.date = dueDate;
        this.priority = priority;
        this.completed = completed;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    updateTask(title, dueDate, priority) {
        this.title = title;
        this.date = dueDate;
        this.priority = priority;
    }

    buildTaskHtml() {
        const taskHtml = new Element('div');

        taskHtml.setAttributes({class: `task ${this.priority}`})

        taskHtml
        .addChild(new Element('h3').setTextContent(this.title))
        .addChild(new Element('div').setTextContent('PERSONAL').setAttributes({class: 'tagged-project'}))
        .addChild(new Element('div').setTextContent(this.date).setAttributes({class: 'date'}))
        .addChild(new Element('div').setAttributes({class: 'icons'})
            .addChild(new Element('img')
                .setAttributes({class: 'icon edit-task', src: editUrl})
                .appendEventListeners('click', editTaskHandler))
            .addChild(new Element('img')
                .setAttributes({class: 'icon delete-task', src: trashUrl})
                .appendEventListeners('click', deleteTaskHandler))
        )
        .addChild(new Element('input').setAttributes({type: 'checkbox'}))

        return taskHtml.buildElement();

        // <div class="task ${this.priority}">
        //     <h3>${this.title}</h3>
        //     <div class="tagged-project">PERSONAL</div>
        //     <div class="date">${this.date}</div>
        //     <div class="icons">
        //         <img class="icon edit-task" src="">
        //         <img class="icon delete-task" src="">
        //     </div>
        //     <input type="checkbox">
        // </div>
    }
}

export class Project {
    constructor (name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(task) {
        const index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }

    filterTasksByDate(date) {
        
    }
}

export class Note {
    constructor (title, date) {
        this.title = title;
        this.date = date;
        this.id = uniqid();
    }
}

export class Librarian {
    static projects = [];
    static notes = [];
};

export class Element {
    constructor (type) {
        this.elementType = type;
        this.attributes = {};
        this.children = [];
        this.eventListeners = {};
    }

    buildElement() {
        var element = document.createElement(this.elementType);

        // Assign attributes to element
        for (const att in this.attributes) {
            element.setAttribute(att, this.attributes[att]);
        }

        // Assign event listeners to element
        for (const ev in this.eventListeners) {
           this.eventListeners[ev].forEach((fn) => {
                element.addEventListener(ev, fn);
            })
        }

        // Assign children to element
        if (this.text === undefined) {
            for (const child of this.children) {
                element.appendChild(child.buildElement());
            }
        } else {
            const realText = document.createTextNode(this.text);
            element.appendChild(realText);
        }


        return element;
    }

    setAttributes(object) {
        Object.assign(this.attributes, object);
        return this;
    }

    addChild(element) {
        this.text = undefined;
        this.children.push(element);
        return this;
    }

    setTextContent(text) {
        this.children = [];
        this.text = text;
        return this;
    }

    appendEventListeners(event, callbackFn) {
        if (this.eventListeners[event]) {
            this.eventListeners[event].push(callbackFn);
        } else {
            this.eventListeners[event] = [callbackFn];
        }
        return this;
    }
}