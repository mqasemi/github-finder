import React,{useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import GithubContext from '../context/github/GithubCOntext'

function User() {
    const param=useParams()
    const {user,getUser}=useContext(GithubContext);
    useEffect(()=>{
        getUser(param.login)
    },[])
   
    console.log(param)
  return (
    <div>{param.login}</div>
  )
}

export default User