function sortByCreationDateOldNew(){
    this.listsArray.sort(function(a,b){
        return a.getCreationDate() - b.getCreationDate();
    });
};

// export
export default sortByCreationDateOldNew;