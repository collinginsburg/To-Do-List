// task factory function
const taskFactory = (title, description, dueDate, priority, creationDate, completed = false) => {
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
    return{title, description, dueDate, getCreationDate, priority, completionStatus, toggleCompletion}
}











// export task 
export default taskFactory