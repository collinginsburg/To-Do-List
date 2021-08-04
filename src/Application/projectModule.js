import listFactory from './list';
import { format } from 'date-fns';

const projectModule = (() => {
    const listsArray = [];
    function createList(title, creationDate){
        creationDate = format(new Date(), 'Pp');
        let newList = listFactory(title, creationDate);
        listsArray.push(newList); 
    };
return{
    listsArray,
    createList
};

})();
export default projectModule;