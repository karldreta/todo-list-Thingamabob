export default function addDataToContainer(Project) {
    const projectContainer = document.createElement('div');
    projectContainer.dataset.projectIndex = Project.projectIndex;
    projectContainer.classList.add('projectContainer');
    const mainContent = document.querySelector('#content');
       // Add priority levels as Icons
       let priorityIcon = '';
       switch (Project.priorityLvl) {
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
           <p class="todoName">${Project.projectName}</p>
           <div class="todoDetails">
               <p class="todoDescription">"${Project.description}"</p>
               <p class="todoDueDate"><span>Due Date:</span> ${Project.dueDate}</p>
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
       addProjectToNav(Project);


       // Event Listeners to call the methods
       const expandCardBtn = projectContainer.querySelector('.expandCard');
       expandCardBtn.addEventListener('click', function() {
            Project.expandContent();
       });

       const deleteCardBtn = projectContainer.querySelector('.deleteCard');
       deleteCardBtn.addEventListener('click', function() {
            Project.deleteCard();
       });
}

export function addProjectToNav(Project) {
    const navProjects = document.querySelector('#navProjects');
    const navigateToProject = document.createElement('div');
    navigateToProject.classList.add('navigateToProject');
    navigateToProject.dataset.projectIndex = Project.projectIndex;
    navigateToProject.innerHTML = `<h3>${Project.projectName}</h3>`;
    navProjects.appendChild(navigateToProject);
    navigateToProject.addEventListener('click', function() {
        Project.expandContent();
    });
}