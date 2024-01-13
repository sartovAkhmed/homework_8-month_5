import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, todoQuery } from '../store/todoSlice'

export const Todo = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()

    const handlerAddTodo = () => {
        dispatch(todoQuery())
        dispatch(addTodo({title, body}))
    }

    return (
        <div>
            <div className="container">
                <div className="todo__inner">
                    <div className="todo__title">
                        Todo
                    </div>
                    <div className="todo__form">
                        <input type="text" value={title} 
                            onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" value={body} 
                            onChange={(e) => setBody(e.target.value)} />
                        <button onClick={handlerAddTodo}>add todo</button>
                    </div>
                    <div className="todo__wrapper">
                        {todos.map((todo, index) => (
                            <div className="todo" key={index}>
                                <h2>{todo.title}</h2>
                                <p>{todo.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
