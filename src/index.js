import projectModule from "./Application/projectModule";

// on-load
window.projectModule = projectModule;
projectModule.createList("Default List");
projectModule.listsArray[0].createTask("arbor the trees", "bc i hate shade", "4/10/2022", 1);
projectModule.listsArray[0].createTask("cut the cheese", "all i can eat is cheese", "9/1/2021", 3);
projectModule.listsArray[0].createTask("bake the cake", "cooking is fun", "12/17/2021", 2);







