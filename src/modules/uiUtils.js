import { deleteCard, expandContent } from './todoCardFuncs.js';


export default function addDataToContainer(projectName, description, dueDate, priorityLvl, projectIndex) {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    
    // Attach data attributes to the container
    projectContainer.dataset.projectName = projectName;
    projectContainer.dataset.description = description;
    projectContainer.dataset.dueDate = dueDate;
    projectContainer.dataset.priorityLvl = priorityLvl;
    projectContainer.dataset.projectIndex = projectIndex;

    // Methods to do with the card
    projectContainer.expandContent = function () {
        expandContent(this);
    };

    projectContainer.deleteCard = function () {
        deleteCard(this);
    };


    // Add the container to the main content and keep passing down the projectContainer for consistent handling
    addCardToContent(projectContainer);
}

function addCardToContent(projectContainer) {
    const mainContent = document.querySelector('#content');
       // Add priority levels as Icons
       let priorityIcon = '';
       switch (projectContainer.dataset.priorityLvl) {
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
           <p class="todoName">Todo: ${projectContainer.dataset.projectName}</p>
           <div class="todoDetails">
               <p class="todoDescription">"${projectContainer.dataset.description}"</p>
               <p class="todoDueDate"><span>Due Date:</span> ${projectContainer.dataset.dueDate}</p>
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
       mainContent.appendChild(projectContainer);
       addProjectToNav(projectContainer);


       // Event Listeners to call the methods
       const expandCardBtn = projectContainer.querySelector('.expandCard');
       expandCardBtn.addEventListener('click', function() {
           projectContainer.expandContent();
       });

       const deleteCardBtn = projectContainer.querySelector('.deleteCard');
       deleteCardBtn.addEventListener('click', function() {
           projectContainer.deleteCard();
       });
}

function addProjectToNav(projectContainer) {
    const navProjects = document.querySelector('#navProjects');
    const navigateToProject = document.createElement('div');
    navigateToProject.classList.add('navigateToProject');
    navigateToProject.innerHTML = `<h3>${projectContainer.dataset.projectName}</h3>`;
    navProjects.appendChild(navigateToProject);
    navigateToProject.addEventListener('click', function() {
        projectContainer.expandContent();
    });
    
}