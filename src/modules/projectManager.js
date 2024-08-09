import addDataToContainer from "./uiUtils";
import { format, parseISO, addDays } from 'date-fns';

export const projectsArray = [];

export class MyProject {
    constructor (projectName, description, dueDate, priorityLvl) {
        this.projectName = projectName;
        this.description = description;
        this.dueDate = format(parseISO(dueDate), "d MMM yyyy, HH:mm");
        this.priorityLvl = priorityLvl;
    }
}

export default function addProject(projectName, description, dueDate, priorityLvl) {
    const project = new MyProject(projectName, description, dueDate, priorityLvl);
    projectsArray.push(project);
    const projectIndex = projectsArray.indexOf(project); // Grab the Index
    addDataToContainer(projectName, description, project.dueDate, priorityLvl, projectIndex);
}

