import React, { useState } from "react"
import "../index.css"
const Form = ({ setFilteredTodos, filterTodos, staus, setStatus, todo, input, setInput, todos, handleChange, handleSubmit, setTodos }) => {

    const handleStatus = (e) => {
        setStatus(e.target.value)

    }

    return (
        <div>
            <h1 className="heading">To Do App</h1>
            <div className="input_div">
                <input className="input" onChange={handleChange} value={input} placeholder="Input here"></input>
                <div className="btn_select">
                    <button className=" input_btn " onClick={handleSubmit}>Add</button>
                    <select className="input_select" onChange={handleStatus}>
                        <option value="all">All</option>
                        <option value="completed" >Completed</option>
                        <option value="uncompleted">Uncompleted</option>

                    </select>
                </div>
            </div>
        </div>
    )
}
export default Form;