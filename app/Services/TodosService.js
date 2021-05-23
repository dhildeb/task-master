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
    if (doneTask.done) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Congrats on completing a task!',
        showConfirmButton: false,
        timer: 1000
      })
    }
  }

  deleteTodo(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        )
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
      }
    })
  }
}

export const todosService = new TodosService()