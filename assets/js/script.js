document.addEventListener('DOMContentLoaded', () => (
    document.querySelector('form').addEventListener('submit', (e) =>{
        e.preventDefault()
        handleTodo(e.target.new_todo.value)
    } )
))

function handleTodo(todo){
    console.log(todo)
}