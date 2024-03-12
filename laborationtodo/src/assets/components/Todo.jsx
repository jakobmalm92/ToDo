import React from 'react';

const Todo = ({ todo, index, removeTodo, todoCompleted }) => {
    const handleRemoveClick = () => {
        removeTodo(index);
    };

    const handleToggleCompletion = () => {
        todoCompleted(index);
    };


    return (
        <div className='todo-item'>
        <span style={{ textDecorationLine: todo.completed ? 'line-through' : 'none', textDecorationSkipInk: 'none' }} onClick={handleToggleCompletion}>{todo.text}</span>
        <button className='btn-todo' onClick={handleRemoveClick}>Ta bort</button>
    </div>
    
    );
};

export default Todo;