

// 1. displayed project
let displayedProject = document.createElement('div');
displayedProject.classList.add('displayedProject');

// 2. tasklist container
let taskListContainer = document.createElement('div');
taskListContainer.classList.add('taskListContainer');


// main
let main = document.createElement('main');
main.classList.add('mainApp');
// appends to main
main.appendChild(displayedProject);
main.appendChild(taskListContainer);
// export
export default main;
