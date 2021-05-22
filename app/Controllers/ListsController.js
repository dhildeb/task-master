import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadData } from "../Utils/LocalStorage.js";


function _draw() {
  let lists = ProxyState.lists
  let template = ''

  lists.forEach(l => {
    let tasks = ProxyState.todos.filter(t => t.listId == l.id)
    let completed = tasks.filter(t => t.done)
    template += `
    <div class="col-4 my-5">
      <div class="card shadow mb-3">
          <div class="card-header"style="background-color:${l.color};">
              <div class="d-flex justify-content-between text-light">
                  <p>${l.name}</p>
                  <i title="delete list" class="fa fa-times" aria-hidden="true" onclick="app.listsController.deleteList('${l.id}')"></i>
              </div>
              <p class="text-light">${completed.length}/${tasks.length}</p>
          </div>
          <div class="card-body" style="color: ${l.color}; min-height: 300px;">
          `

    tasks.forEach(t2 => {
      template += `
                <li class="card-text p-1 d-flex justify-content-between">
                  <input onclick="app.todosController.done('${t2.id}')" class="align-self-center" type="checkbox" ${t2.done ? 'checked' : ''}>
                  <p class="px-2 text-center" style="${t2.done ? 'text-decoration: line-through;' : ''}">${t2.task}</p>
                  <button title="delete task" class="btn btn-danger" onclick="app.todosController.deleteTodo('${t2.id}')"><i class="fa fa-times" aria-hidden="true"></i></button>
                </li>
                `
    })
    template += `
    </div>
          <form onsubmit="app.todosController.addTodo(event,'${l.id}')">
            <div class="d-flex p-3">
                <input type="text" name="task" placeholder="Add Task..." minlength="3" maxlength="50" required>
                <button title="add task" class="btn btn-transparent">+</button>
            </div>
          </form>
      </div>
    </div>
         `

  })
  document.getElementById('lists').innerHTML = template
}

export class ListsController {
  constructor() {
    ProxyState.on("lists", _draw)
    ProxyState.on("todos", _draw)
    loadData()
    _draw()
  }

  addList(event) {
    event.preventDefault()
    let form = event.target
    let newList = {
      name: form.name.value,
      color: form.color.value,
    }
    listsService.addList(newList)
    form.reset()
  }
  deleteList(id) {
    listsService.deleteList(id)
  }

}
