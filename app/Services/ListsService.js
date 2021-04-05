import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService {
  deleteList(id) {
    console.log("Delete List Service")
    ProxyState.lists = ProxyState.lists.filter(i => i.id != id)
    console.log(ProxyState.lists)
    
    saveState()

  }


  checkBx(id) {

    console.log(id)
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text-"+ id);
    let found = ProxyState.lists.find(x => x.id == id)
    
    // If the checkbox is checked, display the output text
    if (found.completed == false ){
      text.style.display = "block";
      found.completed = true
    } else {
      text.style.display = "none";
      found.completed = false
    }
    saveState()
  }


  deleteAlert(){
    console.log("Alert")
    window.confirm("Do you really want to Delete?")

  } 


  addList(newIng) {
    ProxyState.lists.push(new List(newIng.name, newIng.taskId, newIng.id))
    ProxyState.lists = ProxyState.lists
    console.log(ProxyState.lists)
    saveState()
  }
}

export const listsService = new ListsService();