import React, { useState } from 'react'

function TodoInput() {

    const [todoName, SetTodoName] = useState("")

    const handleSubmit = () => {

    }

    const handleInputChange = () => {

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

