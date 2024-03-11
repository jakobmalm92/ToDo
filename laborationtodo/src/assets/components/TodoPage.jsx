import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import TodoInput from './TodoInput';

function TodoPage() {

    const location = useLocation();
    const {name} = location.state

    const [todos, setTodos] = useState([]);

//Lägga till en uppgift
    const addTodo = () => {

    }


    //Ta bort en uppgift
    const removeTodo = () => {

    }


    // Markera om uppgiften är klar eller inte
    const todoCompleted = () => {

    }
  return (
    <div>
      <h1>Välkommen {name}!</h1>
      <TodoInput addTodo={addTodo}/>
    </div>
  )
}

export default TodoPage

