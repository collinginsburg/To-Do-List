import listFactory from './list';
import { format } from 'date-fns';
import uuidv4 from './guidGenerator';
import deleteListFromModule from './list-fns/deleteListFromModule.js';
import sortArrayBy from './sortArrayBy';

const projectModule = (() => {
    const listsArray = [];
    const deleteList = deleteListFromModule; 
    const sortBy = sortArrayBy;

    function createList(title, GUID, creationDate){
        GUID = uuidv4();
        creationDate = new Date();
        let newList = listFactory(title, GUID, creationDate);
        listsArray.push(newList); 
    };
return{
    listsArray,
    createList,
    deleteList,
    sortBy
};

})();
export default projectModule;