// task factory function
const taskFactory = (GUID, creationDate, title, listTitle, description, dueDate, priority, customOrder, completed = false, selected = false) => {
    const getGUID = () => GUID;
    const getCreationDate = () => creationDate;
    const completionStatus = () => completed;
    const toggleCompletion = function(){
        if (completed === false){
            completed = true;
            console.log(completed);
        } else{
            completed = false;
            console.log(completed);
        }
    }
    const selectedStatus = () => selected;
    const toggleSelected = function(){
        if (selected === false){
            selected = true;
            console.log(selected);
        } else{
            selected = false;
            console.log(selected);
        }
    }
    return{
        getGUID, 
        title,
        listTitle, 
        description, 
        dueDate, 
        getCreationDate, 
        priority,
        customOrder, 
        completionStatus, 
        toggleCompletion,
        selectedStatus,
        toggleSelected
    }
}











// export task 
export default taskFactory