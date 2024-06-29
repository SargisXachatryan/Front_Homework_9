// src/lib/api.ts
import axios from "axios"
import { IToDo } from "./types"

const URL = "http://localhost:3004/todos"

export const getAllTodos = async (): Promise<IToDo[]> => {
    const response = await axios.get(URL)
    return response.data
}

export const addToDo = async (obj: Omit<IToDo, "id">): Promise<IToDo> => {
    const response = await axios.post(URL, obj)
    return response.data
}

export const updateToDo = async (todo: IToDo): Promise<IToDo> => {
    const response = await axios.put(`${URL}/${todo.id}`, todo)
    return response.data
}

export const deleteToDo = async (id: string): Promise<void> => {
    await axios.delete(`${URL}/${id}`)
}
