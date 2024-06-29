import React, { useState } from "react"
import { IToDo } from "../lib/types"
import { updateToDo, deleteToDo } from "../lib/api"

interface Props {
    todo: IToDo
    onUpdate: () => void
}

export const ToDoItem: React.FC<Props> = ({ todo, onUpdate }) => {
    const [loading, setLoading] = useState(false)

    const handleDoneClick = async () => {
        setLoading(true)
        const updatedTodo = { ...todo, completed: !todo.completed }
        await updateToDo(updatedTodo)
        onUpdate()
        setLoading(false)
    }

    const handleDeleteClick = async () => {
        setLoading(true)
        await deleteToDo(todo.id)
        onUpdate()
        setLoading(false)
    }

    return (
        <div className={`item ${todo.completed ? "completed" : ""}`}>
            <p>{todo.text}</p>
            <div>
                <button onClick={handleDoneClick} disabled={loading}>
                    {todo.completed ? "Undo" : "Done"}
                </button>
                <button onClick={handleDeleteClick} disabled={loading}>Delete</button>
            </div>
        </div>
    )
}
