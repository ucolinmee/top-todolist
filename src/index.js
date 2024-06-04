import './style.css';
import loadSidebar from './ui/sidebar.js';
import Dialog from './ui/dialog.js';
import { initialRender } from './ui/taskUI.js';

loadSidebar();
Dialog();
initialRender();
