import { GenerateId } from "../Utils/GenerateId.js"


export default class List {
    constructor(name, taskId, completed, id = GenerateId()) {
      this.name = name
      this.taskId = taskId
      this.completed = completed || false
      this.id = id
    }

    get Template() {
      return `
      <li>
      <input type="checkbox" ${this.completed ==true ?'checked' : ''} onclick="app.listsController.checkBx('${this.id}')" id="myCheck">
      ${this.name} 
      <p id="text-${this.id}" ${this.completed ==true ?'' : 'style="display:none"'}>
      <button type="sumbit" onclick="app.listsController.deleteList('${this.id}')" text-danger>Delete</button>
      </p>
      </i>
      </li>
      `
    }
  }