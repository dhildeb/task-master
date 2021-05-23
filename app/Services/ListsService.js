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
          'Your list has been deleted.',
          'success'
        )
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
      }
    })
  }
}

export const listsService = new ListsService();

