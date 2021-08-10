function sortAlphabeticallyZA(){
    this.taskList.sort(function(a,b){
        if (b.title > a.title){
            return 1;
        } else if (b.title < a.title){
            return -1;
        }
        return 0;
    })
}

// export
export default sortAlphabeticallyZA;