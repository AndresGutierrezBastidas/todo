const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => {return '<li>' + t + '</li>'});
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elementos, i) =>{
        elementos.addEventListener('click',() =>{
            elementos.parentNode.removeChild(elementos);
            todos.splice(i,1)
            actualizaTodos(todos)
            render()
        })
    })
}
const actualizaTodos = (todos) => {
    const todoString = JSON.stringify(todos)
    localStorage.setItem('todos', todoString)
}
window.onload = () =>{
    render()
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) =>{
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actualizaTodos(todos)
        render();
    }
}