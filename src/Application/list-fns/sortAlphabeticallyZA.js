function sortAlphabeticallyZA(){
    this.listsArray.sort(function(a,b){
        if (b.title.toUpperCase() > a.title.toUpperCase()){
            return 1;
        } else if (b.title.toUpperCase() < a.title.toUpperCase()){
            return -1;
        }
        return 0;
    })
}






// export
export default sortAlphabeticallyZA;