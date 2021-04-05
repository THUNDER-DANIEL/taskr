import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { loadState } from "../Utils/LocalStorage.js";


//Private
function _draw() {
  let tasks = ProxyState.tasks;
  let template = ''
  if (tasks.length == 0) {
    template += '<div class="col text-center"><p><em>No Work</em></p></div>'
  }

  tasks.forEach(v => template += v.Template)
  document.getElementById("display_task","display_list").innerHTML = template


// task.length filter if complete is t/f


}

//Public
export default class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw);
    ProxyState.on("lists", _draw);
    loadState()
    _draw()
  }

  addTask() {   
    window.event.preventDefault()
    let form = window.event.target
    let newTask= {
      name: form['name'].value,
      color: form['color'].value
    }
    console.log("TASK-Con")
    tasksService.addTask(newTask)
    // @ts-ignore
    form.reset()
  }

  deleteTask(id){
      if(window.confirm("Do you really want to Delete?")){
        tasksService.deleteTask(id)
      }
  }

}
