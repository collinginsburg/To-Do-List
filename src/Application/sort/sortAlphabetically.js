function sortAlphabetically(){
    this.taskList.sort(function(a,b){
        if (a.title > b.title){
            return 1;
        } else if (a.title < b.title){
            return -1;
        }
        return 0;
    })

    
}





// export
export default sortAlphabetically;