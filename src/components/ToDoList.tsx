import React, { useEffect, useContext } from "react"
import { getAllTodos } from "../lib/api"
import { ToDoItem } from "./ToDoItem"
import { AddToDo } from "./AddToDo"
import { ToDoContext } from "../lib/context"
import { ActionTypes } from "../lib/types"

export const ToDoList: React.FC = () => {
    const context = useContext(ToDoContext)
    if (!context) {
        throw new Error("Out of Provider...")
    }
    const { state, dispatch } = context

    const fetchTodos = async () => {
        const data = await getAllTodos()
        dispatch({ type: ActionTypes.put, payload: data })
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <div className="todo-list">
            <AddToDo />
            <div className="list">
                {state.todos.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    state.todos.map(todo => (
                        <ToDoItem key={todo.id} todo={todo} onUpdate={fetchTodos} />
                    ))
                )}
            </div>
        </div>
    )
}