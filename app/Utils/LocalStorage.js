import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";


export function saveState() {
  localStorage.setItem('taskr', JSON.stringify({
    tasks: ProxyState.tasks,
    lists: ProxyState.lists
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskr'))
  if (data) {
    ProxyState.tasks = data.tasks.map(task => new Task(task.name, task.color, task.id));
    ProxyState.lists = data.lists.map(list => new List(list.name, list.taskId, list.id));
  }
}

