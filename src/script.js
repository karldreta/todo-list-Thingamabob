import './style.css';
import addNewProject from './modules/projectForm.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#newProjectBtn').addEventListener('click', addNewProject);
});
