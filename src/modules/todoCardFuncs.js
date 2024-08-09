import { projectsArray } from "./projectManager";

const mainContent = document.querySelector('#content');
const expandedContent = document.querySelector('#expandedContent');

// Unified function to handle expansion of cards and nav items
export function expandContent(projectContainer) {
    mainContent.style.display = 'none';
    expandedContent.style.display = 'flex';
    expandedContent.classList.add('expandedCard');

    expandedContent.innerHTML = `
        <div class="expandedNavBtns">
            <i class="fa-solid fa-arrow-left backToContent"></i>
            <i class="fa-solid fa-pen-to-square editCurrentProject"></i>
            <i class="fa-solid fa-trash deleteCard"></i>
        </div>
        <h2>${projectContainer.dataset.projectName}</h2>
        <hr>
        <p>"${projectContainer.dataset.description}"</p>
        <div class="expandedPriorityLvlContainer">
            <span class="bold">${projectContainer.dataset.priorityLvl}</span> | <p>${projectContainer.dataset.dueDate}</p>
        </div>
    `;

    // Attach listeners for the back-to-content button
    attachBackToContent();

    // Attach delete listener to the delete button in the expanded view
    const deleteCardBtn = expandedContent.querySelector('.deleteCard');
    deleteCardBtn.addEventListener('click', function() {
        projectContainer.deleteCard();
    });
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

export function deleteCard(projectContainer) {
    console.log(projectContainer.dataset.projectIndex);
}

// Expand card from the project container
// export function expandCard(e) {
//     const projectContainer = e.target.closest('.projectContainer');
//     const expandedTodoTitle = projectContainer.querySelector('.todoName').textContent;
//     const expandedTodoDescription = projectContainer.querySelector('.todoDescription').textContent;
//     const expandedTodoDueDate = projectContainer.querySelector('.todoDueDate').textContent;
//     const expandedTodoPriority = projectContainer.querySelector('.priorityIcon i').getAttribute('data-tooltip');
//     const projectIndex = projectContainer.dataset.projectIndex;

//     expandContent(expandedTodoTitle, expandedTodoDescription, expandedTodoDueDate, expandedTodoPriority, projectIndex);
// }

// // Expand card from the nav bar
// export function expandCardFromNav(e) {
//     const navigateToProject = e.target.closest('.navigateToProject');
//     const expandedTodoTitle = navigateToProject.dataset.projectName;
//     const expandedTodoDescription = navigateToProject.dataset.description;
//     const expandedTodoDueDate = navigateToProject.dataset.dueDate;
//     const expandedTodoPriority = navigateToProject.dataset.priorityLvl;
//     const projectIndex = navigateToProject.dataset.projectIndex;

//     expandContent(expandedTodoTitle, expandedTodoDescription, expandedTodoDueDate, expandedTodoPriority, projectIndex);
// }


// export function deleteCardFromNav(projectIndex) {
//     console.log(projectIndex);
// }
