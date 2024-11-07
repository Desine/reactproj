import React from "react";


export default function Footer({ todos }) {
    return (
        <div className="footer">
            <span>
                Todos: &nbsp; {todos.length ? todos.length : 0}
            </span>
            <span>
                Opened: &nbsp; {todos.length ? todos.filter(task => !task.comlited).length : 0}
            </span>
            <span>
                Complited: &nbsp; {todos.length ? todos.filter(task => task.comlited).length : 0}
            </span>
        </div>
    )
}