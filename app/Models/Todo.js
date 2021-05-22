import { generateId } from "../Utils/GenerateId.js"

export class Todo {
  constructor({ done, task, listId }) {
    this.done = done
    this.task = task
    this.listId = listId
    // this.id = id || generateId()
  }

  get Template() {

    return /*html*/`
    <li class="card-text p-1 d-flex justify-content-between">
        <p>${this.task}</p>
        <button class="btn btn-danger">X</button>
    </li>
    `
  }
}