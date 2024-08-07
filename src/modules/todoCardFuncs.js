// This is a module for: Expanding each card, Deleting the card

const mainContent = document.querySelector('#content');
const expandedContent = document.querySelector('#expandedContent');


export function expandCard(e) {
    mainContent.style.display = 'none';
    expandedContent.style.display = 'flex';
    expandedContent.classList.add('expandedCard');
    
    // Grab the Necessary variables
    const projectContainer = e.target.closest('.projectContainer');
    // console.log(projectContainer);
    
    const expandedTodoTitle = projectContainer.querySelector('.todoName').textContent;
    const expandedTodoDescription = projectContainer.querySelector('.todoDescription').textContent;
    const expandedTodoDueDate = projectContainer.querySelector('.todoDueDate').textContent;
    const expandedTodoPriority = projectContainer.querySelector('.priorityIcon i').getAttribute('data-tooltip');

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
    <span>${expandedTodoPriority}</span> | <p>${expandedTodoDueDate}</p>
    </div>
   `
   
   const backToContentBtn = document.querySelectorAll('.backToContent');
   backToContentBtn.forEach(icon => icon.addEventListener('click', () =>{
    expandedContent.style.display = 'none';
    mainContent.style.display = 'grid';
    expandedContent.classList.remove('expandedCard');
   }));
}

export function expandCardFromNav(e) {
    const navigateToProject = e.target.closest('.navigateToProject');
    const expandedTodoTitle = navigateToProject.dataset.projectName;
    const expandedTodoDescription = navigateToProject.dataset.description;
    const expandedTodoDueDate = navigateToProject.dataset.dueDate;
    const expandedTodoPriority = navigateToProject.dataset.priorityLvl;

    // Just do the same thing as above
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
    <span>${expandedTodoPriority}</span> | <p>${expandedTodoDueDate}</p>
    </div>
   `
   
   const backToContentBtn = document.querySelectorAll('.backToContent');
   backToContentBtn.forEach(icon => icon.addEventListener('click', () =>{
    expandedContent.style.display = 'none';
    mainContent.style.display = 'grid';
    expandedContent.classList.remove('expandedCard');
   }));
}