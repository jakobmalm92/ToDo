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
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}> 
            <span onClick={handleToggleCompletion}>{todo.text}</span>
            <button onClick={handleRemoveClick}>Remove</button>
        </li>
    );
};

export default Todo;