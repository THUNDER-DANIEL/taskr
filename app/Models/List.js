import { GenerateId } from "../Utils/GenerateId.js"

// TODO add if else to return different template based on T / F
export default class List {
    constructor(id = GenerateId(), name, taskId) {
      this.id = id
      this.name = name
      this.taskId = taskId
    }
    //   this.completed = false
    get Template() {
        
      return `
      <li>${this.name} <i class="fas fa-times ml-2 text-danger" 
      onclick="app.listController.deleteList('${this.id}')"></i></li>`
    }
  }