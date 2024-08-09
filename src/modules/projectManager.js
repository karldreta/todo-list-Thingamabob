import addDataToContainer from "./uiUtils";
import { deleteCard, expandContent } from './todoCardFuncs.js';
import { format, parseISO, addDays } from 'date-fns';

const projectsArray = [];

export class MyProject {
    constructor (projectName, description, dueDate, priorityLvl) {
        this.projectName = projectName;
        this.description = description;
        this.dueDate = format(parseISO(dueDate), "d MMM yyyy, HH:mm");
        this.priorityLvl = priorityLvl;

        // Methods to do with the card
        this.expandContent = () => {expandContent(this);};
        this.deleteCard = () => {deleteCard(this);};
    }
}

export default function addProject(projectName, description, dueDate, priorityLvl) {
    const Project = new MyProject(projectName, description, dueDate, priorityLvl);
    projectsArray.push(Project);
    const projectIndex = projectsArray.indexOf(Project); // Grab the Index and attach directly to Project
    Project.projectIndex = projectIndex;
    addDataToContainer(Project);
}

