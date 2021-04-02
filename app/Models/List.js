import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor(id = generateId(), name, listQty) {
      this.id = id
      this.name = name
      this.listQty = 0
    }
  
    get Template() {
      return `
      <li>${this.name} <i class="fas fa-times ml-2 text-danger" 
      onclick="app.listController.deleteList('${this.id}')"></i></li>`
    }
  }