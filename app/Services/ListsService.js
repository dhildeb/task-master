import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
  addList(listData) {
    ProxyState.lists = [...ProxyState.lists, new List(listData)]
    console.log(listData)
  }
}

export const listsService = new ListsService();

