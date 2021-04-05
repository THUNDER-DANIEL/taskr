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


  deleteList(id) {
    console.log("delete LIST CON")
    listsService.deleteList(id)
  }

  checkBx() {
    console.log("CHECK BOX COntroller")
    listsService.checkBx()
  }




  deleteAlert(){
    console.log("Alert")
    listsService.deleteAlert()

  } 

}