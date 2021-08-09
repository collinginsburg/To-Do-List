import taskFactory from "./task";
import { format } from 'date-fns';
import uuidv4 from './guidGenerator'
import sortAlphabeticallyAZ from "./tasklist-sort/sortAlphabeticallyAZ";
import sortAlphabeticallyZA from "./tasklist-sort/sortAlphabeticallyZA";
import sortByCreationDateOldNew from "./tasklist-sort/sortByCreationDateOldNew";
import sortByCreationDateNewOld from "./tasklist-sort/sortByCreationDateNewOld";
import sortByPriorityLoHi from "./tasklist-sort/sortByPriorityLoHi";
import sortByPriorityHiLo from "./tasklist-sort/sortByPriorityHiLo";
import sortByCompletionStatusFT from "./tasklist-sort/sortByCompletionStatusFT";
import sortByCompletionStatusTF from "./tasklist-sort/sortByCompletionStatusTF";
import sortByCustomOrder from "./tasklist-sort/sortByCustomOrder";




// list factory function
const listFactory = (title, GUID, creationDate) => {

    const getGUID = () => GUID;
    const getCreationDate = () => creationDate;
    const taskList = [];
    const sortAlphaAZ = sortAlphabeticallyAZ;
    const sortAlphaZA = sortAlphabeticallyZA;
    const sortDateOldNew = sortByCreationDateOldNew;
    const sortDateNewOld = sortByCreationDateNewOld;
    const sortPriorityLoHi = sortByPriorityLoHi;
    const sortPriorityHiLo = sortByPriorityHiLo;
    const sortCompletionFT = sortByCompletionStatusFT;
    const sortCompletionTF = sortByCompletionStatusTF;
    const sortCustomOrder = sortByCustomOrder;

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
        sortAlphaAZ, 
        sortAlphaZA, 
        sortDateOldNew, 
        sortDateNewOld, 
        sortPriorityLoHi,
        sortPriorityHiLo,
        sortCompletionFT,
        sortCompletionTF,
        sortCustomOrder

    }
}



// export
export default listFactory


