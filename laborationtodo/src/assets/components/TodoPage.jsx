import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import TodoInput from './TodoInput';
import Todo from './Todo';

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
    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        setTodos(newTodos)

    }


    // Markera om uppgiften är klar eller inte
    const todoCompleted = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos)
    }

    
  return (
    <div>
      <h1>Välkommen {name}!</h1>
      <TodoInput addTodo={addTodo}/>
      <ul>
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    todo={todo}
                    index={index}
                    removeTodo={removeTodo}
                    todoCompleted={todoCompleted}
                   
                />
            ))}
        </ul>
    </div>
  )
}

export default TodoPage

