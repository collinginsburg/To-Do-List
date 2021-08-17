



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

// 3. task list
let taskList = document.createElement('ul');
taskList.classList.add('taskList');

// 4. add task button
let addTask = document.createElement('div');
addTask.classList.add('addTask');





// main
let main = document.createElement('main');
main.classList.add('taskListContainer');
// appends to main
main.appendChild(taskListContainerOptions); // 1
main.appendChild(taskListColTitles); // 2
main.appendChild(taskList); // 3
main.appendChild(addTask); // 4
// export
export default main;
