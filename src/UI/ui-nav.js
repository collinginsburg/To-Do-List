// 1. projects list
let projectsList = document.createElement('ul');
projectsList.classList.add('projects');

// 2. project options areaadd projects button
let projectOptions =  document.createElement('div');
projectOptions.classList.add('projectOptions');

    let projectOptionsAdd = document.createElement('div');
    projectOptionsAdd.classList.add('projectOptionsAdd)');
    projectOptions.appendChild(projectOptionsAdd);

    let projectOptionsSort = document.createElement('div');
    projectOptionsSort.classList.add('projectOptionsSort');
    projectOptions.appendChild(projectOptionsSort);


// nav
let nav = document.createElement('nav');
nav.classList.add('projNav');
// appends to nav
nav.appendChild(projectsList);
nav.appendChild(projectOptions);
// export
export default nav;