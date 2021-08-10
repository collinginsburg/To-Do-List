function sortAlphabeticallyAZ(){
    this.listsArray.sort(function(a,b){
        if (a.title.toUpperCase() > b.title.toUpperCase()){
            return 1;
        } else if (a.title.toUpperCase() < b.title.toUpperCase()){
            return -1;
        }
        return 0;
    })
}






// export
export default sortAlphabeticallyAZ;