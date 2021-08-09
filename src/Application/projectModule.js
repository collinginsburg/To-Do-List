import listFactory from './list';
import { format } from 'date-fns';
import uuidv4 from './guidGenerator';

const projectModule = (() => {
    const listsArray = [];
    function createList(title, GUID, creationDate){
        GUID = uuidv4();
        creationDate = new Date();
        let newList = listFactory(title, GUID, creationDate);
        listsArray.push(newList); 
    };
return{
    listsArray,
    createList
};

})();
export default projectModule;