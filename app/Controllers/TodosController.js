import { todosService } from "../Services/TodosService.js"
import { loadData } from "../Utils/LocalStorage.js"


export class TodosController {

  constructor() {
    loadData()
  }

  addTodo(event, listId) {
    event.preventDefault()

    let form = event.target
    let newTask = {
      done: false,
      task: form.task.value,
      listId: listId
    }

    todosService.addTodo(newTask)
    form.reset()
  }

  done(taskId) {
    todosService.done(taskId)
  }

  deleteTodo(id) {
    todosService.deleteTodo(id)
  }
}