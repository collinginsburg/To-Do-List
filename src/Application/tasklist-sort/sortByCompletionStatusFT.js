function sortByCompletionStatusFT(){
    this.taskList.sort(function(a,b){
        if (a.completionStatus() > b.completionStatus()){
            return 1;
        } else if (a.completionStatus() < b.completionStatus()){
            return -1;
        }
        return 0;
    })
};




// export
export default sortByCompletionStatusFT