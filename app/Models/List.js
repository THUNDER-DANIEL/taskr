import { GenerateId } from "../Utils/GenerateId.js"

export default class List {
    constructor(id = GenerateId(), name, taskId) {
      this.id = id
      this.name = name
      this.taskId = taskId
    }

    get Template() {
      return `
      <li>${this.name} <i class="fas fa-times ml-2 text-danger" 
      onclick="app.listController.deleteList('${this.id}')"></i></li>`
    }
  }