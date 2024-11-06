import React from "react";

export default function Todo({ todo, setTodos, todos }) {
  function completeTodo(todo) {
    let newTodos = todos.map(task =>{
      if(task.id === todo.id){
        return {...task, completed: !todo.completed}
      }
      return task
    })
    setTodos(newTodos)
  }



  return (
    <div className="todo">
      <div className={todo.completed ? 'completed' : ''}>
        <input 
        type="checkbox" 
        checked={todo.completed}
         className="checkbox"
         onChange={()=>completeTodo(todo)}/>
        <label htmlFor={`check-${todo.id}`}>{todo.title}</label>
        <i className="icon" width='30' height='30' src='https://img.icons8.com/?size=30&id=99933&format=png&color=000000'/>
      </div>
    </div>
  );
}