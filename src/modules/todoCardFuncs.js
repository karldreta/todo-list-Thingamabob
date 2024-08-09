const mainContent = document.querySelector('#content');
const expandedContent = document.querySelector('#expandedContent');

// Unified function to handle expansion of cards and nav items
export function expandContent(Project) {
    mainContent.style.display = 'none';
    expandedContent.style.display = 'flex';
    expandedContent.classList.add('expandedCard');

    expandedContent.innerHTML = `
        <div class="expandedNavBtns">
            <i class="fa-solid fa-arrow-left backToContent"></i>
            <i class="fa-solid fa-pen-to-square editCurrentProject"></i>
            <i class="fa-solid fa-trash deleteCard"></i>
        </div>
        <h2>${Project.projectName}</h2>
        <hr>
        <p>"${Project.description}"</p>
        <div class="expandedPriorityLvlContainer">
            <span class="bold">${Project.priorityLvl}</span> | <p>${Project.dueDate}</p>
        </div>
    `;

    // Attach listeners for the back-to-content button
    attachBackToContent();

    // Attach delete listener to the delete button in the expanded view
    const deleteCardBtn = expandedContent.querySelector('.deleteCard');
    deleteCardBtn.addEventListener('click', function() {
        Project.deleteCard();
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

export function deleteCard(Project) {
    console.log(Project.projectIndex);
}