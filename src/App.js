
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from "./components/form.js"
import Formlist from "./components/formlist.js"

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {

    handlefilter()
  }, [status, todos])




  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
    console.log(input)
  }


  const handleSubmit = (e) => {
    setTodos([
      ...todos, { text: input, id: Math.random() * 1000, completed: false }
    ])
    setInput("")

  }

  const handlefilter = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  return (
    <div className="div">
      <div className="main_div">
        <Form status={status} setStatus={setStatus}
          handleSubmit={handleSubmit} handleChange={handleChange} setTodos={setTodos}
          input={input} setInput={setInput}
        />

        {filteredTodos.map(todo => (
          <Formlist todos={todos} setTodos={setTodos} input={input} setInput={setInput}
            text={todo.text} completed={todo.completed} key={todo.id} id={todo.id}
            handleSubmit={handleSubmit} todo={todo} handleChange={handleChange}
            filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos} />))}
      </div>
    </div>
  );
}

export default App;
