import projectModule from "../Application/projectModule";
import uiRegulator from "./ui-regulator";
import { format } from 'date-fns'

// remove all displayed tasks from displayed project to avoid any duplicates
function clearTasks(){
    let nodes = document.querySelectorAll('.taskListItem');
    if( nodes.length > 0){
        let taskList = document.querySelector('.taskList');
        nodes.forEach(node => taskList.removeChild(node));
    }
}
// display tasks from selected project
function displayTasks(){
    clearTasks();
    let index = projectModule.listsArray.findIndex(list => list.getGUID() === uiRegulator.currentDisplayGUID);
    let taskList = document.querySelector('.taskList');
    taskList.setAttribute('data-index', uiRegulator.currentDisplayGUID);
    for (let i = 0; i < projectModule.listsArray[index].taskList.length; i++){
        let task = document.createElement('li');

        task.setAttribute('data-index', projectModule.listsArray[index].taskList[i].getGUID());
        task.classList.add('taskListItem');
        task.classList.add('taskListColumn');

        let checkBox = document.createElement('div');
        checkBox.classList.add('taskListItem__checkBox');
        task.appendChild(checkBox);

        let taskTitle = document.createElement('p');
        taskTitle.textContent = projectModule.listsArray[index].taskList[i].title;
        taskTitle.classList.add('taskListItem__title');
        task.appendChild(taskTitle);

        let taskDesc = document.createElement('p');
        taskDesc.textContent = projectModule.listsArray[index].taskList[i].description;
        taskDesc.classList.add('taskListItem__desc');
        task.appendChild(taskDesc);

        let taskDueDate = document.createElement('p');
        let dueDateFormatted = format(projectModule.listsArray[index].taskList[i].dueDate, 'Pp');
        taskDueDate.textContent = dueDateFormatted;
        taskDueDate.classList.add('taskListItem__DueDate');
        task.appendChild(taskDueDate);
        
        let taskPriority = document.createElement('p');
        let numPriority = projectModule.listsArray[index].taskList[i].priority;
        let textPriority;
        let colorPriority;
        if (numPriority === 3){
            textPriority = "HI"
            colorPriority = "#D02020"
        } else if (numPriority === 2){
            textPriority = "MED";
            colorPriority = "#427629"
        } else if (numPriority === 1){
            textPriority = "LO"
            colorPriority = "#D07520"
        }
        taskPriority.textContent = textPriority;
        taskPriority.style.color = `${colorPriority}`;
        taskPriority.classList.add('taskListItem__priority');
        task.appendChild(taskPriority);

        let taskDragIcon = document.createElement('div');
        taskDragIcon.classList.add('taskListItem__dragIcon');
        task.appendChild(taskDragIcon);

        taskList.appendChild(task);
    }

}

export default displayTasks