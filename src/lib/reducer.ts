import { ActionTypes, IToDo, type IAction, type IState } from "./types"

export const reducer=(state:IState,action:IAction)=>{
    switch(action.type){
        case ActionTypes.put:
            return {
                ...state,todos:action.payload as IToDo[]
            }
            case ActionTypes.add:
                return {
                    ...state,
                    todos:[...state.todos,action.payload as IToDo]
                }
                
        default:
            return state
    }
}