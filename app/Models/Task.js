import{ ProxyState } from "../AppState.js"
import { GenerateId } from "../Utils/GenerateId.js"



export default class Task {
    constructor(name, color, id = GenerateId()) {
        this.name = name
        this.color = color
        this.id = id
    }


    // TODO get all list of tasks (see pizzashack toppings)
    // TODO fliter list on to completed 

    get Template() {
        return /*html*/`
        <div class="task-card shadow bg-${this.color} my-3 rounded">
            <div class="text-center ${this.name}p-2 d-flex justify-content-between">
                <h4>${this.name} \ ${this.id}</h4>
                <button type="sumbit" onclick="app.tasksController.deleteTask('${this.id}')">Delete ${this.name}</button>
            </div>
            <div class="p-3">
            <ul>
                ${this.Lists}
            </ul>
            </div>

            <form class="d-flex p-2" onsubmit="app.listsController.addList('${this.id}')">
                <input type="text" name="name" id="name" class="form-control" placeholder="Add List Item  ===>"
                    aria-describedby="helpId" required>
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
