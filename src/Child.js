import React, { useContext } from "react"  
import { Friends } from "./App";
function Child(){
    //state
    const  students = useContext(Friends)
    //function defination

    //return statement /jsx 
    return(
        <>
            {students}
        </>
    )
}
export default Child;