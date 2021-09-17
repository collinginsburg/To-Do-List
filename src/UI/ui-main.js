import addtaskSVG from '../assets/svgs/Group3.svg';



// 1. tasklist container options
let taskListContainerOptions = document.createElement('div');
taskListContainerOptions.classList.add('taskListContainer__options');

    let searchBar = document.createElement('div');
    searchBar.classList.add('searchBar');

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');

    let moveButton = document.createElement('button');
    moveButton.classList.add('btn');

    let sortByDiv = document.createElement('div');
    sortByDiv.classList.add('taskListSort');

        let sortBytxt = document.createElement('p');
        sortBytxt.classList.add('taskListSort__txt');

        let sortByDropdown = document.createElement('div');
        sortByDropdown.classList.add('taskListSort__dropdown');

        sortByDiv.appendChild(sortBytxt);
        sortByDiv.appendChild(sortByDropdown);

taskListContainerOptions.appendChild(searchBar);
taskListContainerOptions.appendChild(deleteButton);
taskListContainerOptions.appendChild(moveButton);
taskListContainerOptions.appendChild(sortByDiv);

// 2. task list column titles
let taskListColTitles = document.createElement('div');
taskListColTitles.classList.add('taskListColTitles');
taskListColTitles.classList.add('taskListColumn');
    let taskListDone = document.createElement('p');
    taskListDone.classList.add('taskListColTitles__done');
    taskListDone.textContent = "Done";
    taskListColTitles.appendChild(taskListDone);

    let taskListTitle = document.createElement('p');
    taskListTitle.classList.add('taskListColTitles__title');
    taskListTitle.textContent = "Title";
    taskListColTitles.appendChild(taskListTitle);

    let taskListDesc = document.createElement('p');
    taskListDesc.classList.add('taskListColTitles__desc');
    taskListDesc.textContent = "Description";
    taskListColTitles.appendChild(taskListDesc);

    let taskListDueDate = document.createElement('p');
    taskListDueDate.classList.add('taskListColTitles__duedate');
    taskListDueDate.textContent = "Due Date";
    taskListColTitles.appendChild(taskListDueDate);

    let taskListPriority = document.createElement('p');
    taskListPriority.classList.add('taskListColTitles__priority');
    taskListPriority.textContent = "Priority";
    taskListColTitles.appendChild(taskListPriority);

    let taskListMove = document.createElement('p');
    taskListMove.classList.add('taskListColTitles__move');
    taskListMove.textContent = "";
    taskListColTitles.appendChild(taskListMove);

// 3. task list
let taskList = document.createElement('ul');
taskList.classList.add('taskList');

// 4. add task button
let addTaskContainer = document.createElement('div');
addTaskContainer.classList.add('addTaskContainer');

    let addTask = document.createElement('div');
    addTask.classList.add('addTask');
        let addTaskButton = document.createElement('button');
        addTaskButton.classList.add('addTask__btn');

            const SVG = new Image();
            SVG.src = addtaskSVG;
            addTaskButton.appendChild(SVG);
        

            // let addTaskButtonSVG = document.createElement('img');
            // addTaskButtonSVG.src = './assets/svgs/Group3.svg';
            // addTaskButton.appendChild(addTaskButtonSVG);

        let addTaskText = document.createElement('p');
        addTaskText.classList.add('addTask__txt');
        addTaskText.textContent = 'add task';
    addTask.appendChild(addTaskButton);
    addTask.appendChild(addTaskText);

addTaskContainer.appendChild(addTask);





// main
let main = document.createElement('main');
main.classList.add('taskListContainer');
// appends to main
main.appendChild(taskListContainerOptions); // 1
main.appendChild(taskListColTitles); // 2
main.appendChild(taskList); // 3
main.appendChild(addTaskContainer); // 4
// export
export default main;
