import React from 'react'
import { useReducer } from 'react'

export const Reducers = () => {
    const reducer=(state,action)=>{
        switch(action.type){
            case "submit":
               if(!state.UserName || !state.email){
                return {...state,error:'All fields are required!'};
               }
               console.log("Form submit successfully:",state);
               alert("Form submit successfully");
               return {state}

            case "change":
                return {...state,[action.name]:action.value,error:""}
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {UserName:"",email:"",error:""});
    const handleClick=(event)=>{
        event.preventDefault();
        dispatch({type:"submit"})
    }
    const handleChange=(event)=>{
        dispatch({type:"change",name:event.target.name,value:event.target.value})

    }
  return (
    <div>
        <form onSubmit={handleClick}>
            <input type="text"/>
            <input type='text' onChange={handleChange}/>
            {state.error && <p style={{color:'red'}}></p>}
            <button type='submit'>Click Here</button>
        </form>
        
    </div>
  )
}
