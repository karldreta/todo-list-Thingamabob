import './style.css';
import addNewProject from './modules/projectForm.js';
import { sortByPriority, sortByDueDate } from './modules/forSorting.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#newProjectBtn').addEventListener('click', addNewProject);
});
