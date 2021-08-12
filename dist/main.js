/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/array-move/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-move/index.js ***!
  \******************************************/
/***/ ((module) => {



const arrayMoveMutate = (array, from, to) => {
	const startIndex = from < 0 ? array.length + from : from;

	if (startIndex >= 0 && startIndex < array.length) {
		const endIndex = to < 0 ? array.length + to : to;

		const [item] = array.splice(from, 1);
		array.splice(endIndex, 0, item);
	}
};

const arrayMove = (array, from, to) => {
	array = [...array];
	arrayMoveMutate(array, from, to);
	return array;
};

module.exports = arrayMove;
module.exports.mutate = arrayMoveMutate;


/***/ }),

/***/ "./src/Application/guidGenerator.js":
/*!******************************************!*\
  !*** ./src/Application/guidGenerator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function uuidv4() {
    const a = crypto.getRandomValues(new Uint16Array(8));
    let i = 0;
    return '00-0-4-1-000'.replace(/[^-]/g, 
            s => (a[i++] + s * 0x10000 >> s).toString(16).padStart(4, '0')
    );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uuidv4);

/***/ }),

/***/ "./src/Application/list-fns/deleteListFromModule.js":
/*!**********************************************************!*\
  !*** ./src/Application/list-fns/deleteListFromModule.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function deleteListFromModule(GUID){
    let index = this.listsArray.findIndex(list => list.getGUID() === GUID);
    this.listsArray.splice(index, 1);
}


// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteListFromModule);

/***/ }),

/***/ "./src/Application/list-fns/sortAlphabeticallyAZ.js":
/*!**********************************************************!*\
  !*** ./src/Application/list-fns/sortAlphabeticallyAZ.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortAlphabeticallyAZ);

/***/ }),

/***/ "./src/Application/list-fns/sortAlphabeticallyZA.js":
/*!**********************************************************!*\
  !*** ./src/Application/list-fns/sortAlphabeticallyZA.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortAlphabeticallyZA);

/***/ }),

/***/ "./src/Application/list-fns/sortByCreationDateNewOld.js":
/*!**************************************************************!*\
  !*** ./src/Application/list-fns/sortByCreationDateNewOld.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortByCreationDateNewOld(){
    this.listsArray.sort(function(a,b){
        return b.getCreationDate() - a.getCreationDate();
    });
};

// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByCreationDateNewOld);

/***/ }),

/***/ "./src/Application/list-fns/sortByCreationDateOldNew.js":
/*!**************************************************************!*\
  !*** ./src/Application/list-fns/sortByCreationDateOldNew.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortByCreationDateOldNew(){
    this.listsArray.sort(function(a,b){
        return a.getCreationDate() - b.getCreationDate();
    });
};

// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByCreationDateOldNew);

/***/ }),

/***/ "./src/Application/list.js":
/*!*********************************!*\
  !*** ./src/Application/list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/Application/task.js");
/* harmony import */ var _guidGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guidGenerator */ "./src/Application/guidGenerator.js");
/* harmony import */ var _tasklist_fns_sortAlphabeticallyAZ__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasklist-fns/sortAlphabeticallyAZ */ "./src/Application/tasklist-fns/sortAlphabeticallyAZ.js");
/* harmony import */ var _tasklist_fns_sortAlphabeticallyZA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasklist-fns/sortAlphabeticallyZA */ "./src/Application/tasklist-fns/sortAlphabeticallyZA.js");
/* harmony import */ var _tasklist_fns_sortByCreationDateOldNew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasklist-fns/sortByCreationDateOldNew */ "./src/Application/tasklist-fns/sortByCreationDateOldNew.js");
/* harmony import */ var _tasklist_fns_sortByCreationDateNewOld__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasklist-fns/sortByCreationDateNewOld */ "./src/Application/tasklist-fns/sortByCreationDateNewOld.js");
/* harmony import */ var _tasklist_fns_sortByDueDateOldNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasklist-fns/sortByDueDateOldNew */ "./src/Application/tasklist-fns/sortByDueDateOldNew.js");
/* harmony import */ var _tasklist_fns_sortByDueDateNewOld__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasklist-fns/sortByDueDateNewOld */ "./src/Application/tasklist-fns/sortByDueDateNewOld.js");
/* harmony import */ var _tasklist_fns_sortByPriorityLoHi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasklist-fns/sortByPriorityLoHi */ "./src/Application/tasklist-fns/sortByPriorityLoHi.js");
/* harmony import */ var _tasklist_fns_sortByPriorityHiLo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasklist-fns/sortByPriorityHiLo */ "./src/Application/tasklist-fns/sortByPriorityHiLo.js");
/* harmony import */ var _tasklist_fns_sortByCompletionStatusFT__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasklist-fns/sortByCompletionStatusFT */ "./src/Application/tasklist-fns/sortByCompletionStatusFT.js");
/* harmony import */ var _tasklist_fns_sortByCompletionStatusTF__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tasklist-fns/sortByCompletionStatusTF */ "./src/Application/tasklist-fns/sortByCompletionStatusTF.js");
/* harmony import */ var _tasklist_fns_sortByCustomOrder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tasklist-fns/sortByCustomOrder */ "./src/Application/tasklist-fns/sortByCustomOrder.js");
/* harmony import */ var _tasklist_fns_deleteSelectedTasks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tasklist-fns/deleteSelectedTasks */ "./src/Application/tasklist-fns/deleteSelectedTasks.js");
/* harmony import */ var _tasklist_fns_moveTaskToNewProject__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tasklist-fns/moveTaskToNewProject */ "./src/Application/tasklist-fns/moveTaskToNewProject.js");




















// list factory function
const listFactory = (title, GUID, creationDate) => {

    const getGUID = () => GUID;
    const getCreationDate = () => creationDate;
    const taskList = [];
    const sortAlphaAZ = _tasklist_fns_sortAlphabeticallyAZ__WEBPACK_IMPORTED_MODULE_2__.default;
    const sortAlphaZA = _tasklist_fns_sortAlphabeticallyZA__WEBPACK_IMPORTED_MODULE_3__.default;
    const sortDateOldNew = _tasklist_fns_sortByCreationDateOldNew__WEBPACK_IMPORTED_MODULE_4__.default;
    const sortDateNewOld = _tasklist_fns_sortByCreationDateNewOld__WEBPACK_IMPORTED_MODULE_5__.default;
    const sortDueDateOldNew = _tasklist_fns_sortByDueDateOldNew__WEBPACK_IMPORTED_MODULE_6__.default;
    const sortDueDateNewOld = _tasklist_fns_sortByDueDateNewOld__WEBPACK_IMPORTED_MODULE_7__.default;
    const sortPriorityLoHi = _tasklist_fns_sortByPriorityLoHi__WEBPACK_IMPORTED_MODULE_8__.default;
    const sortPriorityHiLo = _tasklist_fns_sortByPriorityHiLo__WEBPACK_IMPORTED_MODULE_9__.default;
    const sortCompletionFT = _tasklist_fns_sortByCompletionStatusFT__WEBPACK_IMPORTED_MODULE_10__.default;
    const sortCompletionTF = _tasklist_fns_sortByCompletionStatusTF__WEBPACK_IMPORTED_MODULE_11__.default;
    const sortCustomOrder = _tasklist_fns_sortByCustomOrder__WEBPACK_IMPORTED_MODULE_12__.default;
    const deleteTasks = _tasklist_fns_deleteSelectedTasks__WEBPACK_IMPORTED_MODULE_13__.default;
    const moveTasks = _tasklist_fns_moveTaskToNewProject__WEBPACK_IMPORTED_MODULE_14__.default;

    function createTask(title, description, dueDate, priority) {
        const GUID = (0,_guidGenerator__WEBPACK_IMPORTED_MODULE_1__.default)();
        const creationDate = new Date();
        let listTitle =  this.title;
        let task = (0,_task__WEBPACK_IMPORTED_MODULE_0__.default)(GUID, creationDate, title, listTitle, description, dueDate, priority);
        taskList.push(task);
    }
   
    return{
        title, 
        taskList, 
        getGUID, 
        getCreationDate, 
        createTask, 
        sortAlphaAZ, 
        sortAlphaZA, 
        sortDateOldNew, 
        sortDateNewOld,
        sortDueDateOldNew,
        sortDueDateNewOld,
        sortPriorityLoHi,
        sortPriorityHiLo,
        sortCompletionFT,
        sortCompletionTF,
        sortCustomOrder,
        deleteTasks,
        moveTasks

    }
}



// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listFactory);




/***/ }),

/***/ "./src/Application/projectModule.js":
/*!******************************************!*\
  !*** ./src/Application/projectModule.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/Application/list.js");
/* harmony import */ var _guidGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guidGenerator */ "./src/Application/guidGenerator.js");
/* harmony import */ var _list_fns_sortByCreationDateNewOld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-fns/sortByCreationDateNewOld */ "./src/Application/list-fns/sortByCreationDateNewOld.js");
/* harmony import */ var _list_fns_sortByCreationDateOldNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-fns/sortByCreationDateOldNew */ "./src/Application/list-fns/sortByCreationDateOldNew.js");
/* harmony import */ var _list_fns_sortAlphabeticallyAZ__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-fns/sortAlphabeticallyAZ */ "./src/Application/list-fns/sortAlphabeticallyAZ.js");
/* harmony import */ var _list_fns_sortAlphabeticallyZA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-fns/sortAlphabeticallyZA */ "./src/Application/list-fns/sortAlphabeticallyZA.js");
/* harmony import */ var _list_fns_deleteListFromModule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-fns/deleteListFromModule.js */ "./src/Application/list-fns/deleteListFromModule.js");









const projectModule = (() => {
    const listsArray = [];

    const sortDateNewOld = _list_fns_sortByCreationDateNewOld__WEBPACK_IMPORTED_MODULE_2__.default;
    const sortDateOldNew = _list_fns_sortByCreationDateOldNew__WEBPACK_IMPORTED_MODULE_3__.default;
    const sortAlphaAZ = _list_fns_sortAlphabeticallyAZ__WEBPACK_IMPORTED_MODULE_4__.default;
    const sortAlphaZA = _list_fns_sortAlphabeticallyZA__WEBPACK_IMPORTED_MODULE_5__.default;
    const deleteList = _list_fns_deleteListFromModule_js__WEBPACK_IMPORTED_MODULE_6__.default; 

    function createList(title, GUID, creationDate){
        GUID = (0,_guidGenerator__WEBPACK_IMPORTED_MODULE_1__.default)();
        creationDate = new Date();
        let newList = (0,_list__WEBPACK_IMPORTED_MODULE_0__.default)(title, GUID, creationDate);
        listsArray.push(newList); 
    };
return{
    listsArray,
    sortDateNewOld,
    sortDateOldNew,
    sortAlphaAZ,
    sortAlphaZA,
    createList,
    deleteList
};

})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModule);

/***/ }),

/***/ "./src/Application/task.js":
/*!*********************************!*\
  !*** ./src/Application/task.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// task factory function
const taskFactory = (GUID, creationDate, title, listTitle, description, dueDate, priority, customOrder, completed = false, selected = false) => {
    const getGUID = () => GUID;
    const getCreationDate = () => creationDate;
    const completionStatus = () => completed;
    const toggleCompletion = function(){
        if (completed === false){
            completed = true;
            console.log(completed);
        } else{
            completed = false;
            console.log(completed);
        }
    }
    const selectedStatus = () => selected;
    const toggleSelected = function(){
        if (selected === false){
            selected = true;
            console.log(selected);
        } else{
            selected = false;
            console.log(selected);
        }
    }
    return{
        getGUID, 
        title,
        listTitle, 
        description, 
        dueDate, 
        getCreationDate, 
        priority,
        customOrder, 
        completionStatus, 
        toggleCompletion,
        selectedStatus,
        toggleSelected
    }
}











// export task 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);

/***/ }),

/***/ "./src/Application/tasklist-fns/deleteSelectedTasks.js":
/*!*************************************************************!*\
  !*** ./src/Application/tasklist-fns/deleteSelectedTasks.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function deleteSelectedTasks(){
    const selected = this.taskList.filter(task => task.selectedStatus() === true);
    for(let i=0; i<selected.length; i++){
        let GUID = selected[i].getGUID();
        let index = this.taskList.findIndex(task => task.getGUID() === GUID);
        this.taskList.splice(index, 1);
        // console.log(GUID);
        // console.log(this.taskList);
    }
}

// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteSelectedTasks);

/***/ }),

/***/ "./src/Application/tasklist-fns/moveTaskToNewProject.js":
/*!**************************************************************!*\
  !*** ./src/Application/tasklist-fns/moveTaskToNewProject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function moveTaskToNewProject(targetProject){
    const selected = this.taskList.filter(task => task.selectedStatus() === true);
    for(let i=0; i<selected.length; i++){
        let taskEmigrant =  selected[i];
        let GUID = selected[i].getGUID();
        let index = this.taskList.findIndex(task => task.getGUID() === GUID);
        targetProject.taskList.splice(targetProject.taskList.length-1, 0, taskEmigrant);
        this.taskList.splice(index, 1);
        // console.log(GUID);
        // console.log(this.taskList);
    }
}

// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moveTaskToNewProject);

/***/ }),

/***/ "./src/Application/tasklist-fns/sortAlphabeticallyAZ.js":
/*!**************************************************************!*\
  !*** ./src/Application/tasklist-fns/sortAlphabeticallyAZ.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortAlphabeticallyAZ(){
    this.taskList.sort(function(a,b){
        if (a.title.toUpperCase() > b.title.toUpperCase()){
            return 1;
        } else if (a.title.toUpperCase() < b.title.toUpperCase()){
            return -1;
        }
        return 0;
    })
}






// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortAlphabeticallyAZ);

/***/ }),

/***/ "./src/Application/tasklist-fns/sortAlphabeticallyZA.js":
/*!**************************************************************!*\
  !*** ./src/Application/tasklist-fns/sortAlphabeticallyZA.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortAlphabeticallyZA(){
    this.taskList.sort(function(a,b){
        if (b.title.toUpperCase() > a.title.toUpperCase()){
            return 1;
        } else if (b.title.toUpperCase() < a.title.toUpperCase()){
            return -1;
        }
        return 0;
    })
}

// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortAlphabeticallyZA);

/***/ }),

/***/ "./src/Application/tasklist-fns/sortByCompletionStatusFT.js":
/*!******************************************************************!*\
  !*** ./src/Application/tasklist-fns/sortByCompletionStatusFT.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortByCompletionStatusFT(){
    this.taskList.sort(function(a,b){
        if (a.completionStatus() > b.completionStatus()){
            return 1;
        } else if (a.completionStatus() < b.completionStatus()){
            return -1;
        }
        return 0;
    })
};




// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByCompletionStatusFT);

/***/ }),

/***/ "./src/Application/tasklist-fns/sortByCompletionStatusTF.js":
/*!******************************************************************!*\
  !*** ./src/Application/tasklist-fns/sortByCompletionStatusTF.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByCompletionStatusTF);

/***/ }),

/***/ "./src/Application/tasklist-fns/sortByCreationDateNewOld.js":
/*!******************************************************************!*\
  !*** ./src/Application/tasklist-fns/sortByCreationDateNewOld.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortByCreationDateNewOld(){
    this.taskList.sort(function(a,b){
        return b.getCreationDate() - a.getCreationDate();
    });
};

// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByCreationDateNewOld);

/***/ }),

/***/ "./src/Application/tasklist-fns/sortByCreationDateOldNew.js":
/*!******************************************************************!*\
  !*** ./src/Application/tasklist-fns/sortByCreationDateOldNew.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortByCreationDateOldNew(){
    this.taskList.sort(function(a,b){
        return a.getCreationDate() - b.getCreationDate();
  });
};




// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByCreationDateOldNew);

/***/ }),

/***/ "./src/Application/tasklist-fns/sortByCustomOrder.js":
/*!***********************************************************!*\
  !*** ./src/Application/tasklist-fns/sortByCustomOrder.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortByCustomOrder(taskList, from, customOrder){
    const arrayMove = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
    this.taskList = arrayMove(taskList, from, customOrder);
}

// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByCustomOrder);

/***/ }),

/***/ "./src/Application/tasklist-fns/sortByDueDateNewOld.js":
/*!*************************************************************!*\
  !*** ./src/Application/tasklist-fns/sortByDueDateNewOld.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortByDueDateNewOld(){
    this.taskList.sort(function(a,b){
        return b.dueDate - a.dueDate;
  });
};




// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByDueDateNewOld);

/***/ }),

/***/ "./src/Application/tasklist-fns/sortByDueDateOldNew.js":
/*!*************************************************************!*\
  !*** ./src/Application/tasklist-fns/sortByDueDateOldNew.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortByDueDateOldNew(){
    this.taskList.sort(function(a,b){
        return a.dueDate - b.dueDate;
  });
};




// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByDueDateOldNew);

/***/ }),

/***/ "./src/Application/tasklist-fns/sortByPriorityHiLo.js":
/*!************************************************************!*\
  !*** ./src/Application/tasklist-fns/sortByPriorityHiLo.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortByPriorityHiLo(){
    this.taskList.sort(function(a,b){
        if (b.priority > a.priority){
            return 1;
        } else if (b.priority < a.priority){
            return -1;
        }
        return 0;
    })
};




// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByPriorityHiLo);

/***/ }),

/***/ "./src/Application/tasklist-fns/sortByPriorityLoHi.js":
/*!************************************************************!*\
  !*** ./src/Application/tasklist-fns/sortByPriorityLoHi.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortByPriorityLoHi(){
    this.taskList.sort(function(a,b){
        if (a.priority > b.priority){
            return 1;
        } else if (a.priority < b.priority){
            return -1;
        }
        return 0;
    })
};




// export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByPriorityLoHi);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Application_projectModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Application/projectModule */ "./src/Application/projectModule.js");



// content div, and its children
let content = document.querySelector('#content'); 






// on-load
// window.projectModule = projectModule;
// projectModule.createList("Default List");
// projectModule.listsArray[0].createTask("arbor the trees", "bc i hate shade", "4/10/2022", 1);
// projectModule.listsArray[0].createTask("cut the cheese", "all i can eat is cheese", "9/1/2021", 3);
// projectModule.listsArray[0].createTask("bake the cake", "cooking is fun", "12/17/2021", 2);

const project = _Application_projectModule__WEBPACK_IMPORTED_MODULE_0__.default;
project.createList("Home");
project.listsArray[0].createTask("take out the trash", "its thursday", "8/12/2021", 3);
project.listsArray[0].createTask("flip the pickles", "they leaking!", "8/15/2021", 2);
project.listsArray[0].createTask("walk the dog", "or else he'll poop in the house", "Today", 3);

console.log(project);








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7QUFLQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ2ZmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7QUFLQTtBQUNBLGlFQUFlOzs7Ozs7VUNmZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTndEOzs7QUFHeEQ7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsK0RBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2FycmF5LW1vdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9BcHBsaWNhdGlvbi9ndWlkR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvQXBwbGljYXRpb24vbGlzdC1mbnMvZGVsZXRlTGlzdEZyb21Nb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9BcHBsaWNhdGlvbi9saXN0LWZucy9zb3J0QWxwaGFiZXRpY2FsbHlBWi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0FwcGxpY2F0aW9uL2xpc3QtZm5zL3NvcnRBbHBoYWJldGljYWxseVpBLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvQXBwbGljYXRpb24vbGlzdC1mbnMvc29ydEJ5Q3JlYXRpb25EYXRlTmV3T2xkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvQXBwbGljYXRpb24vbGlzdC1mbnMvc29ydEJ5Q3JlYXRpb25EYXRlT2xkTmV3LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvQXBwbGljYXRpb24vbGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0FwcGxpY2F0aW9uL3Byb2plY3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9BcHBsaWNhdGlvbi90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvQXBwbGljYXRpb24vdGFza2xpc3QtZm5zL2RlbGV0ZVNlbGVjdGVkVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9BcHBsaWNhdGlvbi90YXNrbGlzdC1mbnMvbW92ZVRhc2tUb05ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9BcHBsaWNhdGlvbi90YXNrbGlzdC1mbnMvc29ydEFscGhhYmV0aWNhbGx5QVouanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9BcHBsaWNhdGlvbi90YXNrbGlzdC1mbnMvc29ydEFscGhhYmV0aWNhbGx5WkEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9BcHBsaWNhdGlvbi90YXNrbGlzdC1mbnMvc29ydEJ5Q29tcGxldGlvblN0YXR1c0ZULmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvQXBwbGljYXRpb24vdGFza2xpc3QtZm5zL3NvcnRCeUNvbXBsZXRpb25TdGF0dXNURi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0FwcGxpY2F0aW9uL3Rhc2tsaXN0LWZucy9zb3J0QnlDcmVhdGlvbkRhdGVOZXdPbGQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9BcHBsaWNhdGlvbi90YXNrbGlzdC1mbnMvc29ydEJ5Q3JlYXRpb25EYXRlT2xkTmV3LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvQXBwbGljYXRpb24vdGFza2xpc3QtZm5zL3NvcnRCeUN1c3RvbU9yZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvQXBwbGljYXRpb24vdGFza2xpc3QtZm5zL3NvcnRCeUR1ZURhdGVOZXdPbGQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9BcHBsaWNhdGlvbi90YXNrbGlzdC1mbnMvc29ydEJ5RHVlRGF0ZU9sZE5ldy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0FwcGxpY2F0aW9uL3Rhc2tsaXN0LWZucy9zb3J0QnlQcmlvcml0eUhpTG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9BcHBsaWNhdGlvbi90YXNrbGlzdC1mbnMvc29ydEJ5UHJpb3JpdHlMb0hpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlNb3ZlTXV0YXRlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuXHRjb25zdCBzdGFydEluZGV4ID0gZnJvbSA8IDAgPyBhcnJheS5sZW5ndGggKyBmcm9tIDogZnJvbTtcblxuXHRpZiAoc3RhcnRJbmRleCA+PSAwICYmIHN0YXJ0SW5kZXggPCBhcnJheS5sZW5ndGgpIHtcblx0XHRjb25zdCBlbmRJbmRleCA9IHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG87XG5cblx0XHRjb25zdCBbaXRlbV0gPSBhcnJheS5zcGxpY2UoZnJvbSwgMSk7XG5cdFx0YXJyYXkuc3BsaWNlKGVuZEluZGV4LCAwLCBpdGVtKTtcblx0fVxufTtcblxuY29uc3QgYXJyYXlNb3ZlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuXHRhcnJheSA9IFsuLi5hcnJheV07XG5cdGFycmF5TW92ZU11dGF0ZShhcnJheSwgZnJvbSwgdG8pO1xuXHRyZXR1cm4gYXJyYXk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TW92ZTtcbm1vZHVsZS5leHBvcnRzLm11dGF0ZSA9IGFycmF5TW92ZU11dGF0ZTtcbiIsImZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgICBjb25zdCBhID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDE2QXJyYXkoOCkpO1xuICAgIGxldCBpID0gMDtcbiAgICByZXR1cm4gJzAwLTAtNC0xLTAwMCcucmVwbGFjZSgvW14tXS9nLCBcbiAgICAgICAgICAgIHMgPT4gKGFbaSsrXSArIHMgKiAweDEwMDAwID4+IHMpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCg0LCAnMCcpXG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXVpZHY0IiwiZnVuY3Rpb24gZGVsZXRlTGlzdEZyb21Nb2R1bGUoR1VJRCl7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5saXN0c0FycmF5LmZpbmRJbmRleChsaXN0ID0+IGxpc3QuZ2V0R1VJRCgpID09PSBHVUlEKTtcbiAgICB0aGlzLmxpc3RzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuXG4vLyBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUxpc3RGcm9tTW9kdWxlIiwiZnVuY3Rpb24gc29ydEFscGhhYmV0aWNhbGx5QVooKXtcbiAgICB0aGlzLmxpc3RzQXJyYXkuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICBpZiAoYS50aXRsZS50b1VwcGVyQ2FzZSgpID4gYi50aXRsZS50b1VwcGVyQ2FzZSgpKXtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGEudGl0bGUudG9VcHBlckNhc2UoKSA8IGIudGl0bGUudG9VcHBlckNhc2UoKSl7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSlcbn1cblxuXG5cblxuXG5cbi8vIGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgc29ydEFscGhhYmV0aWNhbGx5QVo7IiwiZnVuY3Rpb24gc29ydEFscGhhYmV0aWNhbGx5WkEoKXtcbiAgICB0aGlzLmxpc3RzQXJyYXkuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICBpZiAoYi50aXRsZS50b1VwcGVyQ2FzZSgpID4gYS50aXRsZS50b1VwcGVyQ2FzZSgpKXtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGIudGl0bGUudG9VcHBlckNhc2UoKSA8IGEudGl0bGUudG9VcHBlckNhc2UoKSl7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSlcbn1cblxuXG5cblxuXG5cbi8vIGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgc29ydEFscGhhYmV0aWNhbGx5WkE7IiwiZnVuY3Rpb24gc29ydEJ5Q3JlYXRpb25EYXRlTmV3T2xkKCl7XG4gICAgdGhpcy5saXN0c0FycmF5LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgcmV0dXJuIGIuZ2V0Q3JlYXRpb25EYXRlKCkgLSBhLmdldENyZWF0aW9uRGF0ZSgpO1xuICAgIH0pO1xufTtcblxuLy8gZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBzb3J0QnlDcmVhdGlvbkRhdGVOZXdPbGQ7IiwiZnVuY3Rpb24gc29ydEJ5Q3JlYXRpb25EYXRlT2xkTmV3KCl7XG4gICAgdGhpcy5saXN0c0FycmF5LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgcmV0dXJuIGEuZ2V0Q3JlYXRpb25EYXRlKCkgLSBiLmdldENyZWF0aW9uRGF0ZSgpO1xuICAgIH0pO1xufTtcblxuLy8gZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBzb3J0QnlDcmVhdGlvbkRhdGVPbGROZXc7IiwiaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB1dWlkdjQgZnJvbSAnLi9ndWlkR2VuZXJhdG9yJ1xuaW1wb3J0IHNvcnRBbHBoYWJldGljYWxseUFaIGZyb20gXCIuL3Rhc2tsaXN0LWZucy9zb3J0QWxwaGFiZXRpY2FsbHlBWlwiO1xuaW1wb3J0IHNvcnRBbHBoYWJldGljYWxseVpBIGZyb20gXCIuL3Rhc2tsaXN0LWZucy9zb3J0QWxwaGFiZXRpY2FsbHlaQVwiO1xuaW1wb3J0IHNvcnRCeUNyZWF0aW9uRGF0ZU9sZE5ldyBmcm9tIFwiLi90YXNrbGlzdC1mbnMvc29ydEJ5Q3JlYXRpb25EYXRlT2xkTmV3XCI7XG5pbXBvcnQgc29ydEJ5Q3JlYXRpb25EYXRlTmV3T2xkIGZyb20gXCIuL3Rhc2tsaXN0LWZucy9zb3J0QnlDcmVhdGlvbkRhdGVOZXdPbGRcIjtcbmltcG9ydCBzb3J0QnlEdWVEYXRlT2xkTmV3IGZyb20gXCIuL3Rhc2tsaXN0LWZucy9zb3J0QnlEdWVEYXRlT2xkTmV3XCI7XG5pbXBvcnQgc29ydEJ5RHVlRGF0ZU5ld09sZCBmcm9tIFwiLi90YXNrbGlzdC1mbnMvc29ydEJ5RHVlRGF0ZU5ld09sZFwiO1xuaW1wb3J0IHNvcnRCeVByaW9yaXR5TG9IaSBmcm9tIFwiLi90YXNrbGlzdC1mbnMvc29ydEJ5UHJpb3JpdHlMb0hpXCI7XG5pbXBvcnQgc29ydEJ5UHJpb3JpdHlIaUxvIGZyb20gXCIuL3Rhc2tsaXN0LWZucy9zb3J0QnlQcmlvcml0eUhpTG9cIjtcbmltcG9ydCBzb3J0QnlDb21wbGV0aW9uU3RhdHVzRlQgZnJvbSBcIi4vdGFza2xpc3QtZm5zL3NvcnRCeUNvbXBsZXRpb25TdGF0dXNGVFwiO1xuaW1wb3J0IHNvcnRCeUNvbXBsZXRpb25TdGF0dXNURiBmcm9tIFwiLi90YXNrbGlzdC1mbnMvc29ydEJ5Q29tcGxldGlvblN0YXR1c1RGXCI7XG5pbXBvcnQgc29ydEJ5Q3VzdG9tT3JkZXIgZnJvbSBcIi4vdGFza2xpc3QtZm5zL3NvcnRCeUN1c3RvbU9yZGVyXCI7XG5pbXBvcnQgZGVsZXRlU2VsZWN0ZWRUYXNrcyBmcm9tIFwiLi90YXNrbGlzdC1mbnMvZGVsZXRlU2VsZWN0ZWRUYXNrc1wiO1xuaW1wb3J0IG1vdmVUYXNrVG9OZXdQcm9qZWN0IGZyb20gXCIuL3Rhc2tsaXN0LWZucy9tb3ZlVGFza1RvTmV3UHJvamVjdFwiO1xuXG5cblxuXG4vLyBsaXN0IGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IGxpc3RGYWN0b3J5ID0gKHRpdGxlLCBHVUlELCBjcmVhdGlvbkRhdGUpID0+IHtcblxuICAgIGNvbnN0IGdldEdVSUQgPSAoKSA9PiBHVUlEO1xuICAgIGNvbnN0IGdldENyZWF0aW9uRGF0ZSA9ICgpID0+IGNyZWF0aW9uRGF0ZTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IFtdO1xuICAgIGNvbnN0IHNvcnRBbHBoYUFaID0gc29ydEFscGhhYmV0aWNhbGx5QVo7XG4gICAgY29uc3Qgc29ydEFscGhhWkEgPSBzb3J0QWxwaGFiZXRpY2FsbHlaQTtcbiAgICBjb25zdCBzb3J0RGF0ZU9sZE5ldyA9IHNvcnRCeUNyZWF0aW9uRGF0ZU9sZE5ldztcbiAgICBjb25zdCBzb3J0RGF0ZU5ld09sZCA9IHNvcnRCeUNyZWF0aW9uRGF0ZU5ld09sZDtcbiAgICBjb25zdCBzb3J0RHVlRGF0ZU9sZE5ldyA9IHNvcnRCeUR1ZURhdGVPbGROZXc7XG4gICAgY29uc3Qgc29ydER1ZURhdGVOZXdPbGQgPSBzb3J0QnlEdWVEYXRlTmV3T2xkO1xuICAgIGNvbnN0IHNvcnRQcmlvcml0eUxvSGkgPSBzb3J0QnlQcmlvcml0eUxvSGk7XG4gICAgY29uc3Qgc29ydFByaW9yaXR5SGlMbyA9IHNvcnRCeVByaW9yaXR5SGlMbztcbiAgICBjb25zdCBzb3J0Q29tcGxldGlvbkZUID0gc29ydEJ5Q29tcGxldGlvblN0YXR1c0ZUO1xuICAgIGNvbnN0IHNvcnRDb21wbGV0aW9uVEYgPSBzb3J0QnlDb21wbGV0aW9uU3RhdHVzVEY7XG4gICAgY29uc3Qgc29ydEN1c3RvbU9yZGVyID0gc29ydEJ5Q3VzdG9tT3JkZXI7XG4gICAgY29uc3QgZGVsZXRlVGFza3MgPSBkZWxldGVTZWxlY3RlZFRhc2tzO1xuICAgIGNvbnN0IG1vdmVUYXNrcyA9IG1vdmVUYXNrVG9OZXdQcm9qZWN0O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGNvbnN0IEdVSUQgPSB1dWlkdjQoKTtcbiAgICAgICAgY29uc3QgY3JlYXRpb25EYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGxpc3RUaXRsZSA9ICB0aGlzLnRpdGxlO1xuICAgICAgICBsZXQgdGFzayA9IHRhc2tGYWN0b3J5KEdVSUQsIGNyZWF0aW9uRGF0ZSwgdGl0bGUsIGxpc3RUaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG4gICBcbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLCBcbiAgICAgICAgdGFza0xpc3QsIFxuICAgICAgICBnZXRHVUlELCBcbiAgICAgICAgZ2V0Q3JlYXRpb25EYXRlLCBcbiAgICAgICAgY3JlYXRlVGFzaywgXG4gICAgICAgIHNvcnRBbHBoYUFaLCBcbiAgICAgICAgc29ydEFscGhhWkEsIFxuICAgICAgICBzb3J0RGF0ZU9sZE5ldywgXG4gICAgICAgIHNvcnREYXRlTmV3T2xkLFxuICAgICAgICBzb3J0RHVlRGF0ZU9sZE5ldyxcbiAgICAgICAgc29ydER1ZURhdGVOZXdPbGQsXG4gICAgICAgIHNvcnRQcmlvcml0eUxvSGksXG4gICAgICAgIHNvcnRQcmlvcml0eUhpTG8sXG4gICAgICAgIHNvcnRDb21wbGV0aW9uRlQsXG4gICAgICAgIHNvcnRDb21wbGV0aW9uVEYsXG4gICAgICAgIHNvcnRDdXN0b21PcmRlcixcbiAgICAgICAgZGVsZXRlVGFza3MsXG4gICAgICAgIG1vdmVUYXNrc1xuXG4gICAgfVxufVxuXG5cblxuLy8gZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBsaXN0RmFjdG9yeVxuXG5cbiIsImltcG9ydCBsaXN0RmFjdG9yeSBmcm9tICcuL2xpc3QnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHV1aWR2NCBmcm9tICcuL2d1aWRHZW5lcmF0b3InO1xuaW1wb3J0IHNvcnRCeUNyZWF0aW9uRGF0ZU5ld09sZCBmcm9tICcuL2xpc3QtZm5zL3NvcnRCeUNyZWF0aW9uRGF0ZU5ld09sZCc7XG5pbXBvcnQgc29ydEJ5Q3JlYXRpb25EYXRlT2xkTmV3IGZyb20gJy4vbGlzdC1mbnMvc29ydEJ5Q3JlYXRpb25EYXRlT2xkTmV3JztcbmltcG9ydCBzb3J0QWxwaGFiZXRpY2FsbHlBWiBmcm9tICcuL2xpc3QtZm5zL3NvcnRBbHBoYWJldGljYWxseUFaJztcbmltcG9ydCBzb3J0QWxwaGFiZXRpY2FsbHlaQSBmcm9tICcuL2xpc3QtZm5zL3NvcnRBbHBoYWJldGljYWxseVpBJztcbmltcG9ydCBkZWxldGVMaXN0RnJvbU1vZHVsZSBmcm9tICcuL2xpc3QtZm5zL2RlbGV0ZUxpc3RGcm9tTW9kdWxlLmpzJztcblxuY29uc3QgcHJvamVjdE1vZHVsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgbGlzdHNBcnJheSA9IFtdO1xuXG4gICAgY29uc3Qgc29ydERhdGVOZXdPbGQgPSBzb3J0QnlDcmVhdGlvbkRhdGVOZXdPbGQ7XG4gICAgY29uc3Qgc29ydERhdGVPbGROZXcgPSBzb3J0QnlDcmVhdGlvbkRhdGVPbGROZXc7XG4gICAgY29uc3Qgc29ydEFscGhhQVogPSBzb3J0QWxwaGFiZXRpY2FsbHlBWjtcbiAgICBjb25zdCBzb3J0QWxwaGFaQSA9IHNvcnRBbHBoYWJldGljYWxseVpBO1xuICAgIGNvbnN0IGRlbGV0ZUxpc3QgPSBkZWxldGVMaXN0RnJvbU1vZHVsZTsgXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0KHRpdGxlLCBHVUlELCBjcmVhdGlvbkRhdGUpe1xuICAgICAgICBHVUlEID0gdXVpZHY0KCk7XG4gICAgICAgIGNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBuZXdMaXN0ID0gbGlzdEZhY3RvcnkodGl0bGUsIEdVSUQsIGNyZWF0aW9uRGF0ZSk7XG4gICAgICAgIGxpc3RzQXJyYXkucHVzaChuZXdMaXN0KTsgXG4gICAgfTtcbnJldHVybntcbiAgICBsaXN0c0FycmF5LFxuICAgIHNvcnREYXRlTmV3T2xkLFxuICAgIHNvcnREYXRlT2xkTmV3LFxuICAgIHNvcnRBbHBoYUFaLFxuICAgIHNvcnRBbHBoYVpBLFxuICAgIGNyZWF0ZUxpc3QsXG4gICAgZGVsZXRlTGlzdFxufTtcblxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNb2R1bGU7IiwiLy8gdGFzayBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCB0YXNrRmFjdG9yeSA9IChHVUlELCBjcmVhdGlvbkRhdGUsIHRpdGxlLCBsaXN0VGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY3VzdG9tT3JkZXIsIGNvbXBsZXRlZCA9IGZhbHNlLCBzZWxlY3RlZCA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgZ2V0R1VJRCA9ICgpID0+IEdVSUQ7XG4gICAgY29uc3QgZ2V0Q3JlYXRpb25EYXRlID0gKCkgPT4gY3JlYXRpb25EYXRlO1xuICAgIGNvbnN0IGNvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiBjb21wbGV0ZWQ7XG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGlvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChjb21wbGV0ZWQgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wbGV0ZWQpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXBsZXRlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ZWRTdGF0dXMgPSAoKSA9PiBzZWxlY3RlZDtcbiAgICBjb25zdCB0b2dnbGVTZWxlY3RlZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBzZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybntcbiAgICAgICAgZ2V0R1VJRCwgXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBsaXN0VGl0bGUsIFxuICAgICAgICBkZXNjcmlwdGlvbiwgXG4gICAgICAgIGR1ZURhdGUsIFxuICAgICAgICBnZXRDcmVhdGlvbkRhdGUsIFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgY3VzdG9tT3JkZXIsIFxuICAgICAgICBjb21wbGV0aW9uU3RhdHVzLCBcbiAgICAgICAgdG9nZ2xlQ29tcGxldGlvbixcbiAgICAgICAgc2VsZWN0ZWRTdGF0dXMsXG4gICAgICAgIHRvZ2dsZVNlbGVjdGVkXG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGV4cG9ydCB0YXNrIFxuZXhwb3J0IGRlZmF1bHQgdGFza0ZhY3RvcnkiLCJmdW5jdGlvbiBkZWxldGVTZWxlY3RlZFRhc2tzKCl7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suc2VsZWN0ZWRTdGF0dXMoKSA9PT0gdHJ1ZSk7XG4gICAgZm9yKGxldCBpPTA7IGk8c2VsZWN0ZWQubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgR1VJRCA9IHNlbGVjdGVkW2ldLmdldEdVSUQoKTtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50YXNrTGlzdC5maW5kSW5kZXgodGFzayA9PiB0YXNrLmdldEdVSUQoKSA9PT0gR1VJRCk7XG4gICAgICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coR1VJRCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGFza0xpc3QpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBkZWxldGVTZWxlY3RlZFRhc2tzIiwiZnVuY3Rpb24gbW92ZVRhc2tUb05ld1Byb2plY3QodGFyZ2V0UHJvamVjdCl7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suc2VsZWN0ZWRTdGF0dXMoKSA9PT0gdHJ1ZSk7XG4gICAgZm9yKGxldCBpPTA7IGk8c2VsZWN0ZWQubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgdGFza0VtaWdyYW50ID0gIHNlbGVjdGVkW2ldO1xuICAgICAgICBsZXQgR1VJRCA9IHNlbGVjdGVkW2ldLmdldEdVSUQoKTtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50YXNrTGlzdC5maW5kSW5kZXgodGFzayA9PiB0YXNrLmdldEdVSUQoKSA9PT0gR1VJRCk7XG4gICAgICAgIHRhcmdldFByb2plY3QudGFza0xpc3Quc3BsaWNlKHRhcmdldFByb2plY3QudGFza0xpc3QubGVuZ3RoLTEsIDAsIHRhc2tFbWlncmFudCk7XG4gICAgICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coR1VJRCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGFza0xpc3QpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBtb3ZlVGFza1RvTmV3UHJvamVjdCIsImZ1bmN0aW9uIHNvcnRBbHBoYWJldGljYWxseUFaKCl7XG4gICAgdGhpcy50YXNrTGlzdC5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgIGlmIChhLnRpdGxlLnRvVXBwZXJDYXNlKCkgPiBiLnRpdGxlLnRvVXBwZXJDYXNlKCkpe1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoYS50aXRsZS50b1VwcGVyQ2FzZSgpIDwgYi50aXRsZS50b1VwcGVyQ2FzZSgpKXtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KVxufVxuXG5cblxuXG5cblxuLy8gZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBzb3J0QWxwaGFiZXRpY2FsbHlBWjsiLCJmdW5jdGlvbiBzb3J0QWxwaGFiZXRpY2FsbHlaQSgpe1xuICAgIHRoaXMudGFza0xpc3Quc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICBpZiAoYi50aXRsZS50b1VwcGVyQ2FzZSgpID4gYS50aXRsZS50b1VwcGVyQ2FzZSgpKXtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGIudGl0bGUudG9VcHBlckNhc2UoKSA8IGEudGl0bGUudG9VcHBlckNhc2UoKSl7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSlcbn1cblxuLy8gZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBzb3J0QWxwaGFiZXRpY2FsbHlaQTsiLCJmdW5jdGlvbiBzb3J0QnlDb21wbGV0aW9uU3RhdHVzRlQoKXtcbiAgICB0aGlzLnRhc2tMaXN0LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgaWYgKGEuY29tcGxldGlvblN0YXR1cygpID4gYi5jb21wbGV0aW9uU3RhdHVzKCkpe1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoYS5jb21wbGV0aW9uU3RhdHVzKCkgPCBiLmNvbXBsZXRpb25TdGF0dXMoKSl7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSlcbn07XG5cblxuXG5cbi8vIGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgc29ydEJ5Q29tcGxldGlvblN0YXR1c0ZUIiwiZnVuY3Rpb24gc29ydEJ5Q29tcGxldGlvblN0YXR1c1RGKCl7XG4gICAgdGhpcy50YXNrTGlzdC5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgIGlmIChiLmNvbXBsZXRpb25TdGF0dXMoKSA+IGEuY29tcGxldGlvblN0YXR1cygpKXtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGIuY29tcGxldGlvblN0YXR1cygpIDwgYS5jb21wbGV0aW9uU3RhdHVzKCkpe1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pXG59O1xuXG5cblxuXG4vLyBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IHNvcnRCeUNvbXBsZXRpb25TdGF0dXNURiIsImZ1bmN0aW9uIHNvcnRCeUNyZWF0aW9uRGF0ZU5ld09sZCgpe1xuICAgIHRoaXMudGFza0xpc3Quc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICByZXR1cm4gYi5nZXRDcmVhdGlvbkRhdGUoKSAtIGEuZ2V0Q3JlYXRpb25EYXRlKCk7XG4gICAgfSk7XG59O1xuXG4vLyBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IHNvcnRCeUNyZWF0aW9uRGF0ZU5ld09sZDsiLCJmdW5jdGlvbiBzb3J0QnlDcmVhdGlvbkRhdGVPbGROZXcoKXtcbiAgICB0aGlzLnRhc2tMaXN0LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgcmV0dXJuIGEuZ2V0Q3JlYXRpb25EYXRlKCkgLSBiLmdldENyZWF0aW9uRGF0ZSgpO1xuICB9KTtcbn07XG5cblxuXG5cbi8vIGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgc29ydEJ5Q3JlYXRpb25EYXRlT2xkTmV3IiwiZnVuY3Rpb24gc29ydEJ5Q3VzdG9tT3JkZXIodGFza0xpc3QsIGZyb20sIGN1c3RvbU9yZGVyKXtcbiAgICBjb25zdCBhcnJheU1vdmUgPSByZXF1aXJlKCdhcnJheS1tb3ZlJyk7XG4gICAgdGhpcy50YXNrTGlzdCA9IGFycmF5TW92ZSh0YXNrTGlzdCwgZnJvbSwgY3VzdG9tT3JkZXIpO1xufVxuXG4vLyBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IHNvcnRCeUN1c3RvbU9yZGVyOyIsImZ1bmN0aW9uIHNvcnRCeUR1ZURhdGVOZXdPbGQoKXtcbiAgICB0aGlzLnRhc2tMaXN0LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgcmV0dXJuIGIuZHVlRGF0ZSAtIGEuZHVlRGF0ZTtcbiAgfSk7XG59O1xuXG5cblxuXG4vLyBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IHNvcnRCeUR1ZURhdGVOZXdPbGQiLCJmdW5jdGlvbiBzb3J0QnlEdWVEYXRlT2xkTmV3KCl7XG4gICAgdGhpcy50YXNrTGlzdC5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgIHJldHVybiBhLmR1ZURhdGUgLSBiLmR1ZURhdGU7XG4gIH0pO1xufTtcblxuXG5cblxuLy8gZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBzb3J0QnlEdWVEYXRlT2xkTmV3IiwiZnVuY3Rpb24gc29ydEJ5UHJpb3JpdHlIaUxvKCl7XG4gICAgdGhpcy50YXNrTGlzdC5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgIGlmIChiLnByaW9yaXR5ID4gYS5wcmlvcml0eSl7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIGlmIChiLnByaW9yaXR5IDwgYS5wcmlvcml0eSl7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSlcbn07XG5cblxuXG5cbi8vIGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgc29ydEJ5UHJpb3JpdHlIaUxvIiwiZnVuY3Rpb24gc29ydEJ5UHJpb3JpdHlMb0hpKCl7XG4gICAgdGhpcy50YXNrTGlzdC5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgIGlmIChhLnByaW9yaXR5ID4gYi5wcmlvcml0eSl7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIGlmIChhLnByaW9yaXR5IDwgYi5wcmlvcml0eSl7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSlcbn07XG5cblxuXG5cbi8vIGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgc29ydEJ5UHJpb3JpdHlMb0hpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tIFwiLi9BcHBsaWNhdGlvbi9wcm9qZWN0TW9kdWxlXCI7XG5cblxuLy8gY29udGVudCBkaXYsIGFuZCBpdHMgY2hpbGRyZW5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTsgXG5cblxuXG5cblxuXG4vLyBvbi1sb2FkXG4vLyB3aW5kb3cucHJvamVjdE1vZHVsZSA9IHByb2plY3RNb2R1bGU7XG4vLyBwcm9qZWN0TW9kdWxlLmNyZWF0ZUxpc3QoXCJEZWZhdWx0IExpc3RcIik7XG4vLyBwcm9qZWN0TW9kdWxlLmxpc3RzQXJyYXlbMF0uY3JlYXRlVGFzayhcImFyYm9yIHRoZSB0cmVlc1wiLCBcImJjIGkgaGF0ZSBzaGFkZVwiLCBcIjQvMTAvMjAyMlwiLCAxKTtcbi8vIHByb2plY3RNb2R1bGUubGlzdHNBcnJheVswXS5jcmVhdGVUYXNrKFwiY3V0IHRoZSBjaGVlc2VcIiwgXCJhbGwgaSBjYW4gZWF0IGlzIGNoZWVzZVwiLCBcIjkvMS8yMDIxXCIsIDMpO1xuLy8gcHJvamVjdE1vZHVsZS5saXN0c0FycmF5WzBdLmNyZWF0ZVRhc2soXCJiYWtlIHRoZSBjYWtlXCIsIFwiY29va2luZyBpcyBmdW5cIiwgXCIxMi8xNy8yMDIxXCIsIDIpO1xuXG5jb25zdCBwcm9qZWN0ID0gcHJvamVjdE1vZHVsZTtcbnByb2plY3QuY3JlYXRlTGlzdChcIkhvbWVcIik7XG5wcm9qZWN0Lmxpc3RzQXJyYXlbMF0uY3JlYXRlVGFzayhcInRha2Ugb3V0IHRoZSB0cmFzaFwiLCBcIml0cyB0aHVyc2RheVwiLCBcIjgvMTIvMjAyMVwiLCAzKTtcbnByb2plY3QubGlzdHNBcnJheVswXS5jcmVhdGVUYXNrKFwiZmxpcCB0aGUgcGlja2xlc1wiLCBcInRoZXkgbGVha2luZyFcIiwgXCI4LzE1LzIwMjFcIiwgMik7XG5wcm9qZWN0Lmxpc3RzQXJyYXlbMF0uY3JlYXRlVGFzayhcIndhbGsgdGhlIGRvZ1wiLCBcIm9yIGVsc2UgaGUnbGwgcG9vcCBpbiB0aGUgaG91c2VcIiwgXCJUb2RheVwiLCAzKTtcblxuY29uc29sZS5sb2cocHJvamVjdCk7XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==