function sortByCompletionStatusTF(){
    this.taskList.sort(function(a,b){
        if (b.completionStatus() > a.completionStatus()){
            return 1;
        } else if (b.completionStatus() < a.completionStatus()){
            return -1;
        }
        return 0;
    })
};




// export
export default sortByCompletionStatusTF