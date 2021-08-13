// 1. projects list
let projectsList = document.createElement('ul');
projectsList.classList.add('projects');

// 2. add projects button

let addProjectbtn = document.createElement('div');
addProjectbtn.classList.add('addProjectBtn');

// 3. sort dropdown
let sortDropDown = document.createElement('div');
sortDropDown.classList.add('sortDropDown');


// nav
let nav = document.createElement('nav');
nav.classList.add('projNav');
// appends to nav
nav.appendChild(projectsList);
nav.appendChild(addProjectbtn);
nav.appendChild(sortDropDown);
// export
export default nav;