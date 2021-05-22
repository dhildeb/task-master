import { generateId } from "../Utils/generateId.js"

export class List {
    constructor({ name, color, id }) {
        this.name = name
        this.color = color
        this.id = id || generateId()
    }

}
