import newProject, {projectsArray} from './projects.js';

const newProjectBtn = document.querySelector('#newProjectBtn');
newProjectBtn.addEventListener('click', addNewProject);
const projectInputDialog = document.querySelector('#projectInputDialog');

export default function addNewProject () {
    projectInputDialog.showModal();
}


const projectForm = document.querySelector('#projectForm');
projectForm.addEventListener('submit', e => {
  e.preventDefault()
    
    const projectName = document.querySelector('#projectName').value;
    const projectDescription = document.querySelector('#projectDescription').value;
    const projectDueDate = document.querySelector('#projectDueDate').value;
    const projectPriority = document.querySelectorAll('input[name="projectPriority"]');
    let priorityLvl = '';
    for (const radio of projectPriority) {
        if (radio.checked) {
            priorityLvl = radio.value;
            break;
        }
    }
    projectInputDialog.close()
    console.log({ProjectName: projectName, projectDescription:projectDescription, projectDueDate: projectDueDate, projectPriority: priorityLvl});
    console.log(projectsArray);

    newProject(projectName, projectDescription, projectDueDate, priorityLvl);


    return {ProjectName: projectName, projectDescription:projectDescription,  projectDueDate: projectDueDate, projectPriority: priorityLvl};
  });

  document.querySelector('#cancelForm').addEventListener('click', e => {
    e.preventDefault();
    projectForm.reset();
    projectInputDialog.close();
  });


  projectInputDialog.addEventListener("click", e => {
        const dialogDimensions = projectInputDialog.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          projectInputDialog.close();
        }
      });