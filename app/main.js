import TasksController from "./Controllers/TasksController.js";

class App {
  tasksController = new TasksController();
  listsController = new ListsController();

}

window["app"] = new App();
