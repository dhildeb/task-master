import { ListsController } from "./Controllers/ListsController.js";
import { TodosController } from "./Controllers/TodosController.js";

class App {
  // valuesController = new ValuesController();

  listsController = new ListsController()
  todosController = new TodosController()
}

window["app"] = new App();
