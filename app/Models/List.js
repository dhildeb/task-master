import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export class List {
    constructor({ name, color, id }) {
        this.name = name
        this.color = color
        this.id = id || generateId()
    }

    get Template() {

        return /*html*/`
        <div class="col-4 my-5">
            <div class="card shadow mb-3">
                <div class="card-header"style="background-color:${this.color};">
                    <div class="d-flex justify-content-between text-light">
                        <p>${this.name}</p>
                        <button class="btn btn-danger posision-absolute" onclick="">X</button>
                    </div>
                    <p class="text-light">${this.done}/${this.todo}</p>
                 </div>
                 <div id="${this.id}" class="card-body" style="color: ${this.color}; min-height: 300px;">
                    <li class="card-text p-1 d-flex justify-content-between">
                        <p>create tasks!</p>
                        <button class="btn btn-danger">X</button>
                    </li>
                 </div>
                 <form onsubmit="app.todosController.addTodo(event,'${this.id}')">
                    <div class="d-flex p-3">
                        <input type="text" name="task" placeholder="Add Task...">
                        <button class="btn btn-transparent">+</button>
                    </div>
                 </form>
                 </div>
                 </div>
                 `
    }
    get tasks() {
        let template = ''

        let tasks = ProxyState.todos.filter(t => t.listId == this.id)

        tasks.forEach(t => template += t.Template)

        return template
    }
}
