import { projectsArray } from "./projectManager";

const mainContent = document.querySelector('#content');
const expandedContent = document.querySelector('#expandedContent');

// Unified function to handle expansion of cards and nav items
function expandContent(expandedTodoTitle, expandedTodoDescription, expandedTodoDueDate, expandedTodoPriority, projectIndex) {
    mainContent.style.display = 'none';
    expandedContent.style.display = 'flex';
    expandedContent.classList.add('expandedCard');

    expandedContent.innerHTML = `
        <div class="expandedNavBtns">
            <i class="fa-solid fa-arrow-left backToContent"></i>
            <i class="fa-solid fa-pen-to-square editCurrentProject"></i>
            <i class="fa-solid fa-trash deleteCurrentProject"></i>
        </div>
        <h2>${expandedTodoTitle}</h2>
        <hr>
        <p>${expandedTodoDescription}</p>
        <div class="expandedPriorityLvlContainer">
            <span class="bold">${expandedTodoPriority}</span> | <p>${expandedTodoDueDate}</p>
        </div>
    `;

    // Attach listeners for the back-to-content button
    attachBackToContent();

    // Attach delete listener to the delete button in the expanded view
    const delFromProject = document.querySelectorAll('.deleteCurrentProject');
    delFromProject.forEach(icon => icon.addEventListener('click', () => deleteCardFromNav(projectIndex)));
}

// Function to attach back-to-content listeners, used to avoid duplication
function attachBackToContent() {
    const backToContentBtn = document.querySelectorAll('.backToContent');
    backToContentBtn.forEach(icon => icon.addEventListener('click', () => {
        expandedContent.style.display = 'none';
        mainContent.style.display = 'grid';
        expandedContent.classList.remove('expandedCard');
    }));
}

// Expand card from the project container
export function expandCard(e) {
    const projectContainer = e.target.closest('.projectContainer');
    const expandedTodoTitle = projectContainer.querySelector('.todoName').textContent;
    const expandedTodoDescription = projectContainer.querySelector('.todoDescription').textContent;
    const expandedTodoDueDate = projectContainer.querySelector('.todoDueDate').textContent;
    const expandedTodoPriority = projectContainer.querySelector('.priorityIcon i').getAttribute('data-tooltip');
    const projectIndex = projectContainer.dataset.projectIndex;

    expandContent(expandedTodoTitle, expandedTodoDescription, expandedTodoDueDate, expandedTodoPriority, projectIndex);
}

// Expand card from the nav bar
export function expandCardFromNav(e) {
    const navigateToProject = e.target.closest('.navigateToProject');
    const expandedTodoTitle = navigateToProject.dataset.projectName;
    const expandedTodoDescription = navigateToProject.dataset.description;
    const expandedTodoDueDate = navigateToProject.dataset.dueDate;
    const expandedTodoPriority = navigateToProject.dataset.priorityLvl;
    const projectIndex = navigateToProject.dataset.projectIndex;

    expandContent(expandedTodoTitle, expandedTodoDescription, expandedTodoDueDate, expandedTodoPriority, projectIndex);
}

export function deleteCard(e) {
    const projectContainer = e.target.closest('.projectContainer');
    const projectIndex = projectContainer.dataset.projectIndex;
    console.log(projectIndex);
    projectsArray.splice(projectIndex, 1);
    mainContent.removeChild(projectContainer);
}

export function deleteCardFromNav(projectIndex) {
    console.log(projectIndex);
}
