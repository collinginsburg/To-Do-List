import displayTasks from "./displayTasks";
import displayProjects from "./displayProjects";
import uiRegulator from "./ui-regulator";


function chooseProject(e){
    if (e.target.getAttribute("data-index") !== uiRegulator.currentDisplayGUID){
        uiRegulator.currentDisplayGUID = e.target.getAttribute("data-index");
        displayTasks();
        displayProjects();
    }
}

export default chooseProject;