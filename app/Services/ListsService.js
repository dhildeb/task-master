import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveData } from "../Utils/LocalStorage.js"

class ListsService {
  constructor() {
    ProxyState.on("lists", saveData)
  }
  addList(listData) {
    ProxyState.lists = [...ProxyState.lists, new List(listData)]
  }

  deleteList(id) {
    if (confirm("are you sure you want to delete this list?")) {

      ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    }
  }
}

export const listsService = new ListsService();

