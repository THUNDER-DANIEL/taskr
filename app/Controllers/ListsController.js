import { listsService } from "../Services/ListsService.js";


//Public
export default class ListsController {

  addList(taskId) {
    console.log("ADD LIST CON")
    window.event.preventDefault()
    let form = window.event.target
    let rawIng = {
      name: form['name'].value,
      taskId: taskId
    }
    listsService.addList(rawIng)
    // @ts-ignore
    form.reset()
  }
    // editList(id){
    //     listsService.editList(id)
    // }

  deleteList(id) {
    listsService.deleteIngredient(id)
  }

}