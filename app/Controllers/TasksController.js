import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { TasksService } from "../Services/TasksService.js";
import { loadState } from "../Utils/LocalStorage.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let template = ''
  if (tasks.length == 0) {
    template += '<div class="col text-center"><p><em>No Work</em><p></div>'
  }

  values.forEach(v => template += v.Template)


  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  <div className="card-columns values">
      ${template}
  </div>
  `
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
    let rawTask= {
      name: form['name'].value,
      color: form['color'].value
    }
    tasksService.addValue(rawTask)
    // @ts-ignore
    form.reset()
  }

  deleteList(id){
      listsService.deleteList(id)
  }

}
