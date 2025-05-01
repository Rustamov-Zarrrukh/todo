import { Todo } from "./components/Todo.js"
import { todos } from "./utils/db.js"
import { reload } from "./utils/reload.js"




const gridContainer = document.querySelector(".grid")
const form = document.forms.namedItem("add")
const inp = document.forms.namedItem("add").elements.namedItem("input")
const exit = document.querySelector(".exit")




form.onsubmit = (e) => {
    e.preventDefault()

    const todo = {
        id: crypto.randomUUID(),
        title:inp.value,
        time: new Date().toLocaleTimeString()
    }

    todos.push(todo)

    reload(todos, Todo, gridContainer)

}



reload(todos, Todo, gridContainer)

