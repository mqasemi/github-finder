import {createContext,useReducer} from 'react'
import githubReducer from './githubReducer';

const GithubContext=createContext();

const GithubUrl=process.env.REACT_APP_GITHUB_URL
const Github_Token=process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider=({children})=>{
    const initialState={
        users:[],
        loading:false
    }
   const[state,dispatch] =useReducer(githubReducer,initialState)
  
    const searchUsers=async (text)=>{
        setLoading();
        const params=new URLSearchParams({
            q:text
        })
        const response=await fetch(`${process.env.REACT_APP_GITHUB_URL}search/users?${params}`,{
            Headers :{
                Authorization:`Bearer ${process.env.REACT_APP_GITHUB_TOKEN} `}
        } )

        const {items}=await response.json();
      
       dispatch({
           type:"GET_USERS",
           payload: items
       })

    }


    
    const getUser=async (text)=>{
        setLoading();
       
        const response=await fetch(`${process.env.REACT_APP_GITHUB_URL}users/${text}`,{
            Headers :{
                Authorization:`Bearer ${process.env.REACT_APP_GITHUB_TOKEN} `}
        } )

        const items=await response.json();
       console.log(await response.json())
       dispatch({
           type:"GET_USER",
           payload: items
       })

    }

    const clearUsers=()=>{
        dispatch({type:"CLEAR_USERS"})
    }
  const setLoading=()=>{
      dispatch({
          type:"SET_LOADING"
      })
  }
    return <GithubContext.Provider value={{
        users:state.users,loading:state.loading,
        searchUsers,clearUsers,getUser
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext 