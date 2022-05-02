const githubReducer=(state,action)=>{
console.log(action)
switch(action.type){
    case"CLEAR_USERS":
        return {...state,users:[]}
    case "GET_USERS":
        return {
            ...state,users:action.payload,
            loading:false
        }
    case "GET_USER":
        return { ...state , user:action.payload}
    case "SET_LOADING":
        return {
            ...state,
            loading:true
        }
    default:
        return state;
}
}
export default githubReducer;