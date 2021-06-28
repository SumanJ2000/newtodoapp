import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../index.css"
import trash from "./images/trash-solid.png"
const Formlist = ({ filteredTodos, setFilteredTodos, todo, text, id, completed, setTodos, todos, input, setInput }) => {

    const handleDelete = () => {
        setTodos(todos.filter((item) =>
            item.id !== todo.id)
        )
    }

    const handleComplete = () => {
        setTodos(todos.map((el) => {
            if (el.id === todo.id) {
                return {
                    ...el, completed: !el.completed
                }
            }
            return el
        }))
    }


    return (

        <div className="list">
            <div className="text"> <span className={`list_text ${todo.completed ? "completed" : ""}`}>{text}</span></div>
            <div className="list_btn">
                <button onClick={handleComplete} className="btn_complete ">+</button>
                <button onClick={handleDelete} className="btn_delete ">-</button>
            </div>
        </div>
    )
}
export default Formlist;