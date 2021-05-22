import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";


function _drawLists() {
  let template = ''
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template
}

export class ListsController {
  constructor() {
    ProxyState.on("lists", _drawLists);

    _drawLists()
  }

  addList(event) {
    event.preventDefault()
    let form = event.target
    let newList = {
      name: form.name.value,
      color: form.color.value,
    }
    listsService.addList(newList)
  }

}
