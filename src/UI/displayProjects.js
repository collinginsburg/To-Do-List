import projectModule from "../Application/projectModule";
import uiRegulator from "./ui-regulator";
import chooseProject from "./chooseProject";
import { format } from 'date-fns'

function clearProjects(){
    let nodes = document.querySelectorAll('.projectsItem');
    if( nodes.length > 0){
        let projectsList = document.querySelector('.projects');
        nodes.forEach(node => projectsList.removeChild(node));
    }
}

function createDOMelements(){
    let projectsList = document.querySelector('.projects');
    for (let i = 0; i < projectModule.listsArray.length; i++){
        let project = document.createElement('li');
        project.setAttribute('data-index', projectModule.listsArray[i].getGUID());
        project.classList.add('projectsItem');
        project.textContent = projectModule.listsArray[i].title;
        project.addEventListener('click', chooseProject);
        projectsList.appendChild(project);
    }
}

function setSelectedTitleDate(){
    let index = projectModule.listsArray.findIndex(list => list.getGUID() === uiRegulator.currentDisplayGUID);
    let projectTitle = projectModule.listsArray[index].title;

    let projectDateFormatted = format(projectModule.listsArray[index].getCreationDate(), 'Pp');

    let titleElement = document.querySelector('.displayedProject__title');
    let dateElement = document.querySelector('.displayedProject__date'); 
    titleElement.textContent = projectTitle;
    dateElement.textContent = "Created: " + projectDateFormatted;
}

function highlightSelected(){
    let selectedGUID = uiRegulator.currentDisplayGUID;
    console.log(selectedGUID);
    let selectedEl = document.querySelector(`li[data-index ='${selectedGUID}']`);
    selectedEl.style.color = 'white';
}

function displayProjects(){
    clearProjects();
    createDOMelements();
    setSelectedTitleDate();
    highlightSelected();
}

export default displayProjects