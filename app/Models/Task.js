import{ ProxyState } from "../AppState.js"
import { GenerateId } from "../Utils/GenerateId.js"



export default class Task {
    constructor(id = GenerateId(), name, quantity,color) {
        this.id = id
        this.name = name
        this.quantity = quantity
        this.color = color
    }






    get Template() {

        return /*html*/`
        <div class="card p-2 value">
            ${this.id}
        </div>
        `
    }
}
