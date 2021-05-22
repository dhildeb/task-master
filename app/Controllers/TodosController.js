import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"

function _drawTodos() {
  let template = ''
  // ProxyState.todos.forEach(t => template += t.Template)
  console.log(ProxyState.lists)
  ProxyState.todos.forEach(t => {
    template = t.Template
    console.log(t.id)
    document.getElementById(`${t.listId}`).innerHTML = template
  })
  // document.getElementById("tasks").innerHTML = template
}

export class TodosController {

  constructor() {
    ProxyState.on("todos", _drawTodos)

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

  }
}