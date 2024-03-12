import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import TodoInput from './TodoInput';
import TodoItem from './Todo';

function TodoPage() {

    const location = useLocation();
    const {name} = location.state

    const [todos, setTodos] = useState([]);

//Lägga till en uppgift
    const addTodo = (todoName) => {

        if (todoName.trim() !== "") {
            setTodos([...todos, {text: todoName, completed: false}])
        }

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
      <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                   
                />
            ))}
        </ul>
    </div>
  )
}

export default TodoPage

