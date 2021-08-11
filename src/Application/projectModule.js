import listFactory from './list';
import { format } from 'date-fns';
import uuidv4 from './guidGenerator';
import sortByCreationDateNewOld from './list-fns/sortByCreationDateNewOld';
import sortByCreationDateOldNew from './list-fns/sortByCreationDateOldNew';
import sortAlphabeticallyAZ from './list-fns/sortAlphabeticallyAZ';
import sortAlphabeticallyZA from './list-fns/sortAlphabeticallyZA';
import deleteListFromModule from './list-fns/deleteListFromModule.js';

const projectModule = (() => {
    const listsArray = [];

    const sortDateNewOld = sortByCreationDateNewOld;
    const sortDateOldNew = sortByCreationDateOldNew;
    const sortAlphaAZ = sortAlphabeticallyAZ;
    const sortAlphaZA = sortAlphabeticallyZA;
    const deleteList = deleteListFromModule; 

    function createList(title, GUID, creationDate){
        GUID = uuidv4();
        creationDate = new Date();
        let newList = listFactory(title, GUID, creationDate);
        listsArray.push(newList); 
    };
return{
    listsArray,
    sortDateNewOld,
    sortDateOldNew,
    sortAlphaAZ,
    sortAlphaZA,
    createList,
    deleteList
};

})();
export default projectModule;