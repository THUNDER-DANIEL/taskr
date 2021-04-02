import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {
  addTask() {
      console.log('Service-Task')
  }
}

export const tasksService = new TasksService();