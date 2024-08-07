import { expandCard } from './todoCardFuncs.js';

const mainContent = document.querySelector('#content');

export default function addToContent(projectName, description, dueDate, priorityLvl) {
    const main = document.querySelector('#content');
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');

    // Add priority levels as Icons
    let priorityIcon = '';
    switch (priorityLvl) {
        case 'Urgent':
            priorityIcon = '<i class="fa-solid fa-bolt-lightning" data-tooltip="Urgent"></i>';
            break;
        case 'Important':
            priorityIcon = '<i class="fa-solid fa-fire" data-tooltip="Important"></i>';
            break;
        case 'Relaxed':
            priorityIcon = '<i class="fa-solid fa-leaf" data-tooltip="Relaxed"></i>';
            break;
    }

    projectContainer.innerHTML = `
        <p class="todoName">Todo: ${projectName}</p>
        <div class="todoDetails">
            <p class="todoDescription">"${description}"</p>
            <p class="todoDueDate"><span>Due Date:</span> ${dueDate}</p>
        </div>
        <div class="todoIcons">
            <div class="priorityIcon">
                ${priorityIcon}
            </div>
            <div class="todoClickables">
                <i class="fa-solid fa-expand expandCard"></i>
                <i class="fa-solid fa-trash deleteCard"></i>
            </div>
        </div>
    `

    const navProjects = document.querySelector('#navProjects');
    const navigateToProject = document.createElement('div');
    navigateToProject.classList.add('navigateToProject');
    navigateToProject.innerHTML = `<h3>${projectName}</h3>`;


    navProjects.appendChild(navigateToProject);
    main.appendChild(projectContainer);

    // For expanding each card
    const expandCardBtns = document.querySelectorAll('.expandCard');
    expandCardBtns.forEach(icon => icon.addEventListener('click', expandCard));
}