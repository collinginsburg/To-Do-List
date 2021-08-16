import projectModule from "./Application/projectModule";
import './styles.css';
import main from "./UI/ui-main";
import nav from "./UI/ui-nav"


// content div, and its children
let content = document.createElement('div'); 
content.setAttribute('id','content');
document.body.appendChild(content);

// append to content
content.appendChild(main);
content.appendChild(nav);






// on-load
// window.projectModule = projectModule;
// projectModule.createList("Default List");
// projectModule.listsArray[0].createTask("arbor the trees", "bc i hate shade", "4/10/2022", 1);
// projectModule.listsArray[0].createTask("cut the cheese", "all i can eat is cheese", "9/1/2021", 3);
// projectModule.listsArray[0].createTask("bake the cake", "cooking is fun", "12/17/2021", 2);


// on load
window.project = projectModule; // create overall project
project.createList("Home"); // create default list and 3 list items
project.listsArray[0].createTask("take out the trash", "its thursday", "8/12/2021", 3);
project.listsArray[0].createTask("flip the pickles", "they leaking!", "8/15/2021", 2);
project.listsArray[0].createTask("walk the dog", "or else he'll poop in the house", "Today", 1);

//set regulator module to selected project
let defaultListGUID = project.listsArray[0].getGUID();
// console.log(defaultListGUID);

console.log(project);







