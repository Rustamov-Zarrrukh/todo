export function Todo(item) {
    const div = document.createElement("div")
    const left = document.createElement("div")
    const title = document.createElement("h3")
    const time = document.createElement("span")
    const del = document.createElement("button")


    div.classList.add("todo")
    left.classList.add("left")
    title.classList.add("title")
    time.classList.add("time")

    
    
    title.innerHTML = item.title
    time.innerHTML = item.time

    del.innerHTML = `
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
            <use href="./public/icons/sprite.svg#close"></use>
        </svg>
    `

    div.append(left, del)
    left.append(title, time)

    return div
}