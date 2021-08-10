function sortByPriorityHiLo(){
    this.taskList.sort(function(a,b){
        if (b.priority > a.priority){
            return 1;
        } else if (b.priority < a.priority){
            return -1;
        }
        return 0;
    })
};




// export
export default sortByPriorityHiLo