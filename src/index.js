import './style.css';
import loadSidebarImages from './ui/sidebar.js';
import Dialog from './ui/dialog.js';

loadSidebarImages();
Dialog();

import { Task } from './classes.js';
const test = new Task('Test', '01/01/2000', 'High');
console.log(test);
test.toggleComplete();
console.log(test);

