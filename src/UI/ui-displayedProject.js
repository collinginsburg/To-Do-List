
let displayedProject = document.createElement('div');
displayedProject.classList.add('displayedProject');

    let projectTitle = document.createElement('h1');
    projectTitle.classList.add('displayedProject__title');

    let projectDate = document.createElement('p');
    projectDate.classList.add('displayedProject__date');

displayedProject.appendChild(projectTitle);
displayedProject.appendChild(projectDate);


// export
export default displayedProject;