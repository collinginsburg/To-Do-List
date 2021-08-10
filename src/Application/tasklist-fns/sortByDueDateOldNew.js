function sortByDueDateOldNew(){
    this.taskList.sort(function(a,b){
        return a.dueDate - b.dueDate;
  });
};




// export
export default sortByDueDateOldNew