import taskFactory from "./task";
import { format } from 'date-fns';
import uuidv4 from './guidGenerator'
import sortAlphabetically from "./sort/sortAlphabetically";
import sortCreationDate from "./sort/sortCreationDate";


// list factory function
const listFactory = (title, GUID, creationDate) => {
    const getGUID = () => GUID;
    const getCreationDate = () => creationDate;
    const taskList = [];
    const sortAlpha = sortAlphabetically;
    const sortDate = sortCreationDate;
    function createTask(title, description, dueDate, priority) {
        const GUID = uuidv4();
        const creationDate = format(new Date(), 'Pp');
        let listTitle =  this.title;
        let task = taskFactory(GUID, creationDate, title, listTitle, description, dueDate, priority);
        taskList.push(task);
    }
   
    return{title, taskList, getGUID, getCreationDate, createTask, sortAlpha, sortDate}
}



// export
export default listFactory


