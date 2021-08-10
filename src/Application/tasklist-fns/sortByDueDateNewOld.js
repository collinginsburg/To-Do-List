function sortByDueDateNewOld(){
    this.taskList.sort(function(a,b){
        return b.dueDate - a.dueDate;
  });
};




// export
export default sortByDueDateNewOld