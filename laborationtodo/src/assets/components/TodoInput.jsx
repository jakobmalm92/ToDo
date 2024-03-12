import React, { useState } from 'react'

function TodoInput({ addTodo }) {

    const [todoName, SetTodoName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoName.trim()) {
           const formattedTodoName = todoName.charAt(0).toUpperCase() + todoName.slice(1);
           addTodo(formattedTodoName);
           SetTodoName("");
        }

    }

    const handleInputChange = (e) => {

        SetTodoName(e.target.value);

    }


  return (
    <div>
      <form onSubmit={handleSubmit}> 
      <input type="text"
      placeholder='Lägg till en todo'
      value={todoName}
      onChange={handleInputChange}
      required />
      <button type='submit'>Lägg till</button>

      </form>
    </div>
  )
}

export default TodoInput

