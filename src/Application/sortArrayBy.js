
function sortArrayBy(array, property, isAscending){

    if (isAscending === true){
        if (typeof this[array][0][property] === "number" || typeof this[array][0][property] === "boolean"){
            this[array].sort(function(a,b){
                return ((a[property] === b[property]) ? 0 : ((a[property] > b[property]) ? 1 : -1));
            })
        } else if(typeof this[array][0][property] === "string"){
            this[array].sort(function(a,b){
                return ((a[property].toUpperCase() === b[property].toUpperCase()) ? 0 : ((a[property].toUpperCase() > b[property].toUpperCase()) ? 1 : -1));
            })
        } else if(this[array][0][property]() instanceof Date){
            this[array].sort(function(a,b){
                return b[property]() - a[property]();
          });

        } 
    } else {
        if (typeof this[array][0][property] === "number" || typeof this[array][0][property] === "boolean"){
            this[array].sort(function(a,b){
                return ((b[property] === a[property]) ? 0 : ((b[property] > a[property]) ? 1 : -1));
            })
        } else if(typeof this[array][0][property] === "string"){
            this[array].sort(function(a,b){
                return ((b[property].toUpperCase() === a[property].toUpperCase()) ? 0 : ((b[property].toUpperCase() > a[property].toUpperCase()) ? 1 : -1));
            })
        } else if(this[array][0][property]() instanceof Date){
            this[array].sort(function(a,b){
                return a[property]() - b[property]();
          });

        } 

    }

}
// array name
// property name
// isAscending: t/f

// if ascending === true
    // if typeof this.taskList[0].property === number
    // if typeof === string
    // if typeof === boolean
    // if x instanceof Date
// else
    // if typeof === number
    // if typeof === string
    // if typeof === boolean
    // if x instanceof Date




//*********************NOTES******** 
// new = low, old = high so ascending is true new-old sort ordering
// parameters must be in string form
// dates must be called with the property that gets its date, but it must omit the parenthesis that calls the fn

export default sortArrayBy;