import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { saveData } from "../Utils/LocalStorage.js"

class TodosService {
  constructor() {
    ProxyState.on("todos", saveData)
  }
  addTodo(task) {
    ProxyState.todos = [...ProxyState.todos, new Todo(task)]
  }

  done(taskId) {
    console.log(taskId)
    let doneTask = ProxyState.todos.find(t => t.id == taskId)
    doneTask.done ? doneTask.done = false : doneTask.done = true
    ProxyState.todos = ProxyState.todos
    console.log(doneTask)
  }

  deleteTodo(id) {
    if (confirm("are you sure you want to delete this task?")) {

      ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    }
  }
}

export const todosService = new TodosService()