import addDataToContainer from "./uiUtils";
import { deleteCard, expandContent} from './expandedCardFuncs.js';
import { format, parseISO, addDays } from 'date-fns';

export const projectsArray = [];

export class MyProject {
    constructor(projectName, description, dueDate, priorityLvl) {
        this.projectName = projectName;
        this.description = description;
        this.dueDate = format(parseISO(dueDate), "d MMM yyyy, HH:mm");
        this.priorityLvl = priorityLvl;
        this.todos = []; // Array to store todos
        this.projectIndex = null; // Will be set when added to projectsArray

        // Methods to manage the project
        this.expandContent = () => expandContent(this);
        this.deleteCard = () => deleteCard(this);
        this.addTodo = (todoText) => {
            this.todos.push(todoText);
            this.expandContent(); 
        };
    }
}

export default function addProject(projectName, description, dueDate, priorityLvl) {
    const Project = new MyProject(projectName, description, dueDate, priorityLvl);
    projectsArray.push(Project);
    Project.projectIndex = projectsArray.indexOf(Project); // Grab the Index and attach directly to Project
    addDataToContainer(Project);
}

