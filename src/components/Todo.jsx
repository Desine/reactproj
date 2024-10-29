import React from 'react'

export default function Todo({ todo }) {
    return (
        <div>
            <div>
                <imput type='checkbox' placeholder='Press Enter to add a task' />
                <label htmlFor={`check-${todo.id}`}>{todo.title}</label>
            </div>
        </div>
    )
}