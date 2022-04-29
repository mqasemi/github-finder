const AlertReducer=(state,action)=>{

    switch(action.type){
        case "SET_MESSAGE":
            return {...state,
            msg:action.payload.msg,type:action.payload.type }
        case "CLEAR_MESSAGE":
            return {...state,msg:null,type:null}
        default:
            return {...state};
    }
}
export default AlertReducer;
