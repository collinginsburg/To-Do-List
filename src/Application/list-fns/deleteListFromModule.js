function deleteListFromModule(GUID){
    let index = this.listsArray.findIndex(list => list.getGUID() === GUID);
    this.listsArray.splice(index, 1);
}


// export
export default deleteListFromModule