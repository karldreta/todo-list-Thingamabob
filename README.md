# Todo-List-Thingamabob
*The Thingamabob that does the job!*


### This is an Odin Project: [Todo List](https://www.theodinproject.com/lessons/node-path-javascript-todo-list)


### Objectives:

**In this project, I will:**

* **Showcase proficiency with Webpack:** Demonstrate the ability to effectively bundle and manage assets using Webpack, highlighting its configuration and optimization features.

* **Exhibit understanding of Objects, Constructors/Classes, and Arrays:** Implement and use objects, classes, and arrays in a meaningful way to solve problems and structure code efficiently.

* **Apply the Single Responsibility Principle:** Design and organize my code so that each module or component has a single responsibility, enhancing maintainability and readability.

* **Modularize the codebase:** Break down the code into reusable, self-contained modules, ensuring a clean, scalable, and manageable project structure.


## Obstacles and Eurika moment:

I came across a major flaw in my entire code base, I was about to add a `delete` function for each project, but first I had to log each of the Index numbers, It was then that I realized that I was passing down different kinds of data:

``` JavaScript
    const projectContainer = document.createElement('div');
    projectContainer.dataset.projectIndex = projectIndex;

    //And

    const navigateToProject = document.createElement('div');
    navigateToProject.dataset.projectIndex = projectIndex;
```
Essentially creating two identical (though duplicate) versions of each DOM element and because of that I had to call the `expand` function in two different ways, depending on where they were called either from the `card` or from the `navPanel`:

```JavaScript
    // Like this
    expandCard(e) // expands the card

    // and
    expandCardFromNav(e) // expands the card from the nav, but with the data from the `navigateToProject`
```
I had two identical displays, exact duplicates of each other. When I delete from the `card`, I could still expand it from the `navPanel`.

### **💡** Eurika Moment:

After many attempts of branching out and trying to refactor my code, I eventually came up with an Idea to attach all the data (even methods) directly in the `projectContainer`, and passed it down through out my code base where each module would reference the data inside `projectContainer`, essentially making the `projectContainer` a sort of memory card, avoiding duplication and creating consistency throughout the project --- it was a **Light Bulb** moment.


### Resources:

[Drop Down](https://www.youtube.com/watch?v=VQWu4e6agPc)