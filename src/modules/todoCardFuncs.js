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