document.addEventListener('DOMContentLoaded', () => (
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        buildTodo(e.target.new_todo.value)
    } )
))

function buildTodo(todo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = ' x '
    p.textContent = `${todo} `
    p.appendChild(btn)
    console.log(p)
    // document.querySelector('#btn').appendChild(btn)
    document.querySelector('#todo').appendChild(p)
}

function handleDelete(e) {
    e.target.parentNode.remove()
}