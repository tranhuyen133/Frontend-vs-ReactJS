import React, { useReducer } from 'react'
//b1: xay dung kieu du lieu cho state
interface State{
    count: number
    name:string

}
//b2:xay dung kieu du lieu cho action
type Action = {type: "INCREASE"} | 
{type: "DECREASE"} | 
{type: "SET_NAME" , payload: string}

//b3:xay dung ham reducer
function reducer(state:State, action: Action){
    switch (action.type){
        case 'INCREASE':
            return{
                ...state,
                count: state.count + 1 
            }
        case 'DECREASE':
            return{
                ...state,
                count: state.count - 1 
            }
        case 'SET_NAME':
            return{
                ...state,
                name: action.payload 
            }
            default:
                return state
    }
}
//b4:su dung UseReducer
function DemoUseReducer() {
    const [state,dispatch] = useReducer(reducer,{count:0 , name :''})
  return (
    <div>
      <h3>DemoUseReducer</h3>
      <p>{state.name}</p>
      <p>{state.count}</p>
      <button onClick={() => {dispatch({ type:"INCREASE"})}}>Tang</button>
      <button onClick={() => {dispatch({ type:"DECREASE"})}} >Giam</button>
      <button onClick={() => {dispatch({ type:"SET_NAME", payload :"Ten moi"})}} ></button>


    </div>
  )
}

export default DemoUseReducer
