function sortByCreationDateNewOld(){
    this.listsArray.sort(function(a,b){
        return b.getCreationDate() - a.getCreationDate();
    });
};

// export
export default sortByCreationDateNewOld;