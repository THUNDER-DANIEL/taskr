import{ ProxyState } from "../AppState.js"
import { GenerateId } from "../Utils/GenerateId.js"



export default class Task {
    constructor(name, color, id = GenerateId()) {
        this.name = name
        this.color = color
        this.id = id
    }






    get Template() {

        return /*html*/`
        <div class="task-card shadow bg-white my-3 rounded">
            <div class="text-center ${this.name} p-2 d-flex justify-content-between">
                <h3>${this.color} ${this.id}</h3>
                <p>${this.name}</p>
                <button type="sumbit" onclick="app.tasksController.deleteTask('${this.id}')">Delete ${this.name}</button>
            </div>
            <div class="p-3">
            </div>
            <form class="d-flex p-2" onsubmit="app.listsController.addList('${this.id}')">
            <button type="sumbit" onclick="app.tasksController.deleteTask('${this.id}')">Delete ${this.name}</button>

                <input type="text" name="name" id="name" class="form-control" placeholder="List Item"
                    aria-describedby="helpId">
                <button type="submit" class="btn btn-success" title='add list' required> + </button>
            </form>
        </div>
\        `
    }


    get Lists() {
        let ings = ProxyState.lists.filter(i => i.taskId === this.id)
        let template = ''
        ings.forEach(i => template += i.Template)
        return template
      }

}
