

// 1. displayed project
let displayedProject = document.createElement('div');
displayedProject.classList.add('displayedProject');

// 2. tasklist container
let taskListContainer = document.createElement('div');
taskListContainer.classList.add('taskListContainer');


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

    let taskList = document.createElement('ul');
    taskList.classList.add('taskList');

    let addTask = document.createElement('div');
    addTask.classList.add('addTask');


taskListContainer.appendChild(taskListContainerOptions);
taskListContainer.appendChild(taskList);
taskListContainer.appendChild(addTask);


// main
let main = document.createElement('main');
main.classList.add('mainApp');
// appends to main
main.appendChild(displayedProject);
main.appendChild(taskListContainer);
// export
export default main;
