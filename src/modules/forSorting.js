// This is the module for sorting the Projects
import { projectsArray } from "./projectManager";
import addDataToContainer from "./uiUtils";

const mainContent = document.querySelector('#content');


document.querySelector('#byPriority').addEventListener('click', sortByPriority)

export function sortByPriority() {
    // Create a Mapping Order
    const PRIORITY_ORDER = {
        "Urgent": 1,
        "Important": 2,
        "Relaxed": 3
    };

    projectsArray.sort((x, y) => {
        return PRIORITY_ORDER[x.priorityLvl] - PRIORITY_ORDER[y.priorityLvl];
    });

    updateMainContent();
}

document.querySelector('#byDueDate').addEventListener('click', sortByDueDate)

export function sortByDueDate() {
    projectsArray.sort((x, y) => {
        let a = new Date(x.dueDate),
        b = new Date(y.dueDate);
      return a - b;
    });

    updateMainContent();
}


function updateMainContent() {
    const navProjects = document.querySelector('#navProjects');
    mainContent.innerHTML = '';
    navProjects.innerHTML = '';

    for (const project of projectsArray) {
        addDataToContainer(project);
    }
}


