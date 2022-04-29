import {createContext,useReducer } from 'react'
import AlertReducer, {} from './AlertReducers'

const AlertContext= createContext();

export const AlertProvider=({children})=>{
 
    const initialState={
        msg:"",type:""
    }
     const [states,distpach]=useReducer(AlertReducer,initialState);


     const alertShow=(str,type)=>{
         distpach({
             type:"SET_MESSAGE",
             payload:{
                    msg:str,
                    type:type
             }
         });

         setTimeout(() => {
             distpach({
                type:"CLEAR_MESSAGE" 
             })
         }, 4000);
     }


    return <AlertContext.Provider  value={{states,alertShow


    }} >{children}</AlertContext.Provider>
}


export default AlertContext;