import { Dispatch } from "react"

export interface IToDo{
    id:string
    text:string
    completed:boolean
}
export enum FilterTypes{
    all,
    actve,
    completed
}

export interface IState{
    todos:IToDo[]
    currentFilter:FilterTypes
}

export enum ActionTypes{
    add,
    remove,
    update,
    put
}
 
export interface IAction{
    type:ActionTypes
    payload:unknown
}

export interface IContextType{
    state:IState
    dispatch:Dispatch<IAction>
}