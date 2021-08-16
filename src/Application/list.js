import taskFactory from "./task";
import { format } from 'date-fns';
import uuidv4 from './guidGenerator'
import sortByCustomOrder from "./tasklist-fns/sortByCustomOrder";
import deleteSelectedTasks from "./tasklist-fns/deleteSelectedTasks";
import moveTaskToNewProject from "./tasklist-fns/moveTaskToNewProject";
import sortArrayBy from "./sortArrayBy";




// list factory function
const listFactory = (title, GUID, creationDate) => {

    const getGUID = () => GUID;
    const getCreationDate = () => creationDate;
    const getDueDate = () => dueDate;
    const taskList = [];
    const sortCustomOrder = sortByCustomOrder;
    const sortBy = sortArrayBy;
    const deleteTasks = deleteSelectedTasks;
    const moveTasks = moveTaskToNewProject;

    function createTask(title, description, dueDate, priority) {
        const GUID = uuidv4();
        const creationDate = new Date();
        let listTitle =  this.title;
        let task = taskFactory(GUID, creationDate, title, listTitle, description, dueDate, priority);
        taskList.push(task);
    }
   
    return{
        title, 
        taskList, 
        getGUID, 
        getCreationDate,
        createTask, 
        sortCustomOrder,
        deleteTasks,
        moveTasks,
        sortBy

    }
}



// export
export default listFactory


