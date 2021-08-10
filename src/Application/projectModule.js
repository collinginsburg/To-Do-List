import listFactory from './list';
import { format } from 'date-fns';
import uuidv4 from './guidGenerator';
import sortByCreationDateNewOld from './list-fns/sortByCreationDateNewOld';
import sortByCreationDateOldNew from './list-fns/sortByCreationDateOldNew';

const projectModule = (() => {
    const listsArray = [];
    const sortDateNewOld = sortByCreationDateNewOld;
    const sortDateOldNew = sortByCreationDateOldNew;
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
    createList
};

})();
export default projectModule;