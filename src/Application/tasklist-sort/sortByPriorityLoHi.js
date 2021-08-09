function sortByPriorityLoHi(){
    this.taskList.sort(function(a,b){
        if (a.priority > b.priority){
            return 1;
        } else if (a.priority < b.priority){
            return -1;
        }
        return 0;
    })
};




// export
export default sortByPriorityLoHi