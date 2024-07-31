import './style.css';
import addNewProject from './modules/newProject.js';
import newProject, {projectsArray} from './modules/projects.js';

const projectForm = document.querySelector('#projectForm');
projectForm.addEventListener('submit', e => {
    e.preventDefault()
    
    const projectName = document.querySelector('#projectName').value;
    const projectDescription = document.querySelector('#projectDescription').value;
    const projectDueDate = document.querySelector('#projectDueDate').value;
    const projectPriority = document.querySelectorAll('input[name="projectPriority"]');
    let PriorityLvl = '';
    for (const radio of projectPriority) {
        if (radio.checked) {
            PriorityLvl = radio.value;
            break;
        }
    }
    
    console.log({ProjectName: projectName, projectDescription:projectDescription, projectDueDate: projectDueDate, projectPriority: PriorityLvl});
    console.log(projectsArray);

    newProject(projectName, projectDescription, projectDueDate, priorityLvl);
    return {ProjectName: projectName, projectDescription:projectDescription,  projectDueDate: projectDueDate, projectPriority: PriorityLvl};
});