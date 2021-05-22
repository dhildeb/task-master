import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Todo } from "../Models/Todo.js";




export function saveData() {
  localStorage.setItem("task-master", JSON.stringify({
    lists: ProxyState.lists,
    todos: ProxyState.todos
  }))
}

export function loadData() {
  let data = JSON.parse(localStorage.getItem("task-master"))
  if (data) {
    ProxyState.lists = data.lists.map(l => new List(l))
    ProxyState.todos = data.todos.map(t => new Todo(t))
  }
}