import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function WelcomePage() {

const [name, setName] = useState("");
const navigate = useNavigate(); // För att kunna navigera till TodoPage

const handlestart = () => {
    navigate("/todo", {state: {name}}) //Navigerar med namnet till TodoPage
};



  return (
    <div>
      <h1>Todo Lista</h1>
      <form onSubmit={handlestart}>
        <input type="text"
        placeholder='Skriv ditt namn'
        value={name} 
        onChange={(e) => setName(e.target.value)} required/>
      <button type='submit'>Starta</button>
      </form>
    </div>
  )
}

export default WelcomePage
