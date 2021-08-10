function sortByCustomOrder(taskList, from, customOrder){
    const arrayMove = require('array-move');
    this.taskList = arrayMove(taskList, from, customOrder);
}

// export
export default sortByCustomOrder;