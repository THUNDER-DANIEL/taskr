import{ ProxyState } from "../AppState.js"
import { GenerateId } from "../Utils/GenerateId.js"



export default class Task {
    constructor(id = GenerateId(), name, quantity,color) {
        this.id = id
        this.name = name
        this.quantity = 0
        this.color = color
    }






    get Template() {

        return /*html*/`
        <div class="col-md-4">
        <div class="pizza-card shadow bg-white rounded">
            <div class="text-center ${this.name} p-2 d-flex justify-content-between">
                <h3>${this.name}</h3>
                <i class="fas fa-times ml-2" onclick="app.tasksController.deleteTask('${this.id}')"></i>
            </div>
            <div class="p-3">
                <ul>
                    ${this.Ingredients}
                </ul>
            </div>


            <form class="d-flex p-2" onsubmit="app.listsController.addList('${this.id}')">
                <input type="text" name="name" id="name" class="form-control" placeholder="List Item"
                    aria-describedby="helpId">
                <button type="submit" class="btn btn-success" title='add list'><i
                        class="fas fa-plus"></i></button>
            </form>
        </div>
      </div>
        `
    }


    get Lists() {
        let ings = ProxyState.ingredients.filter(i => i.taskId === this.id)
        let template = ''
        ings.forEach(i => template += i.Template)
        return template
      }

}
