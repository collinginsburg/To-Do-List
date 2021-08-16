// task factory function
const taskFactory = (GUID, creationDate, title, listTitle, description, dueDate, priority, customOrder, completed = false, selected = false) => {
    const getGUID = () => GUID;
    const getCreationDate = () => creationDate;
    const toggleCompletion = function(){
        if (this.completed === false){
            this.completed = true;
            console.log(this.completed);
        } else{
            this.completed = false;
            console.log(this.completed);
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
        completed, 
        toggleCompletion,
        selectedStatus,
        toggleSelected
    }
}











// export task 
export default taskFactory