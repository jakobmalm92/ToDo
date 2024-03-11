import React from 'react'

function Todo() {


    // Tar bort en todo från listan
    const removeClick = () => {

    }


    //Hanterar om en todo är klar eller ej
    const handleToggleCompletion = () => {

    }



  return (
    <div>
      <span onClick={handleToggleCompletion}>{todo.text}</span>
      <button onClick={removeClick}>Remove</button>
    </div>
  )
}

export default Todo
