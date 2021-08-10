function deleteSelectedTasks(){
    const selected = this.taskList.filter(task => task.selectedStatus() === true);
    for(let i=0; i<selected.length; i++){
        let GUID = selected[i].getGUID();
        let index = this.taskList.findIndex(task => task.getGUID() === GUID);
        this.taskList.splice(index, 1);
        // console.log(GUID);
        // console.log(this.taskList);
    }
}

// export
export default deleteSelectedTasks