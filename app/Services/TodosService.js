import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"

class TodosService {

  addTodo(task) {
    ProxyState.todos = [...ProxyState.todos, new Todo(task)]
    console.log(ProxyState.todos)
  }

}

export const todosService = new TodosService()