import React, { useState } from 'react'

export default function Form({todos, setTodos}) {
    const [value, setValue] = useState("")


    function addTodo(e){
        e.preventDefault()

        if(value){
            let newTodo = {
                id: new Date().getTime(),
                title: value,
                completed: false,
            }
            console.log(newTodo)

            setValue('')
            setTodos([...todos, newTodo ])
        }
    }

    return (
        <form className='form' onSubmit={addTodo}>
            <input
                type='text'
                placeholder='Press Enter to add a task'
                value={value}
                onInput={(e) => setValue(e.target.value)}
            />
        </form>
    )
}
