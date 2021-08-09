// task factory function
const taskFactory = (GUID, creationDate, title, listTitle, description, dueDate, priority, customOrder, completed = false) => {
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
        toggleCompletion
    }
}











// export task 
export default taskFactory