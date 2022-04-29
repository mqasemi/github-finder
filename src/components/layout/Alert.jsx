import React,{useContext} from 'react'
import AlertContext from '../../context/alert/AlertContex'

function Alert() {
    const {states} =useContext(AlertContext);

    if(states.msg){
        return (
                <div> {states.msg}</div>
            )
    }
}

export default Alert