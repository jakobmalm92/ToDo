import React from 'react';

const Todo = ({ todo, index, removeTodo, todoCompleted }) => {
    const handleRemoveClick = () => {
        removeTodo(index);
    };

    const handleToggleCompletion = () => {
        todoCompleted(index);
    };


    // Rad 15 behövs ej
    return (
        <li className='todo-item' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}> 
            <span onClick={handleToggleCompletion}>{todo.text}</span>
            <button className='btn-todo' onClick={handleRemoveClick}>Ta bort</button>
        </li>
    );
};

export default Todo;