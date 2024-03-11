import React from 'react'
import { useLocation } from 'react-router-dom'

function TodoPage() {

    const location = useLocation();
    const {name} = location.state

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
      
    </div>
  )
}

export default TodoPage

