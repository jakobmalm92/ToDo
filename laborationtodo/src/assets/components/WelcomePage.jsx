import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';




function WelcomePage() {
    const [name, setName] = useState(""); // State för att hålla namnet
    const navigate = useNavigate(); // För att navigera till TodoPage

    const handleStart = () => {
     navigate("/todo", {state: {name}}) //Navigerar det angivna namnet till todo sidan
    };

    return (
        <div className='todo-container'>
            <h1>Todo Lista</h1>
            <form onSubmit={handleStart}>
                <input className="todo-input" type="text" placeholder='Skriv ditt namn' value={name} onChange={(e) => setName(e.target.value)} required />
                <button type="submit">Starta</button> 
            </form>
        </div>
    );
}

export default WelcomePage;
