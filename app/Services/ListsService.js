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
//   editList(id){
//     ProxyState.lists = ProxyState.filter(x =>i.id == id)
//     saveState()
//   }

  addList(newIng) {
    console.log("ADD LIST SERVICE")
    ProxyState.lists.push(new List(newIng.name, newIng.taskId, newIng.id))
    ProxyState.lists = ProxyState.lists
    saveState()
  }
}

export const listsService = new ListsService();