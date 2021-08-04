import taskFactory from "./task";
import { format } from 'date-fns';

// list factory function
const listFactory = (title, creationDate) => {
    const getCreationDate = () => creationDate;
    const taskList = [];
    function createTask(title, description, dueDate, priority, creationDate) {
        creationDate = format(new Date(), 'Pp');
        let task = taskFactory(title, description, dueDate, priority, creationDate);
        taskList.push(task);
    }
   
    return{title, taskList, getCreationDate, createTask}
}



// export
export default listFactory


