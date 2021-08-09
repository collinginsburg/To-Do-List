function sortByCreationDateNewOld(){
    this.taskList.sort(function(a,b){
        return b.getCreationDate() - a.getCreationDate();
    });
};

// export
export default sortByCreationDateNewOld;