import { GenerateId } from "../Utils/GenerateId.js"

// TODO add if else to return different template based on T / F

export default class List {
    constructor(name, taskId, id = GenerateId()) {
      this.name = name
      this.taskId = taskId
      this.id = id
    }
    //   this.completed = false



    get Template() {
      return `
      <li>
      <input type="checkbox" onclick="app.listsController.checkBx()" id="myCheck">
      ${this.name}
      <p id="text" style="display:none">
      <button type="sumbit" onclick="app.listsController.deleteList('${this.id}'), app.listsController.deleteAlert()" text-danger>Delete</button>
      </p>
      
      </i>
      </li>
      `
    }
    //   <i class="fas fa-trash-alt ml-2 text-danger"
    //   onclick="app.ingredientsController.deleteList('${this.id}')">
    // // <li>${this.name} ${this.id} ${this.taskId} <i class="fas fa-times ml-2 text-danger" 
    // onclick="app.listsController.deleteList('${this.id}')">Delete</i></li>
    // <a href=onclick="app.tasksController.deleteList('${this.id}')>deleter</a>
  }