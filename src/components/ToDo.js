import React from 'react'
import {AiFillDelete} from "react-icons/ai"

const ToDo = ({ text, ravi, prem, deleteToDo, updateP, updateR }) => {
    return (
        <div className="todo">
            <div className="text"><a href={text} style={{color: "White"}} target='blank'>{text}</a></div>
            <div className="icons">
                <AiFillDelete className='icon' onClick={deleteToDo} />
                <button onClick={() => updateP(prem?false:true)} style={{backgroundColor:prem?"Green":"Red", color:"White"}}>P</button>
                <button onClick={() => updateR(ravi?false:true)} style={{backgroundColor:ravi?"Green":"Red", color:"White"}}>R</button>
            </div>
        </div>
    )
}

export default ToDo
