import { generateId } from "../Utils/generateId.js"

export class Todo {
  constructor({ done, task, listId, id }) {
    this.done = done
    this.task = task
    this.listId = listId
    this.id = id || generateId()
  }
}